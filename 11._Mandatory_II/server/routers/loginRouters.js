import { Router } from "express";
const router = Router();
import usersService from "../services/usersService.js";
import bcrypt from "bcrypt";
import { requireLogin } from "../middleware/requireLogin.js"

// USER LOGIN
router.post("/api/auth/login", async (req, res) => {
  const userEmail = req.body.user.email;
  const inputUserPassword = req.body.user.password;
  const user = await usersService.getUserByEmail(userEmail);
  const hashedUserPassword = user.user[0].password;
  try {
    const passwordCheck = await bcrypt.compare(
      inputUserPassword,
      hashedUserPassword
    );
    if (passwordCheck === true) {
      const userObj = user.user[0];
      userObj.isAdmin = Number(userObj.isAdmin) === 1 ? 1 : 0;
      req.session.user = userObj; // Store user data in the session
      res.send({ userObj });
    } else {
      res.send(401).json({ message: "Invalid credentials." });
    }
  } catch (error) {
    console.error("Error in login endpoint:", error);
    res.send(500).json({ message: "Error loggin in.", error });
  }
});

// USER LOGOUT
router.get("/api/auth/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error("Error logout endpoint:", error);
      res.send(500).json({ error: "Error logging out." });
    } else {
      res.status(200).json({ message: "Logout successful." });
    }
  });
});

// LOGIN CHECK
router.get('/api/auth/login/guard', requireLogin, (req, res) => {
  const user = req.session.user;
  if(user) {
    res.status(200).json({ status: 200 });
  } else {
    res.send(401).json({ message: 'Not logged in.'});
  }
});

export default router;