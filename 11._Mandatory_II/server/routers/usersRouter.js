import { Router } from "express";
const router = Router();

router.get("/users", (req, res) => {
  res.send({ data: users });
});

export default router;
