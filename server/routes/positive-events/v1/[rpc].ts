export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createPositiveEventsServiceRoutes } from '../../../../src/generated/server/meridian/positive_events/v1/service_server';
import { positiveEventsHandler } from '../../../meridian/positive-events/v1/handler';

export default createDomainGateway(
  createPositiveEventsServiceRoutes(positiveEventsHandler, serverOptions),
);
