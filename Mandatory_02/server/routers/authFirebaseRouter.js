import { Router } from "express"

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/confic.js';

const router = Router()

router.post('/auth/login', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({ data: "Request body is missing" });
          }
          
    
      const { email, password } = req.body;

      const userData = await signInWithEmailAndPassword(auth, email, password);
  
      req.session.user = {
        uid: userData.user.uid,
      };

      res.status(200).send({ data: "Login successful", userData });
    } catch (error) {
      console.log(error);
      res.status(401).send({ data: "Login failed" });
    }
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