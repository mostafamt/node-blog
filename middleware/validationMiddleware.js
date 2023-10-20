module.exports = (req, res, next) => {
  let errors = [];
  const params = [req.body.title, req.body.body, req.files];
  const messages = ["Title", "Description", "Image"];

  if (req.files === null || req.body.title === "" || req.body.body === "") {
    params.forEach((param, idx) => {
      if (param === null || param === "") {
        errors.push(`${messages[idx]} is required`);
      }
    });
    if (!!errors.length) {
      req.flash("postErrors", errors);
    }
    req.flash("data", req.body);

    return res.redirect("/posts/new");
  }
  next();
};
