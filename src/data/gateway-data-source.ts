import { default as axios } from 'axios';
import winston from 'winston';

import { ContiguousDataResponse, ContiguousDataSource } from '../types.js';

export class GatewayDataSource implements ContiguousDataSource {
  private log: winston.Logger;
  private trustedGatewayAxios;

  constructor({
    log,
    trustedGatewayUrl,
  }: {
    log: winston.Logger;
    trustedGatewayUrl: string;
  }) {
    this.log = log.child({ class: 'TxDataChunksRetriever' });
    this.trustedGatewayAxios = axios.create({
      baseURL: trustedGatewayUrl,
    });
  }

  async getContiguousData(id: string): Promise<ContiguousDataResponse> {
    this.log.info('Fetching contiguous data for tx', { txId: id });

    const response = await this.trustedGatewayAxios.request({
      method: 'GET',
      url: `/raw/${id}`,
      responseType: 'stream',
    });

    return {
      stream: response.data,
      size: response.data.length,
      verified: false,
      contentType: response.headers['content-type'],
    };
  }
}