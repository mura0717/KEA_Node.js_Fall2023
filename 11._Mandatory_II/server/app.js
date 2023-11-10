// environmental variables
import "dotenv/config";


// db connection
import * as connection from './config/database/connection.js'

// express setup
import express from "express";
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.use(bodyParser.json())

//routers
import authRouter from "./routers/authRouter.js";
app.use(authRouter);

//usersRouters
import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);

//protected routers
import protectedRouters from "./routers/loginCheckRouters.js"
import bodyParser from "body-parser";
app.use(protectedRouters);

//app run
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT))