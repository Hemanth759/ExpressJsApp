import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';

import { Members } from './staticOjects/members';

// initailizing a app instance
const app: Application = express();

const logger = (req: Request, res: Response, next: NextFunction): void => {
  console.log(`\n${req.protocol.toString()}://${req.get('host')}${req.url}`);
  next();
}

// setting a port number
const PORT: string = process.env.PORT || '5000';

// init Middlewre
app.use(logger);

app.get('/api/members', (req: Request, res: Response) => {
  res.json(Members);
})

// Set static folder
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(parseInt(PORT), () => console.log(`Server running on PORT: ${PORT}`));
