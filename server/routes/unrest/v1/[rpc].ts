export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createUnrestServiceRoutes } from '../../../../src/generated/server/meridian/unrest/v1/service_server';
import { unrestHandler } from '../../../meridian/unrest/v1/handler';

export default createDomainGateway(
  createUnrestServiceRoutes(unrestHandler, serverOptions),
);
