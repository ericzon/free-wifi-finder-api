"use strict";

import * as express from 'express';
import logger from '../libs/logger';
import { WifipointController } from "../controllers/wifipoint.controller";

export default (app: any) => {
	logger.info("Wifipoints route enabled");
	const router = express.Router();
	router.get('/wifipoints', WifipointController.getWifipoints);
	router.post('/wifipoints/find-nearest', WifipointController.getNearestWifipoints);
	app.use(router);
};
