const UserSchema = require("../Schema/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const Login = async (req, res, next) => {
  try {
    const User = await UserSchema.findOne({ username: req.body.username })
    if (!User) res.send("User Not Found").sendStatus(403)
    const isPasswordValid = bcrypt.compare(req.body.password, User.password)
    if (!isPasswordValid) res.send("Password Invalid").sendStatus(403)
    console.log("Login Success", User)
    const jwtToken = jwt.sign({ id: User._id, isAdmin: User.isAdmin }, process.env.JWT_SECRET)
    console.log("JWT Token", jwtToken)
    const { password, isAdmin, ...otherDetails } = User._doc
    console.log("",otherDetails)
    res.cookie("access_token", jwtToken, { httpOnly: true }).json({})
  } catch (err) {
    next(err)
  }
}

const Register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    const encPassword = bcrypt.hashSync(req.body.password, salt)
    const User = new UserSchema({ username: req.body.username, password: encPassword, email: req.body.email })
    await User.save()
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
}

module.exports = { Register, Login }
