"use strict";

import * as express from 'express';
import { WifipointController } from "../controllers/wifipoint.controller";
export default (app: any) => {
	console.log("Main route enabled");
	const router = express.Router();
	router.get('/wifipoints', WifipointController.getWifipoints);
	app.use(router);
};
