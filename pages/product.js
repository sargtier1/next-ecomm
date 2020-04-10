import axios from 'axios'
import ProductSummary from '../components/Product/ProductSummary'
import { Row, Col } from '@zeit-ui/react'
import useViewPort from '../utils/hooks/width'
import baseUrl from '../utils/baseUrl'

function Product({ product, user }) {
  const { width } = useViewPort()
  return (
    <Row justify='center' gap={width <= 840 ? 0.8 : 1}>
      <Col span={width <= 840 ? 24 : 18}>
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
