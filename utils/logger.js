let debug = require('debug');
const log = require('debug')('log');
const error = require('debug')('error');

log('Hello');

// if (process.env.NODE_ENV === 'production') {
//     console.log('App in production mode, debug logging disabled...');
//     debug.disable();
// } else {
//     console.log('App in development mode, debug logging enabled...');
//     debug.enable('log');
//     debug.enable('error');
//     log('Hello');
// }

export default log;
