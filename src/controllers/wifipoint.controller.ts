"use strict";

import * as mongoose from "mongoose";
import { Request, Response } from "express";
import logger from '../libs/logger';

const Wifipoint = mongoose.model('wifipoint');

export class WifipointController {
    public static getWifipoints(req: Request, res: Response) {
        Wifipoint.find().limit(1).exec().then(function(wifiRes: any) {
            logger.verbose("getWifipoints > GET ",wifiRes);
            res.json({bundle: wifiRes});
        }, function(err: any) {
            logger.error("getWifipoints > ERR: ",err);
            res.status(500).end();
        });
    }
}