import { Router } from "express";
const router = Router();

import { users } from "../routers/usersRouter.js";

import bcrypt from "bcrypt";


router.post('/login', async (req, res) => {
    const user = users.find(user => user.username === req.body.username)
    if (!user) {
        return res.status(400).send("Cannot find user.")
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)){
            res.send("Login successful")
        } else {
            res.send("Login not allowed.")
        }
        
    } catch{
        res.status(500).send()
    }
})

export default router;