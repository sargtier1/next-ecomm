import connectDb from '../../utils/connectDb'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

connectDb()

export default async (req, res) => {
  const { email, password } = req.body
  try {
    // see if user exists
    const user = await User.findOne({ email }).select('+password')
    // if not return error
    if (!user) {
      return res.status(404).send(`No user exists with that email`)
    }
    // check to see if user pw is correct
    const passwordsMatch = await await bcrypt.compare(password, user.password)

    if (passwordsMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      })
      res.status(200).json(token)
    } else {
      res.status(401).send('Passwords do not match')
    }
    // if so gen token and send
  } catch (e) {
    console.error(e)
    res.status(500).send('Error logging in user')
  }
}
