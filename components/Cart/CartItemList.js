import { Row, Text, Fieldset, Button } from '@zeit-ui/react'

function CartItemList() {
  const user = false

  return (
    <>
      <Row justify='center'>
        {/* <Col span={24}> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Fieldset.Title style={{ margin: ' 2rem 0 1rem' }}>
            No products in your cart
          </Fieldset.Title>

          <Fieldset.Subtitle>
            {user ? (
              <Button type='success'>Add Products</Button>
            ) : (
              <Button type='warning'>Login in to purchase items</Button>
            )}
          </Fieldset.Subtitle>
          {/* </Col> */}
        </div>
      </Row>
    </>
  )
}

export default CartItemList
