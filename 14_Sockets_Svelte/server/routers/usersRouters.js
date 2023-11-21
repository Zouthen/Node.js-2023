import { Router } from "express";
const router = Router();

router.get("/api/users", (req, res) => {
    res.send({ data: req.session.name });
})

router.post("/api/users", (req, res) => {
    req.session.name = req.body.name;
    res.send({ data: req.session.name });
});

export default router;