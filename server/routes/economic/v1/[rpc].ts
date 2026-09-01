export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createEconomicServiceRoutes } from '../../../../src/generated/server/meridian/economic/v1/service_server';
import { economicHandler } from '../../../meridian/economic/v1/handler';

export default createDomainGateway(
  createEconomicServiceRoutes(economicHandler, serverOptions),
);
