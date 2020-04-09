import connectDb from '../../utils/connectDb'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async (req, res) => {
  const { name, email, password } = req.body
  try {
    const user = await User.findOne({ email })
    //  check if use exists
    if (user) {
      return res
        .status(422)
        .send(
          `A user with the email, <strong>${email}</strong>, already exists`
        )
    }
    // hash password
    const hash = await bcrypt.hash(password, 10)

    // create user
    const newUser = await new User({
      name,
      email,
      password: hash,
    }).save()
    console.log(`user ${newUser.name} successfully created`)

    // create token for user
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    })
    res.status(201).json(token)
    // send back token
  } catch (e) {
    console.error(error)
    res.status(500).send('Error signing up user, please try again later')
  }
}
