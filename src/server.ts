import Express from "express";
import path from "path";
import dotenv from 'dotenv';
import cors from 'cors';

import { routes } from "./routes/routes";

dotenv.config();

export const server = Express();

server.use(cors());
server.use(Express.urlencoded({extended:true}));
server.use(Express.static(path.join(__dirname, '../public')));

server.use(routes);

server.listen(process.env.PORT);

