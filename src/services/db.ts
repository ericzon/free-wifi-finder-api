"use strict";

import mongoose = require("mongoose");
require("../models/Wifipoint");
const config = require('../config/config');

export class DbHelper {
    public static init() {
        console.log("DB init");
        global.Promise = require("q").Promise;
        mongoose.Promise = global.Promise;
        mongoose.connect(config.db, function(err: any, db: any) {
            if(err) {
                console.log("[DB] Error connecting to db. ",err);
            }
            console.log("[DB] Connected to DB: ",mongoose.connection.db.databaseName);
            console.log("Collections list:");
            mongoose.connection.db.collections().then(function(collections) {
                collections.forEach( c => {
                    console.log(" - ",c.collectionName );
                });
            });            
        });

        process.on("SIGINT", () => {
            mongoose.connection.close(() => {
                console.log("[DB] Shutting down db connection");
                process.exit(0);
            });
        });
    }
};