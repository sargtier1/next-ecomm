import AccountHeader from '../components/Account/AccountHeader'
import AccountOrders from '../components/Account/AccountOrders'
import AccountPermissions from '../components/Account/AccountPermissions'
import { Row, Col, Fieldset } from '@zeit-ui/react'
import { parseCookies } from 'nookies'
import baseUrl from '../utils/baseUrl'
import axios from 'axios'

function Account({ user, orders }) {
  return (
    <>
      <Row justify='center' gap={1}>
        <Col span={24}>
          <Fieldset>
            <AccountHeader {...user} />
            <AccountOrders orders={orders} />
          </Fieldset>
          {/* {user.role === 'root' && <AccountPermissions />} */}
        </Col>
      </Row>
    </>
  )
}

Account.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx)
  if (!token) {
    return { orders: [] }
  }
  const payload = { headers: { Authorization: token } }
  const url = `${baseUrl}/api/orders`
  const res = await axios.get(url, payload)

  return res.data
}

export default Account
