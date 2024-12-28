import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // hashing password by using bcrypt
    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must contain atleast 8 characters !!' });
    }
    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: 'Email already exists !!' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      // generate JWT token
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: 'Invalid user data !!' });
    }


  } catch (error) {
    console.log('Error in signup controller !!', error.message);
    res.status(500).json({ message: 'Internal sever Error' });
  }
};

export const login = (req, res) => {
  res.send('login route');
};

export const logout = (req, res) => {
  res.send('logout route');
};