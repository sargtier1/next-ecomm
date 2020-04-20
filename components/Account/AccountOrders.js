import {
  Row,
  Col,
  Collapse,
  Note,
  Spacer,
  Button,
  Tag,
  Text,
  Avatar,
} from '@zeit-ui/react'
import { Folder, Mail } from 'react-feather'
import { useRouter } from 'next/router'

function AccountOrders({ orders }) {
  const router = useRouter()
  return (
    <>
      <Row>
        <Col span={24}>
          <Spacer y={2} />
          <div className='header-wrapper'>
            <Folder
              style={{ marginTop: '.35rem', marginRight: '1rem' }}
              size={40}
            />
            <h2>Order History</h2>
          </div>
          <Spacer y={2} />
        </Col>
      </Row>

      {orders.length === 0 ? (
        <>
          <Row justify='center'>
            <Col span={20}>
              <Note label='Uh oh' type='warning'>
                No orders have been placed
              </Note>
              <Spacer y={2} />
              <div className='center'>
                <Button type='success' onClick={() => router.push('/')}>
                  View Products
                </Button>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <Collapse.Group>
          {orders.map((order) => (
            <Collapse
              key={order._id}
              title={
                <Tag type='secondary' invert='true'>
                  {order.createdAt}
                </Tag>
              }
            >
              <div className='title-wrapper'>
                <h4 className='title'>$ {order.total}</h4>
                <Spacer y={0.5} />
                <Tag type='success' style={{ margin: 0 }}>
                  <div className='center'>
                    <Mail style={{ marginRight: '.25rem' }} size={15} />
                    {order.email}
                  </div>
                </Tag>
              </div>
              <Spacer y={1} />
              <div className='orders-wrapper'>
                {order.products.map((p, i) => (
                  <div key={i} className='items-wrapper'>
                    <div className='product-wrapper'>
                      <Avatar size='large' src={p.product.mediaUrl} />
                      <div style={{ marginLeft: '1rem', marginTop: '1rem' }}>
                        <h4>{p.product.name}</h4>
                        <Text p type='secondary'>
                          {p.quantity} x $ {p.product.price}
                        </Text>
                      </div>
                    </div>
                    <Spacer y={1} />
                    <div>
                      <Note type='warning' label='sku'>
                        {p.product.sku}
                      </Note>
                    </div>
                  </div>
                ))}
              </div>
            </Collapse>
          ))}
        </Collapse.Group>
      )}
      <style jsx>{`
        .title {
          margin: 0;
        }
        .product-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .items-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .title-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .header-wrapper {
          display: flex;
          flex-direction: row;
        }
        .orders-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (max-width: 600px) {
          .items-wrapper {
            flex-direction: column;
          }
          .title-wrapper {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}

export default AccountOrders
