const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    username: username,
  });
  console.log("user= ", user);
  if (user) {
    bcrypt.compare(password, user.password, (error, same) => {
      if (same) {
        // store user session
        req.session.userId = user._id;
        res.redirect("/");
      } else {
        res.redirect("/auth/login");
      }
    });
  } else {
    res.redirect("/auth/login");
  }
};
