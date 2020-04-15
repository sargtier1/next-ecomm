import NextLink from 'next/link'
import { Text, ButtonDropdown, Spacer, Link } from '@zeit-ui/react'
import {
  Box,
  ShoppingCart,
  User,
  PlusSquare,
  LogIn,
  LogOut,
  Edit,
} from 'react-feather'
import ToggleTheme from './toggleTheme'
import { handleLogout } from '../../utils/auth'

export default function Header({ user }) {
  const isRoot = user && user.role === 'root'
  const isAdmin = user && user.role === 'admin'
  const isRootOrAdmin = isRoot || isAdmin

  console.log(user)
  return (
    <header>
      <div className='section-wrapper'>
        <div className='center'>
          <NextLink href='/'>
            <a>
              <Box size={45} />
            </a>
          </NextLink>
        </div>
        <div className='center'>
          <ButtonDropdown>
            <ButtonDropdown.Item main>Menu</ButtonDropdown.Item>
            <ButtonDropdown.Item>
              <NextLink href='/cart'>
                <a className='nav-items'>
                  <ShoppingCart size={15} /> <Spacer x={0.25} />
                  Cart
                </a>
              </NextLink>
            </ButtonDropdown.Item>

            <ButtonDropdown.Item>
              <NextLink href='/create'>
                <a className='nav-items'>
                  <PlusSquare size={15} /> <Spacer x={0.25} />
                  Create
                </a>
              </NextLink>
            </ButtonDropdown.Item>

            <ButtonDropdown.Item>
              <NextLink href='/account'>
                <a className='nav-items'>
                  <User size={15} /> <Spacer x={0.25} />
                  Account
                </a>
              </NextLink>
            </ButtonDropdown.Item>

            <ButtonDropdown.Item>
              <a onClick={handleLogout} className='nav-items'>
                <LogOut size={15} /> <Spacer x={0.25} />
                Logout
              </a>
            </ButtonDropdown.Item>

            <ButtonDropdown.Item>
              <NextLink href='/login'>
                <a className='nav-items'>
                  <LogIn size={15} /> <Spacer x={0.25} />
                  Login
                </a>
              </NextLink>
            </ButtonDropdown.Item>

            <ButtonDropdown.Item>
              <NextLink href='/signup'>
                <a className='nav-items'>
                  <Edit size={15} /> <Spacer x={0.25} />
                  Signup
                </a>
              </NextLink>
            </ButtonDropdown.Item>

            <ButtonDropdown.Item>
              <ToggleTheme />
            </ButtonDropdown.Item>
          </ButtonDropdown>
          {/* 
          <NextNextLink href='/cart'>
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
          {isRootOrAdmin && (
            <li>
              <NextLink href='/create'>
                <Link
                  style={{
                    alignItems: 'center',
                    color: 'black',
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
                      color: 'black',
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
                <Link
                  style={{
                    alignItems: 'center',
                    color: 'black',
                  }}
                  pure
                  block
                  underline={isActive('/logout')}
                  onClick={handleLogout}
                >
                  <LogOut
                    size={25}
                    style={{ marginRight: '.5rem', color: 'black' }}
                    size={25}
                  />
                  <p>Logout</p>
                </Link>
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
          )} */}
        </div>
      </div>
      <div className='section-wrapper nav-content'></div>
      <style jsx>{`
        .nav-items {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .section-wrapper {
          display: flex;
          justify-content: space-between;
          margin: 1rem;
        }
        .nav-content {
          width: 100%;
          height: 100%;
        }
        header {
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </header>
  )
}
