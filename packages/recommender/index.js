// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-recommender
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
const NODE_ENV = require('../../config');

const application = require('./dist');

module.exports = application;

if (require.main === module) {
  // Run the application
  console.log("In Recommender Package " + process.env.HOST, process.env.PORT)
  console.log(process.env.HEROKU_APP_NAME, NODE_ENV);
  const host = process.env.HOST || '0.0.0.0';
  const port = +(process.env.RECOMMENDER_REST_SERVICE_PORT_REST || 3001);
  let _a;
  const port = +((_a = process.env.RECOMMENDER_REST_SERVICE_PORT_REST) !== null && _a !== void 0 ? _a : 3001),

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
      port: port,
      host: host,
      gracePeriodForClose: 5000,
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
      // Enable HTTPS
      // protocol: 'https',
    },
  };
  console.log("In Recommender Package " + options.rest.host, options.rest.port)

  application.main(options).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
