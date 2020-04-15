import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Row,
  Col,
  Input,
  Button,
  Spacer,
  Text,
  Note,
  Fieldset,
} from '@zeit-ui/react'
import { Key, Lock, Mail, User, Edit } from 'react-feather'
import catchErrors from '../utils/catchErrors'
import baseUrl from '../utils/baseUrl'
import axios from 'axios'
import { handleLogin } from '../utils/auth'

const init_user = {
  email: '',
  password: '',
}

function Login() {
  const [user, setUser] = useState(init_user)
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el))
    isUser ? setDisabled(false) : setDisabled(true)
  }, [user])

  function handleChange(e) {
    const { name, value } = event.target
    setUser((prevState) => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setLoading(true)
      setError('')
      const url = `${baseUrl}/api/login`
      const payload = { ...user }
      const res = await axios.post(url, payload)
      handleLogin(res.data)
    } catch (e) {
      catchErrors(e, setError)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Row justify='center' gap={1}>
      <Col style={{ maxWidth: '820px' }} span={24}>
        <Note label={false} type='success'>
          <div className='title-wrapper'>
            <Key style={{ marginRight: '1rem' }} size={40} />
            <div>
              <Text style={{ margin: '0' }} type='success' h4>
                Hey there!
              </Text>
              <Text style={{}} type='success' p>
                Login with email and password!
              </Text>
            </div>
          </div>
        </Note>
        <br />
        <Fieldset>
          {error && (
            <Note type='error' label='Uh Oh!'>
              {error}
            </Note>
          )}
          <form onSubmit={handleSubmit}>
            <Row>
              <Col width='100%' span={24}>
                <Input
                  clearable
                  width='100%'
                  className='inputs'
                  placeholder='example@something.com'
                  type='email'
                  name='email'
                  value={user.email}
                  onChange={handleChange}
                  icon={<Mail />}
                >
                  Email
                </Input>
              </Col>
            </Row>
            <Spacer y={1} />
            <Row>
              <Col span={24}>
                <Input
                  clearable
                  width='100%'
                  className='inputs'
                  name='password'
                  placeholder='password'
                  type='password'
                  value={user.password}
                  onChange={handleChange}
                  icon={<Lock />}
                >
                  Password
                </Input>
              </Col>
            </Row>
            <Spacer y={2} />
            <Row justify='end'>
              <Button disabled={disabled || loading} auto>
                <Edit size={25} style={{ marginRight: '1rem' }} /> Login
              </Button>
            </Row>
          </form>
          <Fieldset.Footer>
            <Fieldset.Footer.Status className='Footer Status'>
              New user?{' '}
              <Link href='/signup'>
                <a style={{ marginLeft: '.5rem' }}>Sign up here</a>
              </Link>
            </Fieldset.Footer.Status>
          </Fieldset.Footer>
        </Fieldset>
      </Col>
      <style jsx>{`
        .title-wrapper {
          display: flex;
          align-items: center;
          width: 100%;
        }
        .inputs {
          width: 100% !important;
        }
      `}</style>
    </Row>
  )
}

export default Login
