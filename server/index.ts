import * as http from 'http';

import Server from './server';

const port = process.env.PORT || 3000;

const server = http.createServer(Server);
server.listen(port);
