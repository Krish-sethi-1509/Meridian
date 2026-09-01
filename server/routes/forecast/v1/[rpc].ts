export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createForecastServiceRoutes } from '../../../../src/generated/server/meridian/forecast/v1/service_server';
import { forecastHandler } from '../../../meridian/forecast/v1/handler';

export default createDomainGateway(
  createForecastServiceRoutes(forecastHandler, serverOptions),
);
