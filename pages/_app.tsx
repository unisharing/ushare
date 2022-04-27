import '../styles/globals.css'
import type { AppProps } from 'next/app'
//add some comments in my app
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
