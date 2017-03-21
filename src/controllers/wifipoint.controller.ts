"use strict";

import * as mongoose from "mongoose";
import { Request, Response } from "express";
import logger from '../libs/logger';

const Wifipoint = mongoose.model('wifipoint');

export class WifipointController {
    public static getWifipoints(req: Request, res: Response) {
        Wifipoint.find({}, Wifipoint.getReadFilterKeys()).exec().then(function(wifiRes: any) {
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
        logger.verbose("getNearestWifipoints > POST > body: ",body);
        const hardLimit = 10;
        const lim = (body.limit && body.limit < hardLimit) ? body.limit : hardLimit;
        const positionCoords = body.coords;
        const nearestQuery = {
            position: {
                $near: {
                    $geometry: {
                        type: "Point" ,
                        coordinates: [
                            positionCoords.lng,
                            positionCoords.lat 
                        ]
                    },
                    $maxDistance: 10000
                }
            }
        };
        Wifipoint.find(nearestQuery, Wifipoint.getReadFilterKeys()).limit(lim).exec().then(function(nearestRes: any[]) {
            logger.verbose("getNearestWifipoints > points: ",nearestRes.length);
            res.json(nearestRes);
        }).catch(function(nearestErr: Error) {
            logger.error("getNearestWifipoints > error: ",nearestErr.message);
            res.json([]);
        });
    }
}