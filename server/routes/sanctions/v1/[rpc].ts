export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createSanctionsServiceRoutes } from '../../../../src/generated/server/worldmonitor/sanctions/v1/service_server';
import { sanctionsHandler } from '../../../worldmonitor/sanctions/v1/handler';

export default createDomainGateway(
  createSanctionsServiceRoutes(sanctionsHandler, serverOptions),
);
