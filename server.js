'use strict'
const httpServer = require('http-server');

// default cache disabled
let cache = -1;
if (process.env.NODE_ENV === 'production') {
  cache = 3600;
  const msg = 'Running in production mode (caching is enabled)';
  console.log(msg);
}

const server = httpServer.createServer({
  root: './',
  cache: cache,
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
});

require('chokidar-socket-emitter')({app: server.server});

server.listen(8888);
console.log('Started http-server with chokidar-socket-emitter');
console.log('Running on localhost:8888');
