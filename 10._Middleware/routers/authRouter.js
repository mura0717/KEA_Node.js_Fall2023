import {Router} from "express";
const router = Router();

router.post("/auth/login", (req, res) => {
    res.send({});
})

router.post("/auth/signup", (res, req) => {
    res.send({});
})

export default router;