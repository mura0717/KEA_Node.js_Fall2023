import dbConnection from "./connection.js";
import bcrypt from "bcrypt";

const createUsersTable = async () => {
    try {
        //await db.query("DROP TABLE IF EXISTS users;");
        await dbConnection.query(`
        CREATE TABLE IF NOT EXISTS users (
          id INT PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(50),
          password VARCHAR(50),
          isAdmin TINYINT(1) DEFAULT 0;
        )
      `);
      console.log('Table created or already exists');
    } catch (error) {
        console.error('Error creating table:', error);
    }
}

createUsersTable();

const createDummyData = async () => {
  const adminHashedPassword = await bcrypt.hash('a123', 14);
  await db.run("INSERT INTO users (name, email, password, isAdmin) VALUES ('admin', 'admin@email', ?, '1');", adminHashedPassword);
  const user1HashedPassword = await bcrypt.hash('u123', 14);
  await db.run("INSERT INTO users (name, email, password, isAdmin) VALUES ('user1', 'user1@email', ?, '0');", user1HashedPassword);
  const user2HashedPassword = await bcrypt.hash('u123', 14);
  await db.run("INSERT INTO users (name, email, password, isAdmin) VALUES ('user2', 'user2@email', ?, '0');", user2HashedPassword);
}

// DB dummy data
if (createUsersTable) {
  const adminHashedPassword = await bcrypt.hash('a123', 14);
  await db.run("INSERT INTO users (name, email, password, isAdmin) VALUES ('admin', 'admin@email', ?, '1');", adminHashedPassword);
  const user1HashedPassword = await bcrypt.hash('u123', 14);
  await db.run("INSERT INTO users (name, email, password, isAdmin) VALUES ('user1', 'user1@email', ?, '0');", user1HashedPassword);
  const user2HashedPassword = await bcrypt.hash('u123', 14);
  await db.run("INSERT INTO users (name, email, password, isAdmin) VALUES ('user2', 'user2@email', ?, '0');", user2HashedPassword);
}