import { useState } from 'react'
import {
  Input,
  Textarea,
  Button,
  Image,
  Text,
  Row,
  Col,
  Spacer,
  Note,
  Dot,
} from '@zeit-ui/react'
import { FolderPlus } from 'react-feather'
import useViewPort from '../utils/hooks/width'

const init_prod = {
  name: '',
  price: '',
  media: '',
  description: '',
}

function CreateProduct() {
  const [product, setProduct] = useState(init_prod)

  const [mediaPreview, setMediaPreview] = useState(null)

  const [success, setSuccess] = useState(false)

  function handleChange(event) {
    const { name, value, files } = event.target
    if (name === 'media') {
      setProduct((prevState) => ({ ...prevState, media: files[0] }))
      setMediaPreview(window.URL.createObjectURL(files[0]))
    } else {
      setProduct((prevState) => ({ ...prevState, [name]: value }))
    }
  }

  function handleSubmit() {
    event.preventDefault()
    console.log(product)
    setProduct(init_prod)
    setSuccess(true)
  }

  const { width } = useViewPort()
  return (
    <>
      <Row justify='center' gap={width < 850 ? 0.8 : 1}>
        <Col span={width < 840 ? 24 : 16}>
          <div className='title-wrapper'>
            <FolderPlus size={25} color='black' />
            <Text style={{ marginLeft: '.5rem' }} h1>
              Create New Product
            </Text>
          </div>
          <hr />
          <Spacer y={1} />
          {success && (
            <Note>
              <Dot type='success'>
                The item was successfully added to the store!
              </Dot>
            </Note>
          )}
          <form onSubmit={handleSubmit}>
            <Row>
              <div className='form-wrapper'>
                <Col span={width <= 840 ? 24 : 6}>
                  <Input
                    clearable
                    placeholder='Green Sofa'
                    width='100%'
                    name='name'
                    value={product.name}
                    type='text'
                    onChange={handleChange}
                  >
                    Name
                  </Input>
                </Col>
                <Spacer />
                <Col span={width <= 840 ? 24 : 6}>
                  <Input
                    clearable
                    placeholder='99.99'
                    width='100%'
                    name='price'
                    min='0.00'
                    step='0.01'
                    type='number'
                    value={product.price}
                    onChange={handleChange}
                  >
                    Price
                  </Input>
                </Col>
                <Spacer />
                <Col span={width <= 840 ? 24 : 12}>
                  <Input
                    clearable
                    placeholder='Link media'
                    width='100%'
                    name='media'
                    type='file'
                    accept='image/*'
                    onChange={handleChange}
                  >
                    Media
                  </Input>
                </Col>
              </div>
            </Row>
            <Spacer />
            {mediaPreview && <Image width={250} src={mediaPreview} />}
            <Spacer />
            <Row>
              <div className='textarea-wrapper'>
                <label>Description</label>
                <Spacer y={0.1} />
                <Textarea
                  width='100%'
                  placeholder='description of item'
                  name='description'
                  value={product.description}
                  onChange={handleChange}
                />
              </div>
            </Row>
            <Spacer y={1} />
            <Row justify='end'>
              <Button ghost type='success'>
                Add Item
              </Button>
            </Row>
          </form>
        </Col>
      </Row>
      <style jsx>{`
        label {
          display: block;
          font-weight: normal;
          color: #444;
          padding: 0 0 0 1px;
          margin-bottom: 8pt;
          font-size: 1rem;
          line-height: 1.5;
        }
        .form-wrapper {
          display: flex;
          flex-direction: ${width <= 840 ? 'column' : 'row'};
          width: 100%;
        }
        .textarea-wrapper {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .title-wrapper {
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default CreateProduct
