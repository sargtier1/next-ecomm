import AddProductToCart from './AddProductToCart'
import { Image, Button, Fieldset, Note, Input } from '@zeit-ui/react'
import useViewPort from '../../utils/hooks/width'

function ProductSummary({ name, mediaUrl, _id, price, description, sku }) {
  const { width } = useViewPort()

  return (
    <Fieldset>
      <Fieldset.Title>{name}</Fieldset.Title>
      <Image src={mediaUrl} width={450} alt={name} />
      <Fieldset.Subtitle>{description}</Fieldset.Subtitle>
      <div className='container'>
        <div className='notes'>
          <Note label='SKU' small type='success'>
            {sku}
          </Note>
        </div>
        <div className='notes'>
          <Note label='SKU' small type='warning'>
            {sku}
          </Note>
        </div>
      </div>
      <Fieldset.Footer>
        <Fieldset.Footer.Status>
          Add to cart for ${price}
        </Fieldset.Footer.Status>
        <Fieldset.Footer.Actions>
          <Input
            labelRight={
              <Button auto size='mini'>
                Add To Cart
              </Button>
            }
            placeholder='Quantity'
          />
        </Fieldset.Footer.Actions>
      </Fieldset.Footer>

      <Fieldset.Footer>
        <Fieldset.Footer.Status>
          Add to cart for ${price}
        </Fieldset.Footer.Status>
        <Fieldset.Footer.Actions>
          <Button auto type='error' ghost>
            Delete Item
          </Button>
        </Fieldset.Footer.Actions>
      </Fieldset.Footer>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          flex-direction: ${width <= 840 ? 'column' : 'row'};
        }
        .notes {
          width: ${width <= 840 ? '100%' : '48%'};
          margin: ${width <= 840 ? '.5rem 0' : '0'};
        }
      `}</style>
    </Fieldset>
  )
}

export default ProductSummary
