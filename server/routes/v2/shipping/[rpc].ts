export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createShippingV2ServiceRoutes } from '../../../../src/generated/server/meridian/shipping/v2/service_server';
import { shippingV2Handler } from '../../../meridian/shipping/v2/handler';

export default createDomainGateway(
  createShippingV2ServiceRoutes(shippingV2Handler, serverOptions),
);
