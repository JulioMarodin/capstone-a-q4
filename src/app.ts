import express, { json } from "express";
import apiRouter from "./routes";

const app = express();

app.use(json());
app.use('/api', apiRouter);

export default app;
