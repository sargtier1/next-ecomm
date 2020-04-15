import NextLink from 'next/link'

import { Col, Display, Text, Spacer } from '@zeit-ui/react'

function ProductList({ products }) {
  return (
    <Col span={24}>
      <div className='products-wrapper'>
        {products &&
          products.map(({ name, mediaUrl, price, _id }) => (
            <div key={_id} className='product-card'>
              <Display
                shadow
                style={{ maxWidth: 'none' }}
                caption={
                  <div>
                    <Text h2>{name}</Text>
                    <Spacer y={1.25} />
                    <Text type='secondary' h3>{`$ ${price}`}</Text>
                  </div>
                }
              >
                <NextLink href={`/product?_id=${_id}`}>
                  <a className='img-border'>
                    <img
                      className='products'
                      width={350}
                      src={mediaUrl}
                      alt={name}
                    />
                  </a>
                </NextLink>
              </Display>
            </div>
          ))}
      </div>
      <style jsx>{`
        .products {
          max-width: 350px;
        }
        .products-wrapper {
          display: flex;
          flex-wrap: wrap;
        }
        .product-card {
          flex: 1 1 calc(49% - 2em);
        }
        .img-border {
          background: #79efe1;
        }
        .products:hover {
          transform: translateY(-10px);
        }
        @media(max-width: 840px) {
          .product-card {
            flex: 1 1 calc(50% - 1em);
          }
        })
    
      `}</style>
    </Col>
  )
}

export default ProductList
