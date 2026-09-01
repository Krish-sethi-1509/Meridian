export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createImageryServiceRoutes } from '../../../../src/generated/server/meridian/imagery/v1/service_server';
import { imageryHandler } from '../../../meridian/imagery/v1/handler';

export default createDomainGateway(
  createImageryServiceRoutes(imageryHandler, serverOptions),
);
