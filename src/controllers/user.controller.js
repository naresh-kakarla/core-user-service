
const userService = require('../services/user.service');

const register = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body)
    return res.status(201).json({ msg: "user registered" }, user)
  }
  catch (err) {
    console.log("err====>", err);

    return res.status(501).json({ meg: 'user registration failed' })
  }
}

const login = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body)
    return res.status(201).json({ msg: 'user login success!' }, user)
  }
  catch (err) {
    return res.status(500).json({ msg: 'user login failed' })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    return res.status(200).json(users)
  }
  catch (err) {
    return res.status(500).json({ msg: 'users not found' })
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await userService.getUserById(id)
    return res.status(200).json({ user })

  } catch (err) {
    console.log('err==>', err);

    return res.status(500).json({ msg: 'cannot found user from this id!' })
  }
}
module.exports = {
  register,
  login,
  getAllUsers,
  getUserById
};
