import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    //res.send("<h1>Home</h1>");
    res.render("index")
})

export default router;