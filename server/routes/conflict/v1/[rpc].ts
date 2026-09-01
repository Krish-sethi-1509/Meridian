export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createConflictServiceRoutes } from '../../../../src/generated/server/meridian/conflict/v1/service_server';
import { conflictHandler } from '../../../meridian/conflict/v1/handler';

export default createDomainGateway(
  createConflictServiceRoutes(conflictHandler, serverOptions),
);
