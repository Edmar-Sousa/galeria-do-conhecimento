import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../components/Layout'


import { ImageContextProvider } from '../lib/ImageViewContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ImageContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ImageContextProvider>
  )
}

export default MyApp
