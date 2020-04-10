import CartItemList from '../components/Cart/CartItemList'
import CartSummary from '../components/Cart/CartSummary'
import { Row, Col, Fieldset } from '@zeit-ui/react'
import useViewPort from '../utils/hooks/width'
import { parseCookies } from 'nookies'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'

function Cart({ products }) {
  const { width } = useViewPort()

  return (
    <Row justify='center' gap={width <= 840 ? 0.8 : 1}>
      <Col span={width <= 840 ? 24 : 14}>
        <Fieldset>
          <CartItemList products={products} />
          <Fieldset.Footer>
            <CartSummary />
          </Fieldset.Footer>
        </Fieldset>
      </Col>
    </Row>
  )
}

Cart.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx)
  if (!token) {
    return {
      products: [],
    }
  }
  
  const url = `${baseUrl}/api/cart`
  const payload = {
    headers: {
      Authorization: token,
    },
  }
  const res = await axios.get(url, payload)

  return {
    products: res.data,
  }
}

export default Cart
