import { Router } from "express";
const router = Router();
import usersService from "../services/usersService.js";
import { confirmAdmin } from "../middleware/confirmAdminMiddleware.js";

router.get("/api/auth/user/profile", async (req, res) => {
  const userName = req.session.user;
  if (userName) {
    res.status(200).json({ message: "User's name fetched.", data: userName });
  } else {
    res.status(401).json({ error: "User's name couldn't fetched." });
  }
});

 router.get("/api/auth/admin", confirmAdmin, async (req, res) => {
  console.log("getAllUsers endpoint hit");
  try {
    const results = await usersService.getAllUsers();
    console.log(results.allUsers);
    if (results.allUsers && results.allUsers.length > 0) {
      res.status(200).json({ data: results.allUsers, message: "All users fetched." });
    } else {
      res.status(404).json({ message: "No users found." });
  }
} catch (error) {
  console.error("Error fetching users:", error);
  res.status(500).json({ message: "Internal Server Error" });
}
});

//endpoint test
/* router.get("/api/auth/admin", async (req, res) => {
  console.log("Session User:", req.session.user);
  res.status(200).json({ message: "Admin endpoint hit, middleware bypassed." });
}); */

export default router;
