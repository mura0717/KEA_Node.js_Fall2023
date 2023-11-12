//===================ENV VARIABLES===================//
import "dotenv/config";

//===================DATABASE===================//
import * as connection from './config/database/connection.js'

//===================EXPRESS SETUP===================//
import express from "express";
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//===================DEPENDENCIES===================//
import bodyParser from "body-parser";
app.use(bodyParser.json())

import helmet from "helmet";
app.use(helmet());

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173', 'http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    optionsSuccessStatus: 204,
}));

import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

//===================ROUTERS===================//

import signupRouter from "./routers/signupRouter.js"
app.use(signupRouter);

import loginRouters from "./routers/loginRouters.js";
app.use(loginRouters);

import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);

import adminRouters from "./routers/adminRouters.js";
app.use(adminRouters);

import emailRouter from "./routers/emailRouter.js"
app.use(emailRouter);

//===================EXPRESS APP===================//
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT))
