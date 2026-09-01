export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createRadiationServiceRoutes } from '../../../../src/generated/server/worldmonitor/radiation/v1/service_server';
import { radiationHandler } from '../../../worldmonitor/radiation/v1/handler';

export default createDomainGateway(
  createRadiationServiceRoutes(radiationHandler, serverOptions),
);
