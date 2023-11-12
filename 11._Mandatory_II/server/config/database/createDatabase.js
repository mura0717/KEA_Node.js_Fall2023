import dbConnection from "./dbConnection.js";
import bcrypt from "bcrypt";

export const setupDatabase = async () => {
  try {
    // Uncomment the dropTable function below if you want to reset the table.
    /* const dropTable = async () => {
      await dbConnection.query("DROP TABLE IF EXISTS users;");
      console.log("Users table dropped.")
    } */
    const createUsersTable = async () => {
      try {
        await dbConnection.query(`
          CREATE TABLE IF NOT EXISTS users (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255),
            password VARCHAR(255),
            isAdmin TINYINT(1) DEFAULT 0
          )
        `);
        console.log("Users table created.");
      } catch (error) {
        console.error("Error creating table:", error);
      }
    };

    const createDummyData = async () => {
      const adminHashedPassword = await bcrypt.hash("a123", 14);
      const user1HashedPassword = await bcrypt.hash("u123", 14);

      try {
        await dbConnection.query(
          `
        INSERT INTO users (name, email, password, isAdmin)
        VALUES 
        ('admin', 'admin@email', ?, '1'),
        ('user1', 'user1@email', ?, '0')
      `,
          [adminHashedPassword, user1HashedPassword]
        );
        console.log("Dummy data inserted");
      } catch (error) {
        console.error("Error inserting dummy data:", error);
      }
    };

    createUsersTable()
      .then(() => {
        createDummyData();
      })
      .catch((error) => {
        console.error("Error creating users table:", error);
      });
  } catch (error) {
    console.error("Error setting up the database:", error);
  }
};
