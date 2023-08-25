const User = require("../models/User");

module.exports.userSignup = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json({ message: "usernmae already exists" });
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    return res.status(200).json({ message: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username: username, password: password });
    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(401).json("Invalid login");
    }
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};
