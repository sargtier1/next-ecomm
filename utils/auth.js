import Router from 'next/router'
import cookie from 'js-cookie'

export function handleLogin(token) {
  cookie.set('token', token)
  Router.push('/account')
}
