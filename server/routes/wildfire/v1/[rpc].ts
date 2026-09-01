export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createWildfireServiceRoutes } from '../../../../src/generated/server/meridian/wildfire/v1/service_server';
import { wildfireHandler } from '../../../meridian/wildfire/v1/handler';

export default createDomainGateway(
  createWildfireServiceRoutes(wildfireHandler, serverOptions),
);
