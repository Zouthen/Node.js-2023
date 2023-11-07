import { Router } from "express";
const router = Router();

const coffees = [
    "Americano",
    "Cappuccino",
    "Espresso",
    "Latte",
    "Mocha",
    "Macchiato",
    "Flat White",
    "Long Black",
    "Affogato",
    "Irish Coffee",
    "Ristretto",
];

router.get("/coffees", (req, res) => {
    res.send({ data: coffees });
}
);

export default router;