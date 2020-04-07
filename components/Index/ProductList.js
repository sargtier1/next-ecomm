import NextLink from 'next/link'

import { Col, Display, Text, Link } from '@zeit-ui/react'

// href:`/product?_id=${_id}`
function ProductList({ products, width }) {
  console.log(products)
  return (
    <>
      {products &&
        products.map(({ name, mediaUrl, price, _id }) => (
          <Col span={width < 840 ? 24 : 12}>
            <Display
              shadow
              caption={
                <div>
                  <Text h3>{name}</Text>
                  <Text type='secondary' h5>{`$ ${price}`}</Text>
                </div>
              }
            >
              <NextLink href={`/products/_id=${_id}`}>
                <a>
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
        .products:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </>
  )
}

export default ProductList
