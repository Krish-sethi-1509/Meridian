export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createSupplyChainServiceRoutes } from '../../../../src/generated/server/worldmonitor/supply_chain/v1/service_server';
import { supplyChainHandler } from '../../../worldmonitor/supply-chain/v1/handler';

export default createDomainGateway(
  createSupplyChainServiceRoutes(supplyChainHandler, serverOptions),
);
