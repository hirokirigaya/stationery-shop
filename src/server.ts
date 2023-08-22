import { app } from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const port = process.env.PORT || 8000;
dotenv.config();

const db = process.env.DB_URL;

if (db) {
  mongoose
    .connect(db)
    .then(() => {
      console.log('Connected to database');
      app.listen(port, () => {
        console.log('Running in port ' + port);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
