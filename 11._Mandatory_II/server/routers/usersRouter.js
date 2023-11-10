import { Router } from "express";
const router = Router();

router.get("/api/auth/user/profile", async (req, res) => {
  const userName = req.session.user;
  console.log(userName);
  if (userName) {
    res.status(200).json({ message: "User's name fetched", data: userName });
  } else {
    res.status(401).json({ error: "User's name couldn't fetched"});
  }
});

router.get('/test-session', (req, res) => {
  if (req.session.user) {
    res.status(200).json({ sessionData: req.session.user });
  } else {
    res.status(404).json({ error: 'No session data found' });
  }
});

export default router;