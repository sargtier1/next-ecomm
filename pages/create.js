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
} from '@zeit-ui/react'
import { FolderPlus } from 'react-feather'
import useViewPort from '../utils/hooks/width'

function CreateProduct() {
  const [inputs, setInputs] = useState({
    name: '',
    price: '',
    media: '',
    description: '',
  })

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const { width } = useViewPort()
  return (
    <>
      <Row justify='center' gap={width < 850 ? 0.8 : 1}>
        <Col span={width < 840 ? 24 : 12}>
          <div className='title-wrapper'>
            <FolderPlus size={25} color='black' />
            <Text style={{ marginLeft: '.5rem' }} h1>
              Create New Product
            </Text>
          </div>
          <hr />
          <Spacer y={1} />
          <form action=''>
            <Row>
              <div className='form-wrapper'>
                <Input
                  clearable
                  placeholder='Green Sofa'
                  width='100%'
                  value={inputs.name}
                  onChange={handleOnChange}
                >
                  Name
                </Input>
                <Spacer />
                <Input
                  clearable
                  placeholder='99.99'
                  width='100%'
                  value={inputs.price}
                  onChange={handleOnChange}
                >
                  Price
                </Input>
                <Spacer />
                <Input
                  clearable
                  placeholder='Link media'
                  width='100%'
                  value={inputs.media}
                  onChange={handleOnChange}
                >
                  Media
                </Input>
              </div>
            </Row>
            <Spacer />
            <Row>
              <div className='textarea-wrapper'>
                <label>Description</label>
                <Spacer y={.1}/>
                <Textarea
                  width='100%'
                  placeholder='description of item'
                  value={inputs.description}
                  onChange={handleOnChange}
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
      {/* <Spacer y={1} />
      <Row justify='center' gap={width < 850 ? 0.8 : 1}>
        <Col span={width < 840 ? 24 : 12}>
          <Textarea
            width='100%'
            placeholder='description'
            value={value}
            onChange={handler}
          />
        </Col>
      </Row> */}
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
