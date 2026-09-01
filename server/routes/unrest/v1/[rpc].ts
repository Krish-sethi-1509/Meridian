export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createUnrestServiceRoutes } from '../../../../src/generated/server/worldmonitor/unrest/v1/service_server';
import { unrestHandler } from '../../../worldmonitor/unrest/v1/handler';

export default createDomainGateway(
  createUnrestServiceRoutes(unrestHandler, serverOptions),
);
