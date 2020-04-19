import React from 'react'
import { Fieldset, Button, Spacer } from '@zeit-ui/react'
import { ShoppingCart } from 'react-feather'
import calculateCartTotal from '../../utils/calculateCartTotal'
import StripeCheckout from 'react-stripe-checkout'

function CartSummary({ products, handleCheckout, success }) {
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
          currency='USD'
          shippingAddress={true}
          billingAddress={true}
          token={handleCheckout}
          triggerEvent='onClick'
          stripeKey='pk_test_AoBLYc7QXzsgSJVluR3Am9Aq00ljQJ5sds'
        >
          <Button
            auto
            size='small'
            type='success'
            disabled={isCartEmpty || success}
          >
            Checkout
          </Button>
        </StripeCheckout>
      </Fieldset.Footer.Actions>
    </>
  )
}

export default CartSummary
