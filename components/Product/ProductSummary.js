import AddProductToCart from './AddProductToCart'
import { Image, Description, Text, Code } from '@zeit-ui/react'

function ProductSummary({ name, mediaUrl, _id, price, description, sku }) {
  return (
    <>
      <Image src={mediaUrl} alt={name} />
      <>
        <Text h1>
          {name} | <Code>$ {price}</Code>
        </Text>
      </>
      <Text p b>
        {description}
      </Text>
      <AddProductToCart />
    </>
  )
}

export default ProductSummary
