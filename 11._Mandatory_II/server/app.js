import "dotenv/config";

import express from "express";
const app = express();

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


import loginRouter from "./routers/loginRouter.js";
app.use(loginRouter);
import signupRouter from "./routers/signupRouter.js";
app.use(signupRouter);
import usersRouter from "./routers/usersRouter.js"
app.use(usersRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT))