import React from 'react'
import { Fieldset, Button, Spacer } from '@zeit-ui/react'
import { ShoppingCart } from 'react-feather'
import calculateCartTotal from '../../utils/calculateCartTotal'
import StripeCheckout from 'react-stripe-checkout'

function CartSummary({ products, handleCheckout }) {
  const [cartAmount, setCartAmount] = React.useState(0)
  const [stripeAmount, setStripeAmount] = React.useState(0)
  const [isCartEmpty, setCartEmpty] = React.useState(false)

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products)
    setCartAmount(cartTotal)
    setStripeAmount(stripeTotal)
    setCartEmpty(products.length === 0)
  }, [products])

  return (
    <>
      <Fieldset.Footer.Status>
        <strong>Sub-total: </strong>
        <Spacer x={0.5} /> <p>${cartAmount}</p>
      </Fieldset.Footer.Status>
      <Fieldset.Footer.Actions>
        <StripeCheckout
          name='Next E-comm'
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ''}
          currency='usd'
          shippingAddress={true}
          billingAddress={true}
          token={handleCheckout}
          triggerEvent='onClick'
        >
          <Button auto size='small' type='success' disabled={isCartEmpty}>
            Checkout
          </Button>
        </StripeCheckout>
      </Fieldset.Footer.Actions>
    </>
  )
}

export default CartSummary
