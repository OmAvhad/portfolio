import Layout from '../components/layout'
import 'leaflet/dist/leaflet.css';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}