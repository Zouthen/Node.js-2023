import { Router } from "express"
import bcrypt from "bcrypt"

const router = Router()


const users = [
    {
        id: 1,
        username: 'user1',
        // Hashed password for "password1"
        password: '$2b$10$3JMHzUDR.i72VrVxxRRmnOnwoRvgfa874BfFwem/uymDsFUJpnwg6', 
    },
    {
        id: 2,
        username: 'user2',
        // Hashed password for "password1"
        password: '$2b$10$4kNyJn21gm8xuna3QBcj3.7wOJ9lcUJitQRErIHx2C2MOiN/cbNEO'
    }
];

router.post('/auth/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);
    console.log(user);
    console.log('Stored Hashed Password:', user.password);
    console.log('Generated Hashed Password:', bcrypt.hashSync(password, 10));

    if (!user || /*password !== user.password*/ !bcrypt.compareSync(password, user.password)) {
        return res.status(401).send({ data: 'Invalid username or password' });
    }

    req.session.userId = user.id;
    console.log(req.session); // Add this for debugging
    res.status(200).send({ data: 'Login successful' });
});

router.post('/auth/logout', (req, res) => {
    req.session.destroy(error => {
      if (error) {
        console.error("Error destroying session:", error);
      } else {
        res.cookie("sessionID", "", { expires: new Date(0) });
        res.send({ data: "Logout successful" });
      }
    });
  });

export default router