import { Router } from 'express';
const router = Router();

router.get("/chair", (req, res) => {
    res.send({ data: "Monobloc" });
});

router.get("/lamp", (req, res) => {
    res.send({ data: "I like lamp" });
});

export default router;