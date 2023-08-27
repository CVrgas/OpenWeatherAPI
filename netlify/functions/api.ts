import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const value = process.env.EXAMPLE_KEY;

const router = Router();
router.get("/hello", (req, res) =>
	res.send(`<h2>Hello World! ${value ? value : ", no key"} <h2>`)
);

api.use("/api/", router);

export const handler = serverless(api);
