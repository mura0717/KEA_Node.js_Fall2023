import { Router } from "express";
const router = Router();

import authService from '../services/authService.js'
import { allUsers } from "../services/usersService.js";
import bcrypt from "bcrypt";

//USER SIGNUP

router.post("/signup", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt); // ALT: const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = { username: req.body.username, password: hashedPassword }
        authService.register(newUser);
        //allUsers.push(newUser);
        res.status(200).send('New User registered successfully.');
        //res.redirect("/users/login")

    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding user.');
        res.redirect("/signup")
    }
})

//USER LOGIN
router.post('/auth/login', async (req, res) => {
    const user = allUsers.find(user => user.username === req.body.username)
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

//USER LOGOUT

export default router;

