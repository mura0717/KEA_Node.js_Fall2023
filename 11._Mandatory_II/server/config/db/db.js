//DB connection setup
import mysql from 'mysql';

let singletonDB = null;

export function initDB() {
    const database = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE
    })

    database.connect((error) => {
        if(error){
            console.log(error)
            process.exit(0);
        } else {
            console.log("MySQL connected.")
        }
    })
    singletonDB = database;
}

export const db = singletonDB ?? initDB();



