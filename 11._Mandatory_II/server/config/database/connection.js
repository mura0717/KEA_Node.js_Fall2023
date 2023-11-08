import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

if(!connection){
    console.log("DB connection failed.");
    process.exit(0);
} else {
    console.log('DB connected.');
}

export { connection as dbConnection };