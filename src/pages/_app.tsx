import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import { Kanit } from '@next/font/google'
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";



const kanit = Kanit({
    subsets: ['latin-ext', 'thai'],
    weight: ['400', '500', '700', '800'],
})


const MyApp: AppType = ({ Component, pageProps }:AppProps) => {
  return (
    <main className={kanit.className}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  )
  
};

export default MyApp;
