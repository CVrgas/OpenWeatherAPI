import express, { Router, response } from "express";
import serverless from "serverless-http";

const api = express();

const APIKey = process.env.APIKey;

const router = Router();
router.get("/hello", (req, res) =>
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=COLOMBIA}&appid=${APIKey}`
	).then((response) => {
		res.send(response);
	})
);

api.use("/api/", router);

export const handler = serverless(api);
