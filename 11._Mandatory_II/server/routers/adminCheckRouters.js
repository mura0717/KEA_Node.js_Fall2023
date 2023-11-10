import { Router } from "express";
const router = Router();
import { requireLogin } from "../middleware/loginCheckMiddleware.js"

router.get('/auth/admin', (req, res) => {
  const isAdmin = req.session.user.isAdmin;
  console.log(isAdmin);
  if(isAdmin === "1") {
    res.status(200).json({ message: 'Admin'});
  } else {
    res.status(401).json({ error: 'Not Admin.'});
    console.log("401");
  }
});

export default router;