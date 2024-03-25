
const Users = require('../modules/userSchema');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");



const register = (req, res) => {
    const newUser = req.body;
    const hashedPassword = bcrypt.hashSync(newUser.password, 10);
    newUser.password = hashedPassword;
    Users.create(newUser)
    .then((user)=> {
      if(user){
        res.status(200).json(user);
      }else{
        throw new Error('User already exists');
      }

    }).catch((Error) => {res.status(400).send("user already exists")});
    
    
  };


  const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await Users.findOne({ email });
      if (!user) {
        // User not found
        return res.status(404).json({ message: "User not found" });
      }
  // compaire btw the entered password and stored password
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
//check ing if the passwords match or not
      if (!isMatch) {
        return res.status(401).json({ message: "Incorrect password" });
      }
// if everything is good then create a token

      const token = jwt.sign({ name: user.name, id: user._id }, process.env.SECRET_TOKEN, { expiresIn: "1h" } 
      );

      res.status(200).json({ message: "Login successful", token }); 
    } catch (err) {
      console.error("Error in login", err);
      res.status(500).json({ message: "Internal server error" });
    }
  };


  module.exports = {register , login};