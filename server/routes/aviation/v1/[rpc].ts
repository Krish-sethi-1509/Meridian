export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createAviationServiceRoutes } from '../../../../src/generated/server/meridian/aviation/v1/service_server';
import { aviationHandler } from '../../../meridian/aviation/v1/handler';

export default createDomainGateway(
  createAviationServiceRoutes(aviationHandler, serverOptions),
);
