"use strict";

import * as express from 'express';

export default (app: any) => {
	console.log("Main routes enabled");
	const router = express.Router();
	router.get('/', (req: express.Request, res: express.Response) => {
		console.log("GET -> ",express);
		let msg = new Date() + "/ request";
		console.log(msg);
		res.json({ msg: msg });
	});
	app.use(router);
};