export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../gateway';
import { createWebcamServiceRoutes } from '../../../../src/generated/server/meridian/webcam/v1/service_server';
import { webcamHandler } from '../../../meridian/webcam/v1/handler';

export default createDomainGateway(
  createWebcamServiceRoutes(webcamHandler, serverOptions),
);
