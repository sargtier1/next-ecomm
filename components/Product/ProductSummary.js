import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Image,
  Button,
  Fieldset,
  Note,
  Input,
  Modal,
  Row,
  Col,
  Spacer,
  Text,
} from '@zeit-ui/react'
import { Trash2, ShoppingCart } from 'react-feather'
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import useViewPort from '../../utils/hooks/width'

function ProductSummary({
  name,
  mediaUrl,
  _id,
  price,
  description,
  sku,
  user,
}) {
  const router = useRouter()
  const [state, setState] = useState(false)

  const isRoot = user && user.role === 'root'
  const isAdmin = user && user.role === 'admin'
  const isRootOrAdmin = isRoot || isAdmin

  const handler = () => setState(true)
  const closeHandler = () => {
    setState(false)
  }

  async function handleDelete() {
    const url = `${baseUrl}/api/product`
    const payload = { params: { _id } }
    await axios.delete(url, payload).then(router.push('/'))
  }

  const { width } = useViewPort()

  return (
    <>
      <Row justify='center' align='middle' gap={width <= 840 ? 0.5 : 1}>
        <div className='summary-container'>
          <Col span={width <= 840 ? 24 : 12}>
            <Image src={mediaUrl} width={550} height={550} alt={name} />
          </Col>
          <Col span={width <= 840 ? 24 : 12}>
            {/* <div className='container'>
              <div className='notes'> */}
            <Text h1>{name}</Text>
            <Text type='secondary' h2>
              $ {price}
            </Text>
            <Note className='note' label='SKU' small type='warning'>
              {sku}
            </Note>
            <Spacer y={2} />
            <form action=''>
              <Input
                clearable
                name='quantity'
                min='0.00'
                step='1'
                type='number'
                labelRight={
                  <Text type='success' p>
                    Add to cart
                  </Text>
                }
              />
            </form>
          </Col>
        </div>
      </Row>
      <Spacer y={2} />

      <Row justify='center' align='middle' gap={width <= 840 ? 0.5 : 1}>
        <Col span={width <= 840 ? 24 : 12}></Col>
      </Row>

      <Fieldset>
        <Fieldset.Title>
          {name} -- ${price}
        </Fieldset.Title>
        <Image src={mediaUrl} width={550} alt={name} />
        <Fieldset.Subtitle>{description}</Fieldset.Subtitle>
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

        {isRootOrAdmin && (
          <Fieldset.Footer>
            <Fieldset.Footer.Status>Remove Item</Fieldset.Footer.Status>
            <Fieldset.Footer.Actions>
              <Button auto type='error' ghost onClick={handler}>
                <Trash2 style={{ marginRight: '.5rem' }} size={25} />
                Delete Item
              </Button>
            </Fieldset.Footer.Actions>
          </Fieldset.Footer>
        )}
      </Fieldset>

      {/* =================================== */}
      <Modal open={state} onClose={closeHandler}>
        <Modal.Title>Confirm Deletion</Modal.Title>
        <Modal.Content>
          <p>Are you sure you want to delete this product?</p>
        </Modal.Content>
        <Modal.Action passive>Cancel</Modal.Action>
        <Modal.Action onClick={handleDelete}>Delete</Modal.Action>
      </Modal>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          flex-direction: ${width <= 840 ? 'column' : 'row'};
        }
        .note {
          width: ${width <= 840 ? '100%' : '50%'};
        }
        .summary-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: ${width <= 840 ? 'column' : 'row'};
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default ProductSummary
