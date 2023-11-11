// environmental variables
import "dotenv/config";

// db connection
import * as connection from './config/database/connection.js'

// express setup
import express from "express";
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

//routers
import authRouter from "./routers/authRouters.js";
app.use(authRouter);

//usersRouters
import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);

//protected routers
import protectedRouters from "./routers/loginCheckRouter.js"
app.use(protectedRouters);

//email
import emailRouter from "./routers/emailRouter.js"
app.use(emailRouter);

//app run
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT))