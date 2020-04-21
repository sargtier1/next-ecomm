const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://next-ecomm-sargtier1.salvatore-argentieri.now.sh'
    : 'http://localhost:3000'

export default baseUrl
