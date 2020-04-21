import React from 'react'
import axios from 'axios'
import { Row } from '@zeit-ui/react'
import ProductList from '../components/Index/ProductList'
import ProductPagination from '../components/Index/ProductPagination'
import baseUrl from '../utils/baseUrl'

function Home({ products, totalPages }) {
  return (
    <Row justify='space-around'>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ProductList products={products} />
        <ProductPagination totalPages={totalPages} />
      </div>
      <style jsx>{`
        .row-wrap {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </Row>
  )
}

Home.getInitialProps = async (ctx) => {
  const page = ctx.query.page ? ctx.query.page : '1'
  const size = 8
  const url = `${baseUrl}/api/products`
  const payload = { params: { page, size } }
  const res = await axios.get(url, payload)

  return res.data
}

export default Home
