export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createMilitaryServiceRoutes } from '../../../../src/generated/server/meridian/military/v1/service_server';
import { militaryHandler } from '../../../meridian/military/v1/handler';

export default createDomainGateway(
  createMilitaryServiceRoutes(militaryHandler, serverOptions),
);
