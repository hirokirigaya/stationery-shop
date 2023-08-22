import express, { Express } from 'express';
import dotenv from 'dotenv';
import { router } from './routes';

const app: Express = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

export { app };
