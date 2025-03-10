/**
 * AR.IO Gateway
 * Copyright (C) 2022-2023 Permanent Data Solutions, Inc. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import * as promClient from 'prom-client';
/* eslint-disable */
// @ts-ignore
import PrometheusMetrics from 'opossum-prometheus';

export const circuitBreakerMetrics = new PrometheusMetrics({
  registry: promClient.register,
});

//
// Global error metrics
//

export const errorsCounter = new promClient.Counter({
  name: 'errors_total',
  help: 'Total error count',
});

export const uncaughtExceptionCounter = new promClient.Counter({
  name: 'uncaught_exceptions_total',
  help: 'Count of uncaught exceptions',
});

//
// Global bundle metrics
//

export const bundlesCounter = new promClient.Counter({
  name: 'bundles_total',
  help: 'Count of all bundles seen',
  labelNames: ['bundle_format', 'parent_type'],
});

export const bundlesMatchedCounter = new promClient.Counter({
  name: 'bundles_matched_total',
  help: 'Count of bundles matched for unbundling',
  labelNames: ['bundle_format'],
});

export const bundlesQueuedCounter = new promClient.Counter({
  name: 'bundles_queued_total',
  help: 'Count of bundles queued for unbundling',
  labelNames: ['bundle_format'],
});

export const bundlesUnbundledCounter = new promClient.Counter({
  name: 'bundles_unbundled_total',
  help: 'Count of bundles unbundled',
  labelNames: ['bundle_format'],
});

export const dataItemsQueuedCounter = new promClient.Counter({
  name: 'data_items_queued_total',
  help: 'Count of data items queued for indexing',
  labelNames: ['bundle_format'],
});

export const dataItemsIndexedCounter = new promClient.Counter({
  name: 'data_items_indexed_total',
  help: 'Count of data items indexed',
});

//
// Arweave client metrics
//

export const arweavePeerInfoErrorCounter = new promClient.Counter({
  name: 'arweave_peer_info_errors_total',
  help: 'Count of failed Arweave peer info requests',
});

export const arweavePeerRefreshErrorCounter = new promClient.Counter({
  name: 'arweave_peer_referesh_errors_total',
  help: 'Count of errors refreshing the Arweave peers list',
});

//
// SQLite metrics
//

export const methodDurationSummary = new promClient.Summary({
  name: 'standalone_sqlite_method_duration_seconds',
  help: 'Count of failed Arweave peer info requests',
  labelNames: ['worker', 'role', 'method'],
});

//
// Block importer metrics
//

export const blockImporterRunningGauge = new promClient.Gauge({
  name: 'block_importer_running',
  help: 'Depth of the last observed chain fork',
});

export const forksCounter = new promClient.Counter({
  name: 'forks_total',
  help: 'Count of chain forks observed',
});

export const lastForkDepthGauge = new promClient.Gauge({
  name: 'last_fork_depth',
  help: 'Depth of the last observed chain fork',
});

export const blocksImportedCounter = new promClient.Counter({
  name: 'blocks_imported_total',
  help: 'Count of blocks imported',
});

export const transactionsImportedCounter = new promClient.Counter({
  name: 'block_transactions_imported_total',
  help: 'Count of transactions imported',
});

export const missingTransactionsCounter = new promClient.Counter({
  name: 'missing_block_transactions_total',
  help: 'Count of block transactions that could not be immediately fetched',
});

export const blockImportErrorsCounter = new promClient.Counter({
  name: 'block_import_errors_total',
  help: 'Count of block import errors',
});

export const lastHeightImported = new promClient.Gauge({
  name: 'last_height_imported',
  help: 'Height of the last block imported',
});

// Redis Cache Metrics

export const redisConnectionErrorsCounter = new promClient.Counter({
  name: 'redis_connection_errors_total',
  help: 'Number of errors connecting to redis',
});

export const redisErrorCounter = new promClient.Counter({
  name: 'redis_errors_total',
  help: 'Number of errors redis cache has received',
});
