import axios from 'axios'
import ProductSummary from '../components/Product/ProductSummary'
import ProductAttributes from '../components/Product/ProductAttributes'
import { Row, Col } from '@zeit-ui/react'
import useViewPort from '../utils/hooks/width'

function Product({ product }) {
  const { width } = useViewPort()
  return (
    <Row justify='center' gap={width <= 840 ? .8 : 1}>
      <Col span={width <= 840 ? 24 : 12}>
        <ProductSummary {...product} />
        <ProductAttributes {...product} />
      </Col>
    </Row>
  )
}

Product.getInitialProps = async ({ query: { _id } }) => {
  const url = '/api/product'
  const payload = { params: { _id } }
  const res = await axios.get(url, payload)
  return {
    product: res.data,
  }
}

export default Product
