import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';

import { Members } from './staticOjects/members';

// initailizing a app instance
const app: Application = express();

// setting a port number
const PORT: string = process.env.PORT || '5000';

app.get('/api/members', (req: Request, res: Response) => {
  res.json(Members);
})

// Set static folder
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(parseInt(PORT), () => console.log(`Server running on PORT: ${PORT}`));
