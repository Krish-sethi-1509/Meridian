export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createResearchServiceRoutes } from '../../../../src/generated/server/meridian/research/v1/service_server';
import { researchHandler } from '../../../meridian/research/v1/handler';

export default createDomainGateway(
  createResearchServiceRoutes(researchHandler, serverOptions),
);
