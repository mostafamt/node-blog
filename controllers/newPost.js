const newPostController = async (req, res) => {
  const data = req.flash("data")[0];
  if (req.session.userId) {
    return res.render("create", {
      errors: req.flash("postErrors"),
      title: data?.title || "",
      description: data?.body || "",
      image: data?.image,
      createPost: true,
    });
  }
  res.redirect("auth/login");
};

module.exports = newPostController;
