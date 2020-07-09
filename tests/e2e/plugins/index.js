const webpack = require('@cypress/webpack-preprocessor');

// https://docs.cypress.io/guides/guides/plugins-guide.html
module.exports = (on, config) => {
  on('file:preprocessor', webpack());
  return Object.assign({}, config, {
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js',
    env: process.env,
  });
};
