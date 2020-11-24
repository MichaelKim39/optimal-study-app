const routes = require('./routes');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);
// const handle = app.getRequestHandler()

app.prepare().then(() => {
    // initialise server
    const server = express();
    // define port number
    const PORT = process.env.PORT || 3000;
    // request handler
    server.all('*', (req, res) => {
        return handle(req, res);
    });
    // Listener to PORT
    server.listen(PORT, (error) => {
        if (error) {
            console.log('Server-side Error: ', error);
        }
        console.log(`-> Ready on localhost:${PORT}`);
    });
});
