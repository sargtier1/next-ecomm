import Head from 'next/head'

import Header from './Header'
import HeadContent from './HeadContent'

function Layout({ children }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel='stylesheet' type='text/css' href='/static/styles.css' />
        <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css'
        />
        <title>ReactReserve</title>
      </Head>
      <Header />
      <main style={{ paddingTop: '1em' }}>{children}</main>
    </>
  )
}

export default Layout
