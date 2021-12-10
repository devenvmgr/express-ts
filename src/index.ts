import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import corsOptions from './middleware/cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(morgan('combined'));

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
