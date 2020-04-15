import React from 'react'
import axios from 'axios'
import { Row } from '@zeit-ui/react'
import ProductList from '../components/Index/ProductList'
import baseUrl from '../utils/baseUrl'

function Home({ products }) {
  return (
    <Row justify='space-around'>
      <ProductList products={products} />
      <style jsx>{`
        .row-wrap {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </Row>
  )
}

Home.getInitialProps = async () => {
  const url = `${baseUrl}/api/products`
  const res = await axios.get(url)

  return {
    products: res.data,
  }
}

export default Home
