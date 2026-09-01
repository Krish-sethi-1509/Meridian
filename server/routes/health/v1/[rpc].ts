export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createHealthServiceRoutes } from '../../../../src/generated/server/meridian/health/v1/service_server';
import { healthHandler } from '../../../meridian/health/v1/handler';

export default createDomainGateway(
  createHealthServiceRoutes(healthHandler, serverOptions),
);
