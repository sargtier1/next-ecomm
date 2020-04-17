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
  Plus,
} from 'react-feather'
import { handleLogout } from '../../utils/auth'

export default function Header({ user }) {
  const isRoot = user && user.role === 'root'
  const isAdmin = user && user.role === 'admin'
  const isRootOrAdmin = isRoot || isAdmin

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
          {user ? (
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

              {isRootOrAdmin && (
                <ButtonDropdown.Item>
                  <NextLink href='/create'>
                    <a className='nav-items'>
                      <Plus size={15} /> <Spacer x={0.25} />
                      Create
                    </a>
                  </NextLink>
                </ButtonDropdown.Item>
              )}

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
            </ButtonDropdown>
          ) : (
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
            </ButtonDropdown>
          )}
        </div>
      </div>
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
