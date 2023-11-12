import { Router } from "express";
const router = Router();

import signupService from "../services/signupService.js";
import bcrypt from "bcrypt";

//USER SIGNUP
router.post("/api/auth/signup", async (req, res) => {
  try {
    req.session.newUser = req.body.newUser;
    const hashedPassword = await bcrypt.hash(req.body.newUser.password, 14); // ALT: const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = {
      name: req.body.newUser.name,
      email: req.body.newUser.email,
      password: hashedPassword,
    };
    await signupService.registerUser(newUser);
    res.status(200).json({ status: 200, message: "User registered successfully." });
  } catch (error) {
    console.error("Error in signup endpoint:", error);
    res.send(500).json("Error registering user.");
  }
});

export default router;
