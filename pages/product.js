import axios from 'axios'
import ProductSummary from '../components/Product/ProductSummary'
import { Row, Col } from '@zeit-ui/react'
import baseUrl from '../utils/baseUrl'

function Product({ product, user }) {
  return (
    <Row justify='center' gap={1}>
      <Col span={24}>
        <ProductSummary user={user} {...product} />
      </Col>
    </Row>
  )
}


Product.getInitialProps = async ({ query: { _id } }) => {
  const url = `${baseUrl}/api/product`
  const payload = { params: { _id } }
  const res = await axios.get(url, payload)
  return {
    product: res.data,
  }
}

export default Product
