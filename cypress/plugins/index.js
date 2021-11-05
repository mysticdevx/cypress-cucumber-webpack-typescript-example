/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
const webpack = require("@cypress/webpack-preprocessor");
const AllureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = (on, config) => {
  const options = {
    webpackOptions: require("../webpack.config.js")
  };
  on("file:preprocessor", webpack(options));

    AllureWriter(on, config);
    return config;
};
