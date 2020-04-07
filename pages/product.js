import axios from 'axios'

function Product({ product }) {
  console.log(product)
  return <>product</>
}

Product.getInitialProps = async ({ query: { _id } }) => {
  const url = '/api/product'
  const payload = { params: { _id } }
  const res = await axios.get(url, payload)
  return {
    product: res.data,
  }
}

export default Product
