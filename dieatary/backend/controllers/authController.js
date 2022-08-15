const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const key = "teco";
const generateToken = (id) => {
  return jwt.sign({ id }, key, {
    expiresIn: "30d",
  });
};

exports.register = async (req, res, next) => {
  try {
    const { email, password, name, age, weight, height, gender } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Validation
    if (!email || !password || !name || !gender || !age || !weight || !height) {
      res.status(400).send("Please include all fields");
    }

    // Find user if already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).send("User already exists!");
    }

    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
      gender,
      age,
      weight,
      height,
    });

    res.status(201).json({
      name: newUser.name,
      email: newUser.email,
      gender: newUser.gender,
      weight: newUser.weight,
      height: newUser.height,
      age: newUser.age,
      token: generateToken(newUser._id),
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("User not found...");
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      return res.status(400).send("Wrong password or username!");
    } else {
      res.status(200).json({
        token: generateToken(user._id),
        name: user.name,
        email: user.email,
        gender: user.gender,
        weight: user.weight,
        height: user.height,
        age: user.age,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
