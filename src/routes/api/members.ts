import Express, { Application, Request, Response, NextFunction } from 'express';
import { Router } from 'express-serve-static-core';

import { Members } from '../../staticOjects/members';

const router: Router = Express.Router();

// get all members
router.get('/', (req: Request, res: Response) => {
  res.json(Members);
});

// get only single member with id
router.get('/:id', (req: Request, res: Response) => {
  const found: Boolean = Members.some((member) => { return member.id === parseInt(req.params.id) });
  if(found) {
    const member = Members.filter((member) => { return member.id === parseInt(req.params.id) });
    res.json(member);
  } else {
    res.status(400).end('Not found');
  }
});

export { router };
