// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {ApplicationConfig} from '@loopback/core';
import {ShoppingApplication} from './application';
export {PackageInfo, PackageKey, ShoppingApplication} from './application';

export async function main(options?: ApplicationConfig) {
  const app = new ShoppingApplication(options);
  //console.log(process.env.HOST, process.env.PORT);
  //console.log(app.restServer.httpServer?.host, app.restServer.httpServer?.port, app.restServer.listening);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);
  console.log(app.restServer.httpServer?.host, app.restServer.httpServer?.port, app.restServer.listening);

  return app;
}
