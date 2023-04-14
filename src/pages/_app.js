import '@/styles/globals.css'
import { AuthContextProvider } from '@/contexts/AuthContext'

export default function App({ Component, pageProps }) {
  return (

    <AuthProvider>
        <Component { ...pageProps } />
    </AuthProvider>
);
}
