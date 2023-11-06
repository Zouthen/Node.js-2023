import { Router, text } from "express"
const router = Router()

import nodemailer from 'nodemailer';



//Tested in Postman and works

router.post('/contact', async (req, res) => {
    const { email, subject, message } = req.body;  
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  
    try {
      await transporter.sendMail({
        from: "mich5n69@stud.kea.dk",
        to: email,
        subject: subject,
        text: message,
        html: `<b>${message}</b>`,
      });
      res.send( { data: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send({ data: 'Error sending email' });
    }
  });

  export default router