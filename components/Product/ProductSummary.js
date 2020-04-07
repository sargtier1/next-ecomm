import AddProductToCart from './AddProductToCart'
import { Image, Description, Text, Code } from '@zeit-ui/react'

function ProductSummary({ name, mediaUrl, _id, price, description, sku }) {
  return (
    <>
      <Image src={mediaUrl} alt={name} />
      <Description
        title={
          <>
            <Text h3>
              {name} | <Code>$ {price}</Code>
            </Text>
          </>
        }
        content={<Text p>{description}</Text>}
      />
      <AddProductToCart />
    </>
  )
}

export default ProductSummary
