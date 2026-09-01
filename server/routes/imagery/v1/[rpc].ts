export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createImageryServiceRoutes } from '../../../../src/generated/server/worldmonitor/imagery/v1/service_server';
import { imageryHandler } from '../../../worldmonitor/imagery/v1/handler';

export default createDomainGateway(
  createImageryServiceRoutes(imageryHandler, serverOptions),
);
