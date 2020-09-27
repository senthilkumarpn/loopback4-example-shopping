// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

const application = require('./dist');
const NODE_ENV = require('../../config');
module.exports = application;

if (require.main === module) {
  // Run the application
  console.log("In Shopping Package " + process.env.HOST, process.env.PORT)
  console.log(process.env.HEROKU_APP_NAME);
  const host = process.env.HOST || '0.0.0.0';
  const port = +(process.env.PORT || 3000);
  let _a;
  const options = {
    rest: {
      cors: {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        preflightContinue: true,
        optionsSuccessStatus: 204,
        maxAge: 86400,
        credentials: true,
      },
      port: +((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000),
      host: process.env.HOST,
      // The `gracePeriodForClose` provides a graceful close for http/https
      // servers with keep-alive clients. The default value is `Infinity`
      // (don't force-close). If you want to immediately destroy all sockets
      // upon stop, set its value to `0`.
      // See https://www.npmjs.com/package/stoppable
      gracePeriodForClose: 5000,
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
    },
  };
  application.main(options).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
