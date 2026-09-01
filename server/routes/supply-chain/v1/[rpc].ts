export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createSupplyChainServiceRoutes } from '../../../../src/generated/server/meridian/supply_chain/v1/service_server';
import { supplyChainHandler } from '../../../meridian/supply-chain/v1/handler';

export default createDomainGateway(
  createSupplyChainServiceRoutes(supplyChainHandler, serverOptions),
);
