export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createNaturalServiceRoutes } from '../../../../src/generated/server/meridian/natural/v1/service_server';
import { naturalHandler } from '../../../meridian/natural/v1/handler';

export default createDomainGateway(
  createNaturalServiceRoutes(naturalHandler, serverOptions),
);
