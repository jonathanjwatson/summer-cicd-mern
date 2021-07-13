// https://dev.to/raspberrytyler/exiting-node-js-when-programmatically-using-concurrently-to-run-multiple-scripts-1o78

const concurrently = require('concurrently');

concurrently([
  "node server.js",
  "cd postmanTests && newman run Summer-CICD.postman_collection.json --delay-request 50 -r cli, json -e Localhost.postman_environment.json"
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
    // restartTries: 3,
  }).then(
      function onSuccess(exitInfo) {
        // This code is necessary to make sure the parent terminates 
        // when the application is closed successfully.
        process.exit();
      },
      function onFailure(exitInfo) {
        // This code is necessary to make sure the parent terminates 
        // when the application is closed because of a failure.
        process.exit();
      }
    );