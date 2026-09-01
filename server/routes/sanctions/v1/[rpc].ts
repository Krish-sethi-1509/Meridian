export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createSanctionsServiceRoutes } from '../../../../src/generated/server/meridian/sanctions/v1/service_server';
import { sanctionsHandler } from '../../../meridian/sanctions/v1/handler';

export default createDomainGateway(
  createSanctionsServiceRoutes(sanctionsHandler, serverOptions),
);
