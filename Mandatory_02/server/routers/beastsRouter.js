import { Router } from "express";
const router = Router();

const beasts = [
    "Hipogriff",
    "Alf",
    "Centaur",
    "Dragon",
    "Thestral",
    "Troll",
    "Basilisk",
    "Phoenix",
    "Merpeople",
    "Pixie",
    "Werewolf",
    "Unicorn",
];

router.get("/beasts", (req, res) => {
    res.send({ data: beasts });
}
);

export default router;