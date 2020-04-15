import { useState, useEffect } from 'react'
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
} from '@zeit-ui/react'
import { FolderPlus } from 'react-feather'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import catchErrors from '../utils/catchErrors'

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
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const isProduct = Object.values(product).every((el) => Boolean(el))
    isProduct ? setDisabled(false) : setDisabled(true)
  }, [product])

  function handleChange(event) {
    const { name, value, files } = event.target
    if (name === 'media') {
      setProduct((prevState) => ({ ...prevState, media: files[0] }))
      setMediaPreview(window.URL.createObjectURL(files[0]))
    } else {
      setProduct((prevState) => ({ ...prevState, [name]: value }))
    }
  }

  async function handleImageUpload() {
    const data = new FormData()
    data.append('file', product.media)
    data.append('upload_preset', 'NextShop')
    data.append('cloud_name', 'dtkqu8s6e')
    const res = await axios.post(process.env.CLOUDINARY_URL, data)
    const mediaUrl = res.data.url
    return mediaUrl
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setLoading(true)
      setError('')
      const mediaUrl = await handleImageUpload()
      const url = `${baseUrl}/api/product`
      const { name, price, description } = product
      const payload = {
        name,
        price,
        description,
        mediaUrl,
      }
      await axios.post(url, payload)
      setProduct(init_prod)
      setSuccess(true)
    } catch (e) {
      catchErrors(e, setError)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Row justify='center' gap={1}>
        <Col span={20}>
          <div className='title-wrapper'>
            <FolderPlus size={25} color='black' />
            <Text style={{ marginLeft: '.5rem' }} h1>
              Create New Product
            </Text>
          </div>
          <hr />
          <Spacer y={1} />
          {success && (
            <Note label='Success!' type='success'>
              The item was successfully added to the store!
            </Note>
          )}
          {error && (
            <Note type='error' label='Uh Oh!'>
              {error}
            </Note>
          )}
          <Spacer y={1} />
          <form onSubmit={handleSubmit}>
            <Row>
              <div className='form-wrapper'>
                <Col span={12}>
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
                <Col span={12}>
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
                <Col span={20}>
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
              <Button
                ghost
                type='success'
                disabled={disabled || loading}
                loading={loading}
              >
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
          flex-direction: row;
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
