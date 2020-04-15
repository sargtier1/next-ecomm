import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Image,
  Button,
  Note,
  Modal,
  Row,
  Col,
  Spacer,
  Text,
} from '@zeit-ui/react'
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import AddProductToCart from '../Product/AddProductToCart'

export default function ProductSummary({
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

  return (
    <>
      <Row justify='center' align='middle' gap={0.5}>
        <div className='summary-container'>
          <div>
            <Col span={24}>
              <Image src={mediaUrl} width={350} height={400} alt={name} />
            </Col>
          </div>

          <div>
            <Col span={24}>
              <Text h2>{name}</Text>
              <Text type='secondary' h3>
                $ {price}
              </Text>
              <Note className='note' label='SKU' small type='warning'>
                {sku}
              </Note>
              <Spacer y={2} />
              <AddProductToCart user={user} productId={_id} />
            </Col>
          </div>
        </div>
      </Row>
      <Spacer y={1} />
      <hr />
      <Spacer y={1} />
      <Row justify='center' align='middle' gap={1}>
        <Col span={24}>
          <Text h3>About this product:</Text>
          <Text h4 type='secondary'>
            {description}
          </Text>
          <Spacer y={2} />
          {isRootOrAdmin && (
            <Button auto type='error' ghost onClick={handler}>
              Delete Item
            </Button>
          )}
        </Col>
      </Row>
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
          flex-direction: column;
        }
        .note {
          width: 100%;
        }
        .summary-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: row;
          width: 100%;
        }

        @media (max-width: 840px) {
          .summary-container {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}
