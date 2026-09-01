export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createBatchServiceRoutes } from '../../../../src/generated/server/meridian/batch/v1/service_server';
import { batchHandler } from '../../../meridian/batch/v1/handler';

export default createDomainGateway(
  createBatchServiceRoutes(batchHandler, serverOptions),
);
