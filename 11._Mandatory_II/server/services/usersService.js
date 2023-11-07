import { db } from '../config/db/db.js'

const allUsers = {
    getAllUsers: (req, res) => {
        db.query("SELECT * FROM users", (error, results) => {
            if(error) {
                console.log(error);
                res.status(500).send("Error fetching all users.");
            } else {
                res.send({ data: users });
            }
        })   
    }    
}

export { allUsers };