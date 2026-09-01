export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createThermalServiceRoutes } from '../../../../src/generated/server/meridian/thermal/v1/service_server';
import { thermalHandler } from '../../../meridian/thermal/v1/handler';

export default createDomainGateway(
  createThermalServiceRoutes(thermalHandler, serverOptions),
);
