export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createPredictionServiceRoutes } from '../../../../src/generated/server/meridian/prediction/v1/service_server';
import { predictionHandler } from '../../../meridian/prediction/v1/handler';

export default createDomainGateway(
  createPredictionServiceRoutes(predictionHandler, serverOptions),
);
