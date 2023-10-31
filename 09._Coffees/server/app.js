//import dotenv from 'dotenv';
//dotenv.config();
import "dotenv/config";

import express from "express";
const app = express();
//console.log(process.env.SESSION_SECRET);

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

import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);
import coffeesRouter from "./routers/coffeesRouter.js";
app.use(coffeesRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT))