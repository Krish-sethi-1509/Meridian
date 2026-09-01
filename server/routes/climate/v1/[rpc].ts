export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createClimateServiceRoutes } from '../../../../src/generated/server/worldmonitor/climate/v1/service_server';
import { climateHandler } from '../../../worldmonitor/climate/v1/handler';

export default createDomainGateway(
  createClimateServiceRoutes(climateHandler, serverOptions),
);
