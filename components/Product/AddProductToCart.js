import { useRouter } from 'next/router'
import { useState } from 'react'
import { Input, Button, Note, Spacer } from '@zeit-ui/react'
import baseUrl from '../../utils/baseUrl'
import axios from 'axios'
import cookie from 'js-cookie'
import catchErrors from '../../utils/catchErrors'

function AddProductToCart({ user, productId }) {
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const router = useRouter()

  async function handleAddProductToCart() {
    try {
      setLoading(true)
      const url = `${baseUrl}/api/cart`
      const payload = { quantity, productId }
      const token = cookie.get('token')
      const headers = { headers: { Authorization: token } }
      await axios.put(url, payload, headers)
      setSuccess(true)
    } catch (e) {
      catchErrors(e, window.alert)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='input-wrapper'>
        <Input
          clearable
          width='90%'
          name='quantity'
          value={quantity}
          min='1'
          step='1'
          type='number'
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        {user ? (
          <Button onClick={handleAddProductToCart} auto disabled={loading}>
            Add to cart
          </Button>
        ) : (
          <Button onClick={() => router.push('/signup')} type='warning' auto>
            Sign up to purchase
          </Button>
        )}
      </div>
      <Spacer y={1} />
      {success && (
        <Note type='success' label='Success!'>
          Your order went through!
        </Note>
      )}
      <style jsx>{`
        .input-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}

export default AddProductToCart
