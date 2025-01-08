import generateToken from "../utils/generateToken.js";
import User from "./../models/user.models.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  const { userName, password, gender } = req.body;
  try {
    if (!userName || !password || !gender) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "password must be at least 6 charachters",
      });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({
        message: "The user already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      userName,
      password: hashedPassword,
      gender,
    });

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.log("error from sign Up", error);
    res.status(500).send("internal server error");
  }
};

export const login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    if (!userName || !password) {
      return res.status(400).json({
        message: "all fields are required",
      });
    }

    const user = await User.findOne({ userName });
    const isCorrectPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!isCorrectPassword || !user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    generateToken(user._id, res);

    res.status(200).json({
      message: "successfully logged in",
      user,
    });
  } catch (error) {
    console.log("error from log in", error);
    res.status(500).send("internal server error");
  }
};

export const logOut = async (req, res) => {
  try {
    res.cookie("authToken", "", { maxAge: 0 });

    return res.status(200).json({
      message: "logged out successfully",
    });
  } catch (error) {
    console.log("error from log out", error);
    res.status(500).send("internal server error");
  }
};
