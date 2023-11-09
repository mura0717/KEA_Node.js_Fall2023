import { Router } from "express";
const router = Router();
import signupService from '../services/signupService.js'
import usersService from "../services/usersService.js";
import bcrypt from "bcrypt";


//USER SIGNUP
router.post("/api/auth/signup", async (req, res) => {
    try {
        req.session.newUser = req.body.newUser;
        const hashedPassword = await bcrypt.hash(req.body.newUser.password, 14); // ALT: const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = { name: req.body.newUser.name, email: req.body.newUser.email, password: hashedPassword }
        await signupService.registerUser(newUser);
        res.status(200).json('User registered successfully.');
    } catch (error) {
        console.error('Error in signup endpoint:', error);
        res.status(500).json('Error registering user.');
    }
})

//USER LOGIN
router.post('/api/auth/login', async (req, res) => {
    req.session.user = req.body.user;
    const userEmail = req.body.user.email;
    const inputUserPassword = req.body.user.password;
    const user = await usersService.getUserByEmail(userEmail);
    const hashedUserPassword = user.user[0].password;
    try {
        const passwordCheck = await bcrypt.compare(inputUserPassword, hashedUserPassword);
        if (passwordCheck === true) {
            console.log(passwordCheck);
            res.status(200).json('User logged in successfully.');
        }
    } 
        catch (error) {
        console.error('Error in login endpoint:', error);
        res.status(500).json('Error loggin in.');
    }
})

//USER LOGOUT
router.get("/users/logout", (req, res) => {
    req.session.userID = undefined;
    delete req.session.user;
    res.send({ data: "You are logged out." });
});

export default router;

