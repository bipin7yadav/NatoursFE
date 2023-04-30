import '@/styles/globals.css'
import { AuthContextProvider } from '@/contexts/AuthContext'
import { ToursContextProvider } from '@/contexts/ToursContext'
import { ChakraProvider } from '@chakra-ui/react'
import HeaderComp from './components/Header'
import Footer from './components/Footer'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(router);
  let block = router.asPath.includes('/Login') ? "none" : "block"
  console.log(block);
  return (

    <ChakraProvider>
      <AuthContextProvider>
        <ToursContextProvider>
          <HeaderComp style={{ display: { block } }} />
          <Component {...pageProps} />
          {/* <Footer/> */}
        </ToursContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}
