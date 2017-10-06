'use strict';

const semver = require('semver');
const engines =  require('./package').engines;
const chalk = require('chalk');

const version = engines.node;
if (!semver.satisfies(process.version, version)) {
  let msg = `Required node version ${version} not satisfied with current version ${process.version}.`;
  console.error(chalk.red(msg.toUpperCase()));
  process.exit(1);
}