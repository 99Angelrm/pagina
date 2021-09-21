// imports
const path = require("path");

//exports

exports.getHome = (req, res) => {
  res.status(200).sendFile(path.join(__dirname,"..", "views", "home.html"));
};
