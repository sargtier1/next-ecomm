import User from '../../models/User'
import jwt from 'jsonwebtoken'
import connectDb from '../../utils/connectDb'


export default async (req, res) => {
  try {
    connectDb()
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    )
    const users = await User.find({ _id: { $ne: userId } })
    res.status(200).json(users)
  } catch (e) {
    console.error(e)
  }
}
