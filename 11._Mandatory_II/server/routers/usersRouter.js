import { Router } from "express";
const router = Router();

const users = [];

app.get('/users', (req, res) => {
    res.send({ data: users });
})

export default router;