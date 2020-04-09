import CartItemList from '../components/Cart/CartItemList'
import CartSummary from '../components/Cart/CartSummary'
import { Row, Col, Fieldset } from '@zeit-ui/react'
import useViewPort from '../utils/hooks/width'

function Cart() {
  const { width } = useViewPort()

  return (
    <Row justify='center' gap={width <= 840 ? 0.8 : 1}>
      <Col span={width <= 840 ? 24 : 14}>
        <Fieldset>
          <CartItemList />
          <Fieldset.Footer>
            <CartSummary />
          </Fieldset.Footer>
        </Fieldset>
      </Col>
    </Row>
  )
}

export default Cart
