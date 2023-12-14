import { Router } from "express";
const router = Router();

const potterfacts = [
    "The first Harry Potter book was published in 1998.",
    "The first Harry Potter movie came out in 2001.",
    "The Harry Potter books have sold over 500 million copies worldwide.",
    "The Harry Potter movies have grossed over $7.7 billion.",
    "J.K. Rowling is the first person to become a billionaire by writing books.",
    "Harry Potter was born on July 31, 1980.",
    "Harry Potter’s favorite candy is anything from Honeydukes.",
    "Harry Potter’s favorite broom is the Firebolt.",
    "Harry Potter’s favorite teacher is Professor Lupin.",
    "Harry Potter’s favorite spell is Expelliarmus.",
    "Harry Potter’s favorite Hogsmeade hangout is the Three Broomsticks.",
    "Harry Potter’s favorite Hogsmeade shop is Zonko’s Joke Shop.",
    "Harry Potter’s patronus is a stag like his father’s.",
];

router.get("/potterfacts", (req, res) => {
    res.send({ data: potterfacts });
}
);

export default router;


