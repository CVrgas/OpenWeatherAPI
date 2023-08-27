import express, { Router, response } from "express";
import serverless from "serverless-http";
import cors from "cors";

const api = express();

const APIKey = process.env.APIKey;

api.use(cors());

const router = Router();
router.get("/hello", (req, res) => res.send("<h1>Hellow<h1>"));
router.get("/hello/:city", (req, res) => {
	const city = req.params.city;
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}}&appid=${APIKey}`
	)
		.then((response) => response.json())
		.then((json) => {
			res.send(json);
		});
});

api.use("/api/", router);

export const handler = serverless(api);
