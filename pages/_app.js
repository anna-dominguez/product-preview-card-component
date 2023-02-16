import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-creme grid h-screen place-items-center">
      <Head>
        <title>Perfume by Gabrielle Essence</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
