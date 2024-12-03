function getUser(req, res, next) {
  res.render("user", {
    title: "User page - chat application",
  });
}

module.exports = {
  getUser,
};
