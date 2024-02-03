import Express, {Request, Response, ErrorRequestHandler } from "express";
import path from "path";
import dotenv from 'dotenv';
import cors from 'cors';

import { routes } from "./routes/routes";
import { MulterError } from "multer";

dotenv.config();

export const server = Express();

server.use(cors());
server.use(Express.urlencoded({extended:true}));
server.use(Express.static(path.join(__dirname, '../public')));

server.use(routes);

server.use((req:Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint not found!'});
});
 
const errorHandler:ErrorRequestHandler = (err, req, res,next) => {
    res.status(400);//Bad Request

    if(err instanceof MulterError) {
        res.json({error: err.code});
    } else {
        console.log(err);
        res.json({error: 'unexpected error'});
    }

};

server.use(errorHandler);

server.listen(process.env.PORT);

