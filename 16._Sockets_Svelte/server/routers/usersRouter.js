//assignment set up a users router.
import { Router } from "express";
const router = Router();

router.get("/api/users", (req, res) => {;
    res.send({ data: req.session.name })
});

router.post("/api/users", async (req, res) => {
    req.session.name = req.body.name;
    res.send({ data: req.session.name });
});

export default router;
