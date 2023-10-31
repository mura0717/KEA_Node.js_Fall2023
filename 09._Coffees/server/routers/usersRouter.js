import { Router } from "express"; //with {} only the Router package is gotten.
const router = Router();

router.get("/users", (req, res) => {
    console.log(req.path, ":", req.session);
    
    if (!req.session?.nameOfUser) {
        res.send({ data: "I don't know you."});
    } else {
        res.send({ data: `Your name is ${req.session.nameOfUser}.`});
    }
        
});

router.get("/users/logout", (req, res) => {
    req.session.nameOfUser = undefined;
    delete req.session.nameOfUser;

    res.send({ data: "You are logged out." });
});


router.get("/users/:registerUserName", (req, res) => {
    console.log(req.path, ":", req.session);
    req.session.nameOfUser = req.params.registerUsersName;
    res.send({ data: `Your name ${req.params.registerUsersName} was stored in the session.`});
})

export default router;