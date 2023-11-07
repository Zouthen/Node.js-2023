import { Router } from "express";
const router = Router();
import db from "../databases/connection.js";

router.get("/api/supermarkets", async (req, res) => {
    const supermarkets = await db.all("SELECT name, location, is_best_in_denmark FROM supermarkets;");
    res.send({data: supermarkets});
});

router.post("/api/supermarkets", async (req, res) => {
    const result = await db.run(`INSERT INTO supermarkets (name, location) VALUES (?, ?);`, 
                                [req.body.name, req.body.location]);
    res.send({ data: result.lastID })
});


export default router;