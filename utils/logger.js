var log = require('debug')('DEBUG');
let debug = require('debug');

if (process.env.NODE_ENV === 'production') {
    // Disable output for all namespaces
    console.log('App in production mode, debug logging disabled...');
    debug.disable();
} else {
    // Change output stream to web browser console
    debug.log = console.info.bind(console);
    // Enable namespaces
    console.log('App in development mode, debug logging enabled...');
    // console.log(debug.enabled('log'));
    debug.enable('DEBUG');
}

export { log };
