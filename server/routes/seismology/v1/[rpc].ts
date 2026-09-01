export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createSeismologyServiceRoutes } from '../../../../src/generated/server/worldmonitor/seismology/v1/service_server';
import { seismologyHandler } from '../../../worldmonitor/seismology/v1/handler';

export default createDomainGateway(
  createSeismologyServiceRoutes(seismologyHandler, serverOptions),
);
