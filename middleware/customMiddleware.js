module.exports = (req, res, next) => {
  console.log("Custom middle ware called");
  next();
};
