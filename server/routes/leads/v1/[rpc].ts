export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createLeadsServiceRoutes } from '../../../../src/generated/server/meridian/leads/v1/service_server';
import { leadsHandler } from '../../../meridian/leads/v1/handler';

export default createDomainGateway(
  createLeadsServiceRoutes(leadsHandler, serverOptions),
);
