// import {
//   Row,
//   Col,
//   Spacer,
//   Table,
//   Toggle,
//   Button,
//   Checkbox,
// } from '@zeit-ui/react'
// import { Sliders } from 'react-feather'
// import axios from 'axios'
// import baseUrl from '../../utils/baseUrl'
// import cookie from 'js-cookie'

// function AccountPermissions() {
//   const [users, setUsers] = React.useState([])

//   const [admin, setAdmin] = React.useState([users.role] === 'admin')

//   React.useEffect(() => {
//     getUsers()
//     updatePermission()
//   }, [admin])

//   async function getUsers() {
//     const url = `${baseUrl}/api/users`
//     const token = cookie.get('token')
//     const payload = { headers: { Authorization: token } }
//     const res = await axios.get(url, payload)
//     const newArr = res.data.map((v) => ({ ...v, operation: operation }))
//     setUsers(newArr)
//   }

//   const operation = (setAdmin, admin) => {
//     function handleChangePermission(setAdmin) {
//       setAdmin((prevState) => !prevState)
//       console.log(admin)
//     }
//     return <Toggle />
//   }

//   async function updatePermission() {
//     const url = `${baseUrl}/api/account`
//     const payload = { _id: users._id, role: admin ? 'admin' : 'user' }
//     await axios.put(url, payload)
//   }

//   return (
//     <Row gap={1}>
//       <Col span={24}>
//         <Spacer y={2} />
//         <div className='header-wrapper'>
//           <Sliders
//             style={{ marginTop: '.35rem', marginRight: '1rem' }}
//             size={40}
//           />
//           <h2>User Permissions</h2>
//           <UserPermission users={users} />
//         </div>
//         <Spacer y={2} />
//       </Col>
//       <style>{`
//       .header-wrapper {
//         display: flex;
//         flex-direction: column;
//       }
//       @media(max-width : 600px) {
//         .large-table {
//           display: none;
//         }
//         .small-table {
//           display: block;
//         }
//       }
//       @media(min-width : 600px) {
//         .large-table {
//           display: block;
//         }
//         .small-table {
//           display: none;
//         }
//       }
//       `}</style>
//     </Row>
//   )
// }

// const UserPermission = ({ users }) => {
//   return (
//     <>
//       <div className='large-table'>
//         <Table data={users}>
//           <Table.Column prop='operation' label='' />
//           <Table.Column prop='name' label='name' />
//           <Table.Column prop='email' label='email' />
//           <Table.Column prop='createdAt' label='joined' />
//           <Table.Column prop='updatedAt' label='updated' />
//           <Table.Column prop='role' label='role' />
//         </Table>
//       </div>
//       <div className='small-table'>
//         <Table data={users}>
//           <Table.Column prop='operation' label='Is Admin' />
//           <Table.Column prop='name' label='name' />
//           <Table.Column prop='role' label='role' />
//         </Table>
//       </div>
//     </>
//   )
// }

// export default AccountPermissions
