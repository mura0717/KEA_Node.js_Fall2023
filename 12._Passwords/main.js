import bcrypt from "bcrypt";

const saltRounds = 14;

const plainTextPassword = "123";
const hashedPasswordOutput = "$2b$14$vn1RnezVsmFtES3VjEiuYea19YC7525Q9MK5tygQ2n0Zs4aJjT6na";

//const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
const compareResult = await bcrypt.compare(plainTextPassword, hashedPasswordOutput);
console.log(compareResult);