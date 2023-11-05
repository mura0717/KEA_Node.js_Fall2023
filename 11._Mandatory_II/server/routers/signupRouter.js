import { Router } from "express";
const router = Router();

import { users } from "../routers/usersRouter.js";

import bcrypt from "bcrypt";

router.post("/signup", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is: const salt = await bcrypt.genSalt();
        //console.log(hashedPassword);
        //console.log(users)
        const newUser = { username: req.body.username, password: hashedPassword }
        users.push(newUser);
        res.status(200).send('User added successfully.');
        //res.redirect("/users/login")

    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding user.');
        res.redirect("/signup")
    }
})

export default router;