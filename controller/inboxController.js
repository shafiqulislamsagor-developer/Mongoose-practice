function getInbox(req, res, next) {
  res.render("inbox", {
    title: "Inbox page - chat application",
  });
}

module.exports = {
  getInbox,
};
// just activites no code ....
