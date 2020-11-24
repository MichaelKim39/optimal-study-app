import React from 'react';

// import log from '../utils/logger';

import '../styles/main.scss';

var a = require('debug')('worker:a');
let debug = require('debug');

const App = ({ Component, pageProps }) => {
    console.log(debug.enabled('worker:a'));
    debug.enable('worker:a');
    debug.log = console.info.bind(console);
    a('doing lots of uninteresting work');

    return <Component {...pageProps} />;
};

export default App;
