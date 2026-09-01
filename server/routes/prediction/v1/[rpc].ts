export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createPredictionServiceRoutes } from '../../../../src/generated/server/worldmonitor/prediction/v1/service_server';
import { predictionHandler } from '../../../worldmonitor/prediction/v1/handler';

export default createDomainGateway(
  createPredictionServiceRoutes(predictionHandler, serverOptions),
);
