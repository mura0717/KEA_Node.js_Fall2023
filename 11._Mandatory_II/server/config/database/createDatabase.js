import dbConnection from "./connection.js"

const creatUsersTable = async () => {
    try {
        //await db.query("DROP TABLE IF EXISTS users;");
        await dbConnection.query(`
        CREATE TABLE IF NOT EXISTS users (
          id INT PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(50),
          password VARCHAR(50);
        )
      `);
      console.log('Table created or already exists');
    } catch (error) {
        console.error('Error creating table:', error);
    }
}

creatUsersTable();