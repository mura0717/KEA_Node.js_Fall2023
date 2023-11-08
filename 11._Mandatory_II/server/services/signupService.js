import { dbConnection } from "../config/database/connection.js";

const signupService = {
  registerUser: async (newUser) => {
    const { name, email, password } = newUser;
    //DB check if email exists
    try {
      const [existingUsers] = await dbConnection.query(
        "SELECT email from users WHERE email = ?",
        [email]
      );
      if (existingUsers > 0) {
        return { message: "Email already taken." };
      }
      //Save to DB
      const result = await dbConnection.query("INSERT INTO users SET ?", {
        name: name,
        email: email,
        password: password,
      });
      if (result) {
        return { message: "User registered successfully." };
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default signupService;
