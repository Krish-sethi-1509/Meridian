export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createConsumerPricesServiceRoutes } from '../../../../src/generated/server/worldmonitor/consumer_prices/v1/service_server';
import { consumerPricesHandler } from '../../../worldmonitor/consumer-prices/v1/handler';

export default createDomainGateway(
  createConsumerPricesServiceRoutes(consumerPricesHandler, serverOptions),
);
