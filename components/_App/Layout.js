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
    const { children } = this.props
    return (
      <>
        <Head>
          <HeadContent />
          <title>ReactReserve</title>
        </Head>
        <Header />
        {this.state.loading ? (
          <main>
            <div className='loading-wrapper'>
              <Spinner size='large' />
            </div>
          </main>
        ) : (
          <main style={{ paddingTop: '1em' }}>{children}</main>
        )}
        <style jsx>{`
          .loading-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 40ch;
          }
        `}</style>
        <style jsx global>{`
          :root {
            --bodyBg: #f0f4f8;
            --progressBar: #54d1db;
          }
          body {
            background: var(--bodyBg);
            font-family: Helvetica, Sans-Serif;
            color: #444444;
            font-size: 9pt;
            background-color: #fafafa;
          }
          main {
            min-height: 65vh;
          }
        `}</style>
      </>
    )
  }
}

export default Layout
