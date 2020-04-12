import {
  Row,
  Fieldset,
  Button,
  Card,
  Col,
  Spacer,
  Image,
  Text,
  Code,
} from '@zeit-ui/react'
import { useRouter } from 'next/router'

export default function CartItemList({ products, user, width }) {
  const router = useRouter()

  if (products.length === '0') {
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
                <Button onClick={() => router.push('/')} type='success'>
                  Add Products
                </Button>
              ) : (
                <Button onClick={() => router.push('/login')} type='warning'>
                  Login in to purchase items
                </Button>
              )}
            </Fieldset.Subtitle>
            {/* </Col> */}
          </div>
        </Row>
      </>
    )
  }
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
          <Fieldset.Title style={{ margin: ' 1rem 0 1rem' }}>
            <p>
              Current Cart for{' '}
              <Code style={{ color: '#f81ce5' }}>{user.name}</Code>
            </p>
          </Fieldset.Title>

          <Row gap={0.8} justify='space-around'>
            <Col span={24}>
              {products &&
                products.map(({ quantity, product }) => (
                  <CartCard
                    key={product._id}
                    quantity={quantity}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    src={product.mediaUrl}
                    width={width}
                  />
                ))}
            </Col>
          </Row>

          {/* </Col> */}
        </div>
      </Row>
    </>
  )
}

function CartCard({ quantity, name, price, description, src, width }) {
  return (
    <>
      <Card hoverable shadow>
        <Row
          justify='center'
          align='middle'
          gap={1}
          style={{ flexDirection: width <= 840 ? 'column' : 'row' }}
        >
          <Col span={width <= 840 ? 24 : 8}>
            <Image src={src} width='100%' />
          </Col>
          <Spacer x={1} />
          <Col span={width <= 840 ? 24 : 12}>
            <Text h2>{name}</Text>
            <Spacer y={0.5} />
            <Text h4 type='secondary'>
              {quantity} x ${price}
            </Text>
          </Col>
          <Spacer x={1} />
          <Col span={width <= 840 ? 24 : 4}>
            <Button
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
              }}
              type='secondary'
              auto
              ghost
              // size={width <= 840 ? 'mini' : ''}
            >
              {width <= 840 ? 'Remove Item' : 'X'}
            </Button>
          </Col>
        </Row>
      </Card>
      <Spacer y={2} />
    </>
  )
}
