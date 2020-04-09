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
import { Key, Lock, Mail, User } from 'react-feather'
import useViewPort from '../utils/hooks/width'

function Signup() {
  const { width } = useViewPort

  return (
    <Row justify='center' gap={width <= 840 ? 0.5 : 1}>
      <Col style={{ maxWidth: '820px' }} span={24}>
        <Note label={false} type='success'>
          <div className='title-wrapper'>
            <Key style={{ marginRight: '1rem' }} size={40} />
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
          <form>
            <Row>
              <Col span={24}>
                <div className='form-wrapper'>
                  <Input
                    clearable
                    width='100%'
                    className='inputs'
                    icon={<User />}
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
                  icon={<Lock />}
                >
                  Password
                </Input>
              </Col>
            </Row>
            <Spacer y={2} />
            <Row justify='end'>
              <Button width={width <= 840 ? '100%' : ''}>Signup</Button>
            </Row>
          </form>
          <Fieldset.Footer>
            <Fieldset.Footer.Status className='Footer Status'>
              Already a member?{' '}
              <Link href='/login'>
                <a>Login in here</a>
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
