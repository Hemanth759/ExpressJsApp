import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';

import { router } from './routes/api/members'
import { Logger } from './middleware/logger'

// initailizing a app instance
const app: Application = express();

// setting a port number
const PORT: string = process.env.PORT || '5000';

// init Middlewre
// app.use(Logger);
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Set API routes
app.use('/api/members/', router);

// Set static folder
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(parseInt(PORT), () => console.log(`Server running on PORT: ${PORT}`));
