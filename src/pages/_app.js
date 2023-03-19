import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/globals.css'
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider> 
      <ToastContainer />
      <Component {...pageProps} />
    </AuthProvider>
  )
    
     
  
}
