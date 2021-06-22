import store from '../redux/store';
import Layout from '../components/Layout'
import { Provider } from 'react-redux';
import '../styles/globals.css';
import '../styles/tailwind_utilities.css';
import Head from "next/head";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from './../components/AlertTemplate';
import "mapbox-gl/dist/mapbox-gl.css";

const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AlertProvider>
  </Provider>

  </>
  );
  }

export default MyApp
