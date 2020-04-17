import React from "react";
import CartItemList from '../components/Cart/CartItemList'
import CartSummary from '../components/Cart/CartSummary'
import { Row, Col, Fieldset } from '@zeit-ui/react'
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
  console.log(products)
  console.log(cartProducts)
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
            <CartSummary products={cartProducts} />
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

  return { products: res.data }
}

export default Cart
