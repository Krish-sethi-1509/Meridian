export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createScenarioServiceRoutes } from '../../../../src/generated/server/meridian/scenario/v1/service_server';
import { scenarioHandler } from '../../../meridian/scenario/v1/handler';

export default createDomainGateway(
  createScenarioServiceRoutes(scenarioHandler, serverOptions),
);
