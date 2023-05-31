import ContextAPI from '@/contextAPI/ContextAPI'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ContextAPI>
    <Component {...pageProps} />
    </ContextAPI>
    )
}
