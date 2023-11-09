import { Router, text } from "express"
const router = Router()

import nodemailer from 'nodemailer';


router.post('/contact', async (req, res) => {
    const { email, subject, message } = req.body;  
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 465,
      secure: true, // use SSL
      auth: {
          user: process.env.nodeMailerUser,
          pass: process.env.nodeMailerPass
      }
    });
  
    try {
      await transporter.sendMail({
        from: process.env.nodeMailerUser,
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