import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "ava.collins90@ethereal.email", //host email
    pass: "Kq7AXRrpkDXPH6nBQs",
},
});

export default { transporter };