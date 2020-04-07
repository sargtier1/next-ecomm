import React from 'react'
import axios from 'axios'
import { Row } from '@zeit-ui/react'
import ProductList from '../components/Index/ProductList'
import baseUrl from '../utils/baseUrl'
import useViewPort from '../utils/hooks/width'

function Home({ products }) {
  const { width } = useViewPort()
  return (
    <Row
      gap={width < 850 ? 0 : 1}
      style={{
        marginBottom: '15px',
        flexWrap: 'wrap',
        flexDirection: width < 840 ? 'column' : 'row',
      }}
    >
      <ProductList products={products} width={width} />
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
