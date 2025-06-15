const bcrypt = require('bcrypt');
const db = require('../models');
const { where } = require('sequelize');
const User = db.User;

const registerUser = async ({ firstName, lastName, phone, email, password ,address}) => {

  const existingUser = await User.findOne({ where: { email } })
  if (existingUser) {
    throw new Error('user already exists')

  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create(
    {

      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
      address
    }
  )
  return user;
};


const loginUser = async ({ email, password }) => {

  const user = await User.findOne({ where: { email } })

  if (!user) {
    throw new Error('invalid user or password')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    throw new Error('invalid user or password')
  }

  return user

}

const getAllUsers = async () => {
  const users = await User.findAll()
  return users
}

const getUserById = async (id) => {
  const user = await User.findByPk(id)
  if (!user) {
    throw new Error('user not found')
  }
  return user
}
module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById
};
