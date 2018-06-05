"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server_1 = require("./server");
var port = process.env.PORT || 3000;
var server = http.createServer(server_1.default);
server.listen(port);
//# sourceMappingURL=index.js.map