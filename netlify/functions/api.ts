import express, { Router, response } from "express";
import serverless from "serverless-http";
import cors from "cors";

const api = express();

const APIKey = process.env.APIKey;

api.use(cors());

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
