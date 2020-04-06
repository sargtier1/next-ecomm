import NextLink from 'next/link'
import Router, { useRouter } from 'next/router'
import { Link } from '@zeit-ui/react'
import {
  ShoppingCart,
  User,
  PlusSquare,
  LogIn,
  LogOut,
  Edit,
} from 'react-feather'
import nProgress from 'nprogress'

Router.onRouteChangeStart = () => nProgress.start()
Router.onRouteChangeComplete = () => nProgress.done()
Router.onRouteChangeError = () => nProgress.done()

function Header() {
  const router = useRouter()
  const user = false

  function isActive(route) {
    return route === router.pathname
  }

  return (
    <header>
      <div>
        <NextLink href='/'>
          <Link pure block>
            <img src='/static/spooky.svg' alt='logo' style={{ fill: 'blue' }} />
          </Link>
        </NextLink>
      </div>
      <nav>
        <ul>
          <li>
            <NextLink href='/cart'>
              <Link
                style={{
                  alignItems: 'center',
                }}
                pure
                block
                underline={isActive('/cart')}
              >
                <ShoppingCart
                  size={25}
                  style={{ marginRight: '.5rem' }}
                  size={25}
                />
                Cart
              </Link>
            </NextLink>
            {user && (
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
                    style={{ marginRight: '.5rem' }}
                    size={25}
                  />
                  Create
                </Link>
              </NextLink>
            )}

            {user ? (
              <>
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
                      style={{ marginRight: '.5rem' }}
                      size={25}
                    />
                    Account
                  </Link>
                </NextLink>

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
                      style={{ marginRight: '.5rem' }}
                      size={25}
                    />
                    Logout
                  </Link>
                </NextLink>
              </>
            ) : (
              <>
                <NextLink href='/login'>
                  <Link
                    style={{
                      alignItems: 'center',
                    }}
                    pure
                    block
                    underline={isActive('/login')}
                  >
                    <LogIn
                      size={25}
                      style={{ marginRight: '.5rem' }}
                      size={25}
                    />
                    Login
                  </Link>
                </NextLink>

                <NextLink href='/signup'>
                  <Link
                    style={{
                      alignItems: 'center',
                    }}
                    pure
                    block
                    underline={isActive('/signup')}
                  >
                    <Edit size={25} style={{ marginRight: '.5rem' }} />
                    <p>Signup</p>
                  </Link>
                </NextLink>
              </>
            )}
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          border: 1px solid #eaeaea;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 85px;
          font-size: 1.25rem;
        }
        nav ul {
          list-style-type: none;
        }
      `}</style>
    </header>
  )
}

export default Header
