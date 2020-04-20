import { Row, Col, Button, Spacer } from '@zeit-ui/react'
import { useRouter } from 'next/router'

function ProductPagination({ totalPages }) {
  const router = useRouter()
  return (
    <>
      <Spacer y={3} />
      <Row justify='center'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            maxWidth: '350px',
          }}
        >
          <Button
            style={{ margin: '1rem' }}
            size='mini'
            onClick={() => router.push(`/`)}
          >
            1
          </Button>
          <Button
            style={{ margin: '1rem' }}
            size='mini'
            onClick={() => router.push(`/?page=${2}`)}
          >
            2
          </Button>
          <Button
            style={{ margin: '1rem' }}
            size='mini'
            onClick={() => router.push(`/?page=${3}`)}
          >
            3
          </Button>
        </div>
      </Row>
      <Spacer y={3} />
    </>
  )
}

export default ProductPagination
