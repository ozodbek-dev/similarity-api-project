import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Providers from "@/components/Providers";
import {Toaster} from "@/ui/Toast";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return<Providers>
      <Toaster position="bottom-left"/>
      <Navbar/>
      <div style={{marginTop:"6rem"}}>
          <Component {...pageProps} />
      </div>
  </Providers>
}
