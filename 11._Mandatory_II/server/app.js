// environmental variables
import "dotenv/config";

// db connection
import * as db from './config/db/db.js'

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
    origin: true
}));

import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

//routers
import authRouter from "./routers/authRouter.js";
app.use(authRouter);

//app run
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT))