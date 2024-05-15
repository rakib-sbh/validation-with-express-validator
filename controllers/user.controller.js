const userRegisterController = (req, res) => {
  const { username, email, password, dob } = req.body;

  const newUser = {
    username,
    email,
    password,
    dob,
  };

  res.status(201).json(newUser);
};

const userErrorController = (err, _req, res, _next) => {
  res.status(404).json(err.message);
};

module.exports = { userRegisterController, userErrorController };
