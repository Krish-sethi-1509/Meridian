export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createTradeServiceRoutes } from '../../../../src/generated/server/worldmonitor/trade/v1/service_server';
import { tradeHandler } from '../../../worldmonitor/trade/v1/handler';

export default createDomainGateway(
  createTradeServiceRoutes(tradeHandler, serverOptions),
);
