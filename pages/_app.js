import App from 'next/app'
import Layout from '../components/_App/Layout'
import { parseCookies } from 'nookies'
import { redirectUser } from '../utils/auth'
import baseUrl from '../utils/baseUrl'
import axios from 'axios'

class MyApp extends App {
  // merges props from custom app and individual page components
  static async getInitialProps({ Component, ctx }) {
    //
    const { token } = parseCookies(ctx)

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    if (!token) {
      const isProtectedRoute =
        ctx.pathname === '/account' || ctx.pathname === '/create'
      if (isProtectedRoute) {
        redirectUser(ctx, '/login')
      }
    } else {
      try {
        const payload = { headers: { Authorization: token } }
        const url = `${baseUrl}/api/account`
        const res = await axios.get(url, payload)
        const user = res.data
        pageProps.user = user
      } catch (e) {
        console.error('Error getting user', e)
      }
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
