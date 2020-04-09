import { useState } from 'react'
import { useRouter } from 'next/router'
import { Image, Button, Fieldset, Note, Input, Modal } from '@zeit-ui/react'
import { Trash2, ShoppingCart } from 'react-feather'
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import useViewPort from '../../utils/hooks/width'

function ProductSummary({ name, mediaUrl, _id, price, description, sku }) {
  const router = useRouter()
  const [state, setState] = useState(false)

  const handler = () => setState(true)
  const closeHandler = () => {
    setState(false)
  }

  function handleDelete() {
    const url = `${baseUrl}/api/product`
    const payload = { params: { _id } }
    axios.delete(url, payload)
    router.push('/')
  }

  const { width } = useViewPort()

  return (
    <>
      <Fieldset>
        <Fieldset.Title>
          {name} -- ${price}
        </Fieldset.Title>
        <Image src={mediaUrl} width={550} alt={name} />
        <Fieldset.Subtitle>{description}</Fieldset.Subtitle>
        <div className='container'>
          <div className='notes'>
            <Note label='SKU' small type='warning'>
              {sku}
            </Note>
          </div>
        </div>
        <Fieldset.Footer>
          <Fieldset.Footer.Status>
            <Input placeholder='Quantity' />
          </Fieldset.Footer.Status>
          <Fieldset.Footer.Actions>
            <Button type='success' ghost auto>
              <ShoppingCart style={{ marginRight: '.5rem' }} size={25} />
              Add To Cart
            </Button>
          </Fieldset.Footer.Actions>
        </Fieldset.Footer>
        <Fieldset.Footer>
          <Fieldset.Footer.Status>Remove Item</Fieldset.Footer.Status>
          <Fieldset.Footer.Actions>
            <Button auto type='error' ghost onClick={handler}>
              <Trash2 style={{ marginRight: '.5rem' }} size={25} />
              Delete Item
            </Button>
          </Fieldset.Footer.Actions>
        </Fieldset.Footer>
      </Fieldset>

      {/* =================================== */}
      <Modal open={state} onClose={closeHandler}>
        <Modal.Title>Confirm Deletion</Modal.Title>
        <Modal.Content>
          <p>Are you sure you want to delete this product?</p>
        </Modal.Content>
        <Modal.Action passive>Cancel</Modal.Action>
        <Modal.Action onClick={handleDelete}>
          <Trash2 size={25} />
          Delete
        </Modal.Action>
      </Modal>
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
    </>
  )
}

export default ProductSummary
