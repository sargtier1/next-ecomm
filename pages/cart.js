import React from 'react'
import CartItemList from '../components/Cart/CartItemList'
import CartSummary from '../components/Cart/CartSummary'
import { Row, Col, Fieldset } from '@zeit-ui/react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import catchErrors from '../utils/catchErrors'
import cookie from 'js-cookie'

function Cart({ products, user }) {
  const [cartProducts, setCartProducts] = React.useState(products)
  const [success, setSuccess] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

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

  async function handleCheckout(paymentData) {
    try {
      const url = `$baseUrl/api/checkout`
      const token = cookie.get('token')
      const payload = { paymentData }
      const headers = { headers: { Authorization: token } }
      axios.post(url, payload, headers)
    } catch (e) {
      console.error(e)
      catchErrors(e, window.alert)
    } finally {
    }
  }

  return (
    <Row justify='center' gap={1}>
      <Col span={24}>
        <Fieldset>
          <CartItemList
            handleRemoveFromCart={handleRemoveFromCart}
            user={user}
            products={cartProducts}
          />
          <Fieldset.Footer>
            <CartSummary
              products={cartProducts}
              handleCheckout={handleCheckout}
            />
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
  const re = await axios.get(url, payload)
  return { products: re.data }
}

export default Cart
