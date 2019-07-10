import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';

import { Members } from './staticOjects/members';
import { Logger } from './middleware/logger'

// initailizing a app instance
const app: Application = express();

// setting a port number
const PORT: string = process.env.PORT || '5000';

// init Middlewre
app.use(Logger);

// get all members
app.get('/api/members', (req: Request, res: Response) => {
  res.json(Members);
});

// get only single member with id
app.get('/api/members/:id', (req: Request, res: Response) => {
  const found: Boolean = Members.some((member) => { return member.id === parseInt(req.params.id) });
  if(found) {
    const member = Members.filter((member) => { return member.id === parseInt(req.params.id) });
    res.json(member);
  } else {
    res.status(400).end('Not found');
  }
});

// Set static folder
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(parseInt(PORT), () => console.log(`Server running on PORT: ${PORT}`));
