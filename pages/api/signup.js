import connectDb from '../../utils/connectDb'
import User from '../../models/User'
import Cart from '../../models/Cart'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'


export default async (req, res) => {
  connectDb()
  const { name, email, password } = req.body
  try {
    // validate inputs
    if (!isLength(name, { min: 3, max: 10 })) {
      return res
        .status(422)
        .send('Name mush be between 3 and 10 characters long')
    } else if (!isLength(password, { min: 6 })) {
      return res.status(422).send('Password mush be at least 6 characters long')
    } else if (!isEmail(email)) {
      return res.status(422).send('Email must be valid')
    }
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
    console.log({ newUser })
    //  create cart for user
    await new Cart({
      user: newUser._id,
    }).save()

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
