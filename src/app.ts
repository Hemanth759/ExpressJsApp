import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';

// initailizing a app instance
const app: Application = express();

// setting a port number
const PORT: string = process.env.PORT || '5000';

app.get('/', (req: Request, res: Response, next: NextFunction) => { 
    res.sendFile(path.join(__dirname, "..", "public", 'index.html'));
});

app.listen(parseInt(PORT), () => console.log(`Server running on PORT: ${PORT}`));