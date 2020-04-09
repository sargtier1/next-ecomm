import NextLink from 'next/link'

import { Col, Display, Text } from '@zeit-ui/react'

function ProductList({ products, width }) {
  return (
    <>
      {products &&
        products.map(({ name, mediaUrl, price, _id }) => (
          <Col key={_id} span={width < 840 ? 24 : 12}>
            <Display
              shadow
              caption={
                <div>
                  <Text h1>{name}</Text>
                  <Text type='secondary' h2>{`$ ${price}`}</Text>
                </div>
              }
            >
              <NextLink href={`/product?_id=${_id}`}>
                <a className='img-border'>
                  <img
                    className='products'
                    width={375}
                    src={mediaUrl}
                    alt={name}
                  />
                </a>
              </NextLink>
            </Display>
          </Col>
        ))}
      <style jsx>{`
        .img-border {
          background: #79efe1;
        }
        .products:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </>
  )
}

export default ProductList
