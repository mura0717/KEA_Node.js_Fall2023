import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
},
});

export function createEmailOptions(emailOutput) {
  return {
    from: process.env.EMAIL_OPTIONS_FROM,
    to: process.env.EMAIL_OPTIONS_TO,
    subject: "New Contact Request",
    text: "A message arrived:",
    html: emailOutput
  };
}

export function createEmailOutput(userName, userEmail, message) {
  const emailBody = 
  `
    <p>You have a new message from Mandotory II Message Board</p>
    <h4>Sender Details</h4>
    <ul>
        <li>Name: ${userName}</li>
        <li>Email: ${userEmail}</li>
    </ul>
    <h4>Message:</h4>
    <p>${message}</p>
    `
    return emailBody;

}
export default { transporter, createEmailOptions, createEmailOutput };