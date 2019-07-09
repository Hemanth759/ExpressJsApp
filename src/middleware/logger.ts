import { Request, Response, NextFunction } from 'express';
import moment from 'moment';

const logger = (req: Request, res: Response, next: NextFunction): void => {
  console.log(`\n${req.protocol.toString()}://${req.get('host')}${req.url}  ${moment().format()}`);
  next();
}

export { logger as Logger}; 