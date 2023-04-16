import '@/styles/globals.css'
import { AuthContextProvider } from '@/contexts/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'
import HeaderComp from './components/Header'
import Footer from './components/Footer'

export default function App({ Component, pageProps }) {
  return (

    <ChakraProvider>
      <AuthContextProvider>
        {/* <HeaderComp/> */}
        <Component {...pageProps} />
        {/* <Footer/> */}
      </AuthContextProvider>
    </ChakraProvider>
  );
}
