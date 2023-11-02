import { Router } from "express";
const router = Router();

import bcrypt from "bcrypt";

router.post("/signup", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); //number 10 is this: const salt = await bcrypt.genSalt();
        console.log(salt);
        console.log(hashedPassword);
        const user = { data: {username: req.body.username, password: hashedPassword} }
        users.push(user);
        res.status(200).send();

    } catch {
        res.status(500).send();
    }
})

export default router;