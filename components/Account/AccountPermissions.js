import { Row, Col, Spacer, Table } from '@zeit-ui/react'
import { Sliders } from 'react-feather'

import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import cookie from 'js-cookie'

function AccountPermissions({ currentUserId }) {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    getUsers()
  }, [])

  async function getUsers() {
    const url = `${baseUrl}/api/users`
    const token = cookie.get('token')
    const payload = { headers: { Authorization: token } }
    const res = await axios.get(url, payload)
    setUsers(res.data)
    console.log(res.data)
  }

  return (
    <Row gap={1}>
      <Col span={24}>
        <Spacer y={2} />
        <div className='header-wrapper'>
          <Sliders
            style={{ marginTop: '.35rem', marginRight: '1rem' }}
            size={40}
          />
          <h2>User Permissions</h2>
        </div>
        <Spacer y={2} />
      </Col>
      <style>{`
      .header-wrapper {
        display: flex;
        flex-direction: row;
      }
      `}</style>
    </Row>
  )
}

export default AccountPermissions
