import React from 'react'
import axios from 'axios'

function Home({ products }) {
  console.log(products)

  return <>home</>
}

Home.getInitialProps = async () => {
  const url = 'http://localhost:3000/api/products'
  const res = await axios.get(url)

  return {
    products: res.data,
  }
}

export default Home
