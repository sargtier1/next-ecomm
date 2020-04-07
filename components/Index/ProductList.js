import { Col, Display, Text } from '@zeit-ui/react'

// href:`/product?_id=${_id}`
function ProductList({ products, width }) {
  console.log(products)
  return (
    <>
      {products &&
        products.map(({ sku, name, mediaUrl, description, price, _id }) => (
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
              <img width={375} src={mediaUrl} alt={name} />
            </Display>
          </Col>
        ))}
    </>
  )
}

export default ProductList
