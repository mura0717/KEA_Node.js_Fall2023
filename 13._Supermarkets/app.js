import express from "express";
const app = express();

import supermarketsRouter from "./routers/supermarketsRouter.js"
app.use(supermarketsRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on", PORT));