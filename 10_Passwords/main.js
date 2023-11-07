import bcrypt from 'bcrypt';

const saltRounds = 14;

const plainTextPassword = 'hunter123';
const hashedPasswordOutput = "$2b$14$bIisHT4glD4a54xbJxAt.ODFtndyixRfVYdVx8obLyVi6forixTri"

//const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);

const compareResult = await bcrypt.compare(plainTextPassword, hashedPasswordOutput);
console.log(compareResult);