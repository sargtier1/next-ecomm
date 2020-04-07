import Router from 'next/router'
import Head from 'next/head'

import Header from './Header'
import HeadContent from './HeadContent'

import { Loading } from '@zeit-ui/react'

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
            <Loading>Loading</Loading>
          </main>
        ) : (
          <main style={{ paddingTop: '1em' }}>{children}</main>
        )}
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

          #menu {
          }
        `}</style>
      </>
    )
  }
}

export default Layout
