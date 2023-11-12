import { Router } from "express";
const router = Router();

router.get('/api/auth/admin', (req, res) => {
  const adminStatus = req.session.user.isAdmin;
  if(Number(adminStatus) === 1) {
    res.send(200).json({ status: 200 });
  } else {
    console.error("Error getting admin page:", error);
    res.send(401).json({ message: 'Unauthorized. Not Admin.'});
  }
});

export default router;