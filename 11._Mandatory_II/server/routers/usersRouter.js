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
  console.log("endpoint hit");

  try {
    const results = await usersService.getAllUsers;
    console.log(results);
    if (results.length > 0) {
      res
        .send(200)
        .json({ message: "All users fetched.", data: results });
    } else {
      res.status(401).json({ error: "Not Authorized" });
      console.log("401");
  }
} catch (error) {
  console.error("Error fetching users:", error);
  res.status(500).json({ error: "Internal Server Error" });
}
});

export default router;
