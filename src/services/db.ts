"use strict";

import mongoose = require("mongoose");
require("../models/Wifipoint");
import config from '../config/config';
import logger from '../libs/logger';

export class DbHelper {
    public static init() {
        logger.info("DB init");
        global.Promise = require("q").Promise;
        mongoose.Promise = global.Promise;
        mongoose.connect(config.db, function(err: any, db: any) {
            if(err) {
                logger.error("[DB] Error connecting to db. ",err);
            }
            logger.info("[DB] Connected to DB: ",mongoose.connection.db.databaseName);
            logger.verbose("Collections list:");
            mongoose.connection.db.collections().then(function(collections) {
                collections.forEach( c => {
                    logger.verbose(" - ",c.collectionName );
                });
            });            
        });

        process.on("SIGINT", () => {
            mongoose.connection.close(() => {
                logger.info("[DB] Shutting down db connection");
                process.exit(0);
            });
        });
    }
};