const getUsers = (req, res) => {
  res.send(req.users);
};

const getUser = (req, res) => {
  const { id } = req.params;
  const user = req.users.find((user) => user._id === id);
  if (!user) {
    return res.status(404).send({ "message": "Нет пользователя с таким id" });
  }
  res.send(user);
}

module.exports = {
  getUsers, getUser
};
