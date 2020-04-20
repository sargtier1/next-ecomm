import { Row, Col, Spacer, Table, Toggle, Checkbox } from '@zeit-ui/react'
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
    const newArr = res.data.map((v) => ({ ...v, operation: operation }))
    setUsers(newArr)
  }

  function operation() {
    return <Toggle />
  }

  console.log(users)
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

          <div className='large-table'>
            <Table data={users}>
              <Table.Column prop='operation' label='Is Admin' />
              <Table.Column prop='name' label='name' />
              <Table.Column prop='email' label='email' />
              <Table.Column prop='createdAt' label='joined' />
              <Table.Column prop='updatedAt' label='updated' />
              <Table.Column prop='role' label='role' />
            </Table>
          </div>
          {/* <div className='small-table'>
            <Table data={users}>
              <Table.Column prop='name' label='name' />
              <Table.Column prop='email' label='email' />
              <Table.Column prop='createdAt' label='joined' />
              <Table.Column prop='updatedAt' label='updated' />
              <Table.Column prop='role' label='role' />
            </Table>
          </div> */}
        </div>
        <Spacer y={2} />
      </Col>
      <style>{`
      .header-wrapper {
        display: flex;
        flex-direction: column;
      }
      `}</style>
    </Row>
  )
}

export default AccountPermissions
