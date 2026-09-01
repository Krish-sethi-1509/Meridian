export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createGivingServiceRoutes } from '../../../../src/generated/server/meridian/giving/v1/service_server';
import { givingHandler } from '../../../meridian/giving/v1/handler';

export default createDomainGateway(
  createGivingServiceRoutes(givingHandler, serverOptions),
);
