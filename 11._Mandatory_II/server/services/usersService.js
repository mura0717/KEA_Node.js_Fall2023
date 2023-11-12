import dbConnection from "../config/database/dbConnection.js";

const usersService = {
    getAllUsers: async () => {
        try {
            const [results] = await dbConnection.query("SELECT * FROM users;"); 
            return { allUsers: results, message: "All users fetched."};
        }
        catch (error) {
            console.log(error);
            return {message: "Error fetching all users."};
        }
    },
    
    getUserByEmail: async (userEmail) => {
        try {
            const result = await dbConnection.query('SELECT * FROM users WHERE email = ?', [userEmail]);
            if(result.length > 0){
                return {user: result[0], message: "User found."};
            } else {
                return { user: null, message: 'User not found.' };
            }
        } catch (error) {
            console.log(error);
            return { message: 'Error fetching user by email.' };
            }
        }
    };

export default usersService;