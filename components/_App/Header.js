import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Link, Text } from '@zeit-ui/react'
import {
  ShoppingCart,
  User,
  PlusSquare,
  LogIn,
  LogOut,
  Edit,
} from 'react-feather'

function Header() {
  const router = useRouter()
  const user = false
  // const { width } = useViewPort()

  function isActive(route) {
    return route === router.pathname
  }

  return (
    <header>
      <div>
        <NextLink href='/'>
          <Link style={{ display: 'flex', alignItems: 'center' }} pure block>
            <img
              style={{ width: '35px', marginRight: '.5rem' }}
              src='./logo.svg'
              alt='logo'
            />
            <Text h3>Next Shop</Text>
          </Link>
        </NextLink>
      </div>
      <nav>
        <ul style={{ margin: 'none' }}>
          <li>
            <NextLink href='/cart'>
              <Link
                style={{
                  alignItems: 'center',
                  color: 'black',
                }}
                pure
                block
                underline={isActive('/cart')}
              >
                <ShoppingCart
                  size={25}
                  style={{ marginRight: '.5rem', color: 'black' }}
                  size={25}
                />
                <p>Cart</p>
              </Link>
            </NextLink>
          </li>
          {user && (
            <li>
              <NextLink href='/create'>
                <Link
                  style={{
                    alignItems: 'center',
                  }}
                  pure
                  block
                  underline={isActive('/create')}
                >
                  <PlusSquare
                    size={25}
                    style={{ marginRight: '.5rem', color: 'black' }}
                    size={25}
                  />
                  <p>Create</p>
                </Link>
              </NextLink>
            </li>
          )}

          {user ? (
            <>
              <li>
                <NextLink href='/account'>
                  <Link
                    style={{
                      alignItems: 'center',
                    }}
                    pure
                    block
                    underline={isActive('/account')}
                  >
                    <User
                      size={25}
                      style={{ marginRight: '.5rem', color: 'black' }}
                      size={25}
                    />
                    <p>Account</p>
                  </Link>
                </NextLink>
              </li>
              <li>
                <NextLink href='/logout'>
                  <Link
                    style={{
                      alignItems: 'center',
                    }}
                    pure
                    block
                    underline={isActive('/logout')}
                  >
                    <LogOut
                      size={25}
                      style={{ marginRight: '.5rem', color: 'black' }}
                      size={25}
                    />
                    <p>Logout</p>
                  </Link>
                </NextLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NextLink href='/login'>
                  <Link
                    style={{
                      alignItems: 'center',
                      color: 'black',
                    }}
                    pure
                    block
                    underline={isActive('/login')}
                  >
                    <LogIn
                      size={25}
                      style={{ marginRight: '.5rem', color: 'black' }}
                      size={25}
                    />
                    <p>Login</p>
                  </Link>
                </NextLink>
              </li>
              <li>
                <NextLink href='/signup'>
                  <Link
                    style={{
                      alignItems: 'center',
                      color: 'black',
                    }}
                    pure
                    block
                    underline={isActive('/signup')}
                  >
                    <Edit size={25} style={{ marginRight: '.5rem' }} />
                    <p>Signup</p>
                  </Link>
                </NextLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      <style jsx>{`
        header {
          border: 1px solid #eaeaea;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 1.25rem;
          width: 100%;
          background: #fffffff0;
        }
        nav ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          list-style-type: none;
          margin: none;
          padding: none;
        }
        ul {
          margin: 0;
        }
        li {
          padding: 0 1rem;
        }
      `}</style>
    </header>
  )
}

export default Header
