import { Router } from "express";
const router = Router();
import { requireLogin } from "../middleware/loginCheckMiddleware.js"

router.get('/auth/guard', requireLogin, (req, res) => {
  const user = req.session.user;
  console.log(user);
  if(user) {
    res.status(200).json({ message: 'Logged in true'});
  } else {
    res.status(401).json({ error: 'Not logged in.'});
    console.log("401");
  }
});

export default router;