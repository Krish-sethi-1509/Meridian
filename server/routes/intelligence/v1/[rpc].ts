export const config = { runtime: 'edge', regions: ['iad1', 'lhr1', 'fra1', 'sfo1'] };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createIntelligenceServiceRoutes } from '../../../../src/generated/server/worldmonitor/intelligence/v1/service_server';
import { intelligenceHandler } from '../../../worldmonitor/intelligence/v1/handler';

export default createDomainGateway(
  createIntelligenceServiceRoutes(intelligenceHandler, serverOptions),
);
