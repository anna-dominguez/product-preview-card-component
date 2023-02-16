import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-creme grid h-screen place-items-center">
      <Component {...pageProps} />
    </div>
  )
}
