const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        config.plugins.push(new Dotenv({ silent: true }));
        return config;
    },
    env: {
        APP_NAMESPACE: process.env.APP_NAMESPACE,
        API_BASE_URL: process.env.API_BASE_URL,
        LOCAL_BASE_URL: process.env.LOCAL_BASE_URL,
    },
};
