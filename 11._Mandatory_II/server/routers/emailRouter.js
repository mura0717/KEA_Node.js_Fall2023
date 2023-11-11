import { Router } from "express";
const router = Router();
import { transporter } from "../config/mailer/nodemailer.js"

router.post("/api/auth/user/profile/contact", async (req, res) =>  {
    console.log("message post endpoint hit");
    const message = req.body.message;
    console.log(message);
    const userName = req.session.user.name;
    console.log(userName);
    const userEmail = req.session.user.email;
    console.log(userEmail);
    const emailOutput = `
    <p>You have a new message from Mandotory II Message Board</p>
    <h4>Sender Details</h4>
    <ul>
        <li>Name: ${userName}</li>
        <li>Email: ${userEmail}</li>
    </ul>
    <h4>Message:</h4>
    <p>${message}</p>
    `
    console.log(emailOutput);
        const mailOptions = {
        from: '"Mandotory II User Message Board" <ava.collins90@ethereal.email>', //host
        to: "mandoIIMesBoardAdmin@lortemail.dk", //email that the message is sent from to the host
        subject: "New Contact Request",
        text: "This message just arrived:",
        html: emailOutput, //parsed html body
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error: " + error);
          res.status(500).json({ error: "Error sending message." });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: 'Message sent.'});
        }
      });

})

export default router;