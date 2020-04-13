import { Fieldset, Button, Spacer } from '@zeit-ui/react'
import { ShoppingCart } from 'react-feather'
import calculateCartTotal from '../../utils/calculateCartTotal'

function CartSummary({ products }) {
  const [cartAmount, setCartAmount] = React.useState(0)
  const [stripeAmount, setStripeAmount] = React.useState(0)
  const [isCartEmpty, setCartEmpty] = React.useState(false)

  // React.useEffect(() => {
  //   const { cartTotal, stripeTotal } = calculateCartTotal(products)
  //   setCartAmount(cartTotal)
  //   setStripeAmount(stripeTotal)
  //   setCartEmpty(products.length === 0)
  // }, [products])

  return (
    <>
      <Fieldset.Footer.Status>
        <strong>Sub-total: </strong>
        <Spacer x={.5} /> <p>${cartAmount}</p>
      </Fieldset.Footer.Status>
      <Fieldset.Footer.Actions>
        <Button auto size='small' type='success' disabled={isCartEmpty}>
          Checkout
        </Button>
      </Fieldset.Footer.Actions>
    </>
  )
}

export default CartSummary
