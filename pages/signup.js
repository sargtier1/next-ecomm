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
import { Settings, Lock, Mail, User, Edit } from 'react-feather'
import catchErrors from '../utils/catchErrors'
import useViewPort from '../utils/hooks/width'

const init_user = {
  name: '',
  email: '',
  password: '',
  passwordConf: '',
}

function Signup() {
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

  function handleSubmit(e) {
    e.preventDefault()
    try {
      setLoading(true)
      setError('')
      console.log(user)
    } catch (e) {
      catchErrors(e, setError)
    } finally {
      setLoading(false)
    }
    if (user.password !== user.passwordConf) {
      setError('Passwords do not match')
    }
  }

  const { width } = useViewPort
  return (
    <Row justify='center' gap={width <= 840 ? 0.5 : 1}>
      <Col style={{ maxWidth: '820px' }} span={24}>
        <Note label={false} type='success'>
          <div className='title-wrapper'>
            <Settings style={{ marginRight: '1rem' }} size={40} />
            <div>
              <Text style={{ margin: '0' }} type='success' h4>
                Get Started!
              </Text>
              <Text style={{}} type='success' p>
                Create a new account below
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
              <Col span={24}>
                <div className='form-wrapper'>
                  <Input
                    clearable
                    width='100%'
                    className='inputs'
                    icon={<User />}
                    placeholder='John Doe'
                    type='text'
                    name='name'
                    value={user.name}
                    onChange={handleChange}
                  >
                    Name
                  </Input>
                </div>
              </Col>
            </Row>
            <Spacer y={1} />
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
            <Spacer y={1} />
            <Row>
              <Col span={24}>
                <Input
                  clearable
                  width='100%'
                  className='inputs'
                  name='passwordConf'
                  placeholder='password confirmation'
                  type='password'
                  value={user.passwordConf}
                  onChange={handleChange}
                  icon={<Lock />}
                >
                  Password Confirmation
                </Input>
              </Col>
            </Row>
            <Spacer y={2} />
            <Row justify='end'>
              <Button disabled={disabled || loading} auto>
                <Edit size={25} style={{ marginRight: '1rem' }} /> Signup
              </Button>
            </Row>
          </form>
          <Fieldset.Footer>
            <Fieldset.Footer.Status className='Footer Status'>
              Already a member?{' '}
              <Link href='/login'>
                <a style={{ marginLeft: '.5rem' }}>Login in here</a>
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

export default Signup
