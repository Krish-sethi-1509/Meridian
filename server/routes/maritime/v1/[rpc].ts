export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createMaritimeServiceRoutes } from '../../../../src/generated/server/meridian/maritime/v1/service_server';
import { maritimeHandler } from '../../../meridian/maritime/v1/handler';

export default createDomainGateway(
  createMaritimeServiceRoutes(maritimeHandler, serverOptions),
);
