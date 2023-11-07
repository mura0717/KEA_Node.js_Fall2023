import { db } from '../config/db/db.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authService = {
  register: (req, res) => {
    console.log(req.body);

    const { name, email, password, passwordConfirm } = req.body;

    db.query(
      "SELECT email from users WHERE email = ?",
      [email],
      async (error, results) => {
        if (error) {
          console.log(error);
        }
        if (results.lenght > 0) {
          return res.render("register", {
            message: "Email already taken.",
          });
        } else if (password !== passwordConfirm) {
          return res.render("register", {
            message: "Passwords don't match",
          });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query(
          "INSERT INTO users SET ?",
          { name: name, email: email, password: hashedPassword },
          (error, results) => {
            if (error) {
              console.log(error);
            } else {
              console.log(results);
              return res.render("register", {
                message: "User registered.",
              });
            }
          }
        );
      }
    );
  },
};

export default authService;
