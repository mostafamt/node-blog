const User = require("../models/User");

module.exports = async (req, res) => {
  try {
    const data = await User.create(req.body);
    res.redirect("/");
  } catch (error) {
    const errors = Object.keys(error.errors).map((key) => {
      return error.errors[key].message;
    });
    // req.session.validationErrors = errors;
    req.flash("validationErrors", errors);
    req.flash("data", req.body);
    return res.redirect("/auth/register");
  }
};
