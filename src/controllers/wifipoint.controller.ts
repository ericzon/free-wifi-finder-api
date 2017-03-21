"use strict";

import * as mongoose from "mongoose";
import { Request, Response } from "express";
import logger from '../libs/logger';

const Wifipoint = mongoose.model('wifipoint');

export class WifipointController {
    public static getWifipoints(req: Request, res: Response) {
        Wifipoint.find().exec().then(function(wifiRes: any) {
            // logger.verbose("getWifipoints > GET ",wifiRes);
            logger.verbose("getWifipoints > GET ");
            res.json({bundle: wifiRes});
        }, function(err: any) {
            logger.error("getWifipoints > ERR: ",err);
            res.status(500).end();
        });
    }

    public static getNearestWifipoints(req: Request, res: Response) {
        let body = req.body;
        // console.log(req);
        logger.verbose("getNearestWifipoints > POST > body: ",body);
        res.json(body);
    }
}