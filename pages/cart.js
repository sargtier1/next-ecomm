import CartItemList from '../components/Cart/CartItemList'
import CartSummary from '../components/Cart/CartSummary'
import { Row, Col, Fieldset } from '@zeit-ui/react'
import useViewPort from '../utils/hooks/width'
import { parseCookies } from 'nookies'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import cookie from 'js-cookie'

/**
 *
 *  State isn't updating like it is supposed too. The products are storing in state correctly.
 */

function Cart({ products, user }) {
  const [cartProducts, setCartProducts] = React.useState(products)
  const { width } = useViewPort()

  async function handleRemoveFromCart(productId) {
    const url = `${baseUrl}/api/cart`
    const token = cookie.get('token')
    const payload = {
      params: { productId },
      headers: {
        Authorization: token,
      },
    }
    const res = await axios.delete(url, payload)
    setCartProducts(res.data)
  }

  console.log(cartProducts)
  console.log(products)
  return (
    <Row justify='center' gap={width <= 840 ? 0.8 : 1}>
      <Col span={width <= 840 ? 24 : 16}>
        <Fieldset>
          <CartItemList
            handleRemoveFromCart={handleRemoveFromCart}
            user={user}
            products={cartProducts}
            width={width}
          />
          <Fieldset.Footer>
            <CartSummary products={cartProducts} width={width} />
          </Fieldset.Footer>
        </Fieldset>
      </Col>
    </Row>
  )
}

Cart.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx)
  if (!token) {
    return { products: [] }
  }
  const url = `${baseUrl}/api/cart`
  const payload = { headers: { Authorization: token } }
  const res = await axios.get(url, payload)
  console.log(res.data)
  return { products: res.data }
}

export default Cart
