export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createForecastServiceRoutes } from '../../../../src/generated/server/worldmonitor/forecast/v1/service_server';
import { forecastHandler } from '../../../worldmonitor/forecast/v1/handler';

export default createDomainGateway(
  createForecastServiceRoutes(forecastHandler, serverOptions),
);
