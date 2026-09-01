export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createDisplacementServiceRoutes } from '../../../../src/generated/server/worldmonitor/displacement/v1/service_server';
import { displacementHandler } from '../../../worldmonitor/displacement/v1/handler';

export default createDomainGateway(
  createDisplacementServiceRoutes(displacementHandler, serverOptions),
);
