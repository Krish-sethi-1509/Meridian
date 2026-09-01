export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createWebcamServiceRoutes } from '../../../../src/generated/server/worldmonitor/webcam/v1/service_server';
import { webcamHandler } from '../../../worldmonitor/webcam/v1/handler';

export default createDomainGateway(
  createWebcamServiceRoutes(webcamHandler, serverOptions),
);
