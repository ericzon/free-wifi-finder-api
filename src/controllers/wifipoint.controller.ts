import * as mongoose from "mongoose";
import * as express from "express";
//import { wifipointSchema } from "../models/wifipoint";

const Wifipoint = mongoose.model('Wifipoint');
export class WifipointController {
    public static getWifipoints(req: express.Request, res: express.Response) {
        
        Wifipoint.find({}, (err: any, wifiRes: any) => {
            if(err) {
                console.log("getWifipoints > ERR: ",err);
            }
            console.log("getWifipoints > GET ",wifiRes.length);
            res.json({bundle: wifiRes});
        });
    }
}