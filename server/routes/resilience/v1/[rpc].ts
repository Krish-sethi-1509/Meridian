export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createResilienceServiceRoutes } from '../../../../src/generated/server/meridian/resilience/v1/service_server';
import { resilienceHandler } from '../../../meridian/resilience/v1/handler';

export default createDomainGateway(
  createResilienceServiceRoutes(resilienceHandler, serverOptions),
);
