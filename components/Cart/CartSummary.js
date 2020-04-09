import { Fieldset, Button } from '@zeit-ui/react'
import { ShoppingCart } from 'react-feather'

function CartSummary() {
  return (
    <>
      <Fieldset.Footer.Status>
        <strong>Sub-total:</strong> $0.00
      </Fieldset.Footer.Status>
      <Fieldset.Footer.Actions>
        <Button auto size='small' type='success'>
          Checkout
        </Button>
      </Fieldset.Footer.Actions>
    </>
  )
}

export default CartSummary
