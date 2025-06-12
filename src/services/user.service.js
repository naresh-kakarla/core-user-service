const bcrypt = require('bcrypt');
const db = require('../models');
const User = db.User;

const registerUser = async ({ name, email, password, age }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    age
  });

  return user;
};

module.exports = {
  registerUser
};
