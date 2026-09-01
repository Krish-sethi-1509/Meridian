export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createDisplacementServiceRoutes } from '../../../../src/generated/server/meridian/displacement/v1/service_server';
import { displacementHandler } from '../../../meridian/displacement/v1/handler';

export default createDomainGateway(
  createDisplacementServiceRoutes(displacementHandler, serverOptions),
);
