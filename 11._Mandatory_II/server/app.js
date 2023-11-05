import "dotenv/config";

import express from "express";
const app = express();

app.use(express.json());

import path from "path";

import mysql from 'mysql';

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
import homeRouter from "./routers/homeRouter.js"
app.use(homeRouter);
import loginRouter from "./routers/loginRouter.js";
app.use(loginRouter);
import signupRouter from "./routers/signupRouter.js";
app.use(signupRouter);
import usersRouter from "./routers/usersRouter.js"
app.use(usersRouter);

//db connection
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
})

db.connect((error) => {
    if(error){
        console.log(error)
    } else {
        console.log("MySQL connected.")
    }
})

app.set('view engine', 'hbs');

//app running port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT))