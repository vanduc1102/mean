'use strict';

function isProd() {
  return process.env.NODE_ENV === 'production';
}

function isDev() {
  return process.env.NODE_ENV === 'development';
}

module.exports = {
  isProd: isProd,
  isDev: isDev
};
