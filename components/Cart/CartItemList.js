import Link from 'next/link'
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

export default function CartItemList({ products, user, handleRemoveFromCart }) {
  const router = useRouter()
  const isEmpty = products.length === 0
  console.log(isEmpty)
  console.log(products)
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
          {isEmpty ? (
            <>
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
            </>
          ) : (
            <>
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
                        _id={product._id}
                        handleRemoveFromCart={handleRemoveFromCart}
                      />
                    ))}
                </Col>
              </Row>
            </>
          )}
        </div>
      </Row>
    </>
  )
}

function CartCard({
  quantity,
  name,
  price,
  src,

  _id,
  handleRemoveFromCart,
}) {
  return (
    <>
      <Card hoverable shadow>
        <Row justify='center' align='middle' gap={1}>
          <Col span={8}>
            <Image src={src} width='100%' />
          </Col>
          <Spacer x={1} />
          <Col span={12}>
            <Link href={`/product?_id=${_id}`}>
              <a className='product-card'>
                <Text h4>{name}</Text>
                <Spacer y={0.5} />
                <Text h5 type='secondary'>
                  {quantity} x ${price}
                </Text>
              </a>
            </Link>
          </Col>
          <Spacer x={1} />
          <Col span={4}>
            <Button
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
              }}
              onClick={handleRemoveFromCart(_id)}
              type='secondary'
              auto
              ghost
              // size={width <= 840 ? 'mini' : ''}
            >
              X
            </Button>
          </Col>
        </Row>
      </Card>

      <Spacer y={2} />
      <style jsx>{`
        .product-card {
          text-decoration: none;s
        }
        .product-card:hover {
          text-decoration: underline;
          color: #0070f3;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}
