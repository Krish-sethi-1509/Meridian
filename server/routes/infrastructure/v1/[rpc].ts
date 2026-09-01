export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createInfrastructureServiceRoutes } from '../../../../src/generated/server/worldmonitor/infrastructure/v1/service_server';
import { infrastructureHandler } from '../../../worldmonitor/infrastructure/v1/handler';

export default createDomainGateway(
  createInfrastructureServiceRoutes(infrastructureHandler, serverOptions),
);
