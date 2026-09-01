export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createResearchServiceRoutes } from '../../../../src/generated/server/worldmonitor/research/v1/service_server';
import { researchHandler } from '../../../worldmonitor/research/v1/handler';

export default createDomainGateway(
  createResearchServiceRoutes(researchHandler, serverOptions),
);
