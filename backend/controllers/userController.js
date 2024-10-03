const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already Exists . . ");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

 if (user ) {
    res.status(201).json({
        _id  : user._id , 
        name  : user.name , 
        email : user.email , 
        isAdmin : user.isAdmin , 
        pic : user.pic, 
    })
 }
 else {
    res.status(400)
    throw new Error ('problem in creating new User . . . ')
 }
});
module.exports = { registerUser };
