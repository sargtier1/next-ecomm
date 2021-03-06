import Router from 'next/router'
import Head from 'next/head'

import Header from './Header'
import HeadContent from './HeadContent'

import { Spinner } from '@zeit-ui/react'

class Layout extends React.Component {
  state = {
    loading: false,
  }

  componentDidMount() {
    Router.onRouteChangeStart = () => {
      this.setState({ loading: true })
    }
    Router.onRouteChangeComplete = () => {
      this.setState({ loading: false })
    }
    Router.onRouteChangeError = () => {
      this.setState({ loading: false })
    }
  }

  render() {
    const { children, user } = this.props

    return (
      <>
        <Head>
          <HeadContent />
          <title>Next Shop</title>
        </Head>
        <Header user={user} />
        {this.state.loading ? (
          <main className='loading-wrapper'>
            <Spinner size='large' />
          </main>
        ) : (
          <main style={{ paddingTop: '1em' }}>{children}</main>
        )}
        <style jsx>{`
          .loading-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
        <style jsx global>{`
          :root {
            --bodyBg: #f0f4f8;
            --progressBar: #54d1db;
          }
          main {
            min-height: 65vh;
          }
          .center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </>
    )
  }
}

export default Layout
