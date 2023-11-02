import { Router } from "express";
const router = Router();

const users = [
  {
    username: "email1",
    password: "pass1",
  },
  {
    username: "email2",
    password: "pass2",
  },
];

router.get("/users", (req, res) => {
  res.send({ data: users });
});

export default router;
