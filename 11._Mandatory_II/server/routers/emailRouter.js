import { Router } from "express";
const router = Router();
import { transporter, createEmailOptions, createEmailOutput } from "../config/email/nodemailer.js";

router.post("/api/auth/user/profile/contact", async (req, res) => {
  const userName = req.session.user.name;
  const userEmail = req.session.user.email;
  const message = req.body.message;

  const emailOutput = createEmailOutput(userName, userEmail, message );
  const emailOptions = createEmailOptions(emailOutput);

  transporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      console.log("Email not sent: " + error);
      res.send(500).json({ message: "Error sending message." });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Message sent." });
    }
  });
});

export default router;
