// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

const application = require('./dist');

module.exports = application;

if (require.main === module) {
  // Run the application
  console.log("In Shopping Package " + process.env.HOST, process.env.PORT)
  const host = process.env.HEROKU_APP_NAME ? process.env.HEROKU_APP_NAME + ".herokuapp.com" : 'localhost';
  const port = +(process.env.PORT || 60000);

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
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
      // Enable HTTPS
      protocol: 'https',
    },
  };
  application.main(options).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
