'use strict';
const httpServer = require('http-server');
const chokidar = require('chokidar-socket-emitter');
// default config setup
const defaultConfig = {
  baseUrl: '.',
  hotReload: true,
  caching: false,
  host: 'localhost',
  port: 8888
};
// createServer
const server = httpServer.createServer({
  root: defaultConfig.baseUrl,
  cache: defaultConfig.caching ? 3600 : -1,
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
});

// main
showInfoHeader();
// inject chokidar-socket-emitter
if (defaultConfig.hotReload) {
  chokidar({
    app: server.server
  });
}
// start server
server.listen(defaultConfig.port);
console.log('http-server running at http://' + defaultConfig.host + ':' + defaultConfig.port + '\n\n');

// logging helpers
function showInfoHeader() {
  const versionInfo = require('./package.json').version;
  const environmentInfo = (process.env.NODE_ENV === 'production' ? 'production ' : 'development');
  const cachingInfo = (defaultConfig.caching ? 'enabled ' : 'disabled');
  const hot_reloadInfo = (defaultConfig.hotReload ? 'enabled ' : 'disabled');

  console.log('\n' +
    '#################################' + '\n' +
    '#    JSPM Hot-Reload Server    ##' + '\n' +
    '#------------------------------##' + '\n' +
    '# version      | ' + versionInfo + '         ##' + '\n' +
    '# environment  | ' + environmentInfo + '   ##' + '\n' +
    '# caching      | ' + cachingInfo + '      ##' + '\n' +
    '# hot-reload   | ' + hot_reloadInfo + '      ##' + '\n' +
    '#################################' + '\n'
  );
}
