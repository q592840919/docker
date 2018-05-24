'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1526625049133_4912';

  // add your config here
  config.middleware = [];
 
  config.mongoose = {
        url: 'mongodb://47.95.215.144:8098/happygo',
        options: {},
    };
  return config;
};

