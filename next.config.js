module.exports = {
  env: {
    MONGO_SRV: process.env.MONGO_SRV,
    JWT_SECRET: process.env.JWT_SECRET,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    // MONGO_SRV:
    //   'mongodb+srv://sargtier1:123456789abc@cluster0-tavwb.mongodb.net/test?retryWrites=true&w=majority',
    // JWT_SECRET: 'https://api.cloudinary.com/v1_1/dtkqu8s6e/image/upload',
    // CLOUDINARY_URL: 'iliketobuildthings9000',
  },
}
