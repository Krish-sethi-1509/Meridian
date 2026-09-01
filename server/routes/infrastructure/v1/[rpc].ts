export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createInfrastructureServiceRoutes } from '../../../../src/generated/server/meridian/infrastructure/v1/service_server';
import { infrastructureHandler } from '../../../meridian/infrastructure/v1/handler';

export default createDomainGateway(
  createInfrastructureServiceRoutes(infrastructureHandler, serverOptions),
);
