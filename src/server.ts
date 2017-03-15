"use strict";

import * as http from 'http';
import * as express from "express";
import { DbHelper } from "./services/db";
import { RoutesProvider } from './routes';
import { ToolsController } from './controllers/tools.server.controller';
import logger from './libs/logger';

const config = require('./config/config');
const port = ToolsController.normalizePort( process.env.PORT || config.port );
const app: express.Application = express();

logger.info("Loading config: ",config);
DbHelper.init();

// Routes
RoutesProvider.initRoutes(app);
const server = http.createServer(app).listen(port);

server.on("listening", function onListening() {
	let addr = server.address();
	let bind = typeof addr === "string"
	? "pipe " + addr
	: "port " + addr.port;
	logger.info("Listening on " + bind);
});

server.on("error", function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }
  let bind = typeof port === "string"
    ? "Pipe " + port
    : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      logger.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      logger.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});

