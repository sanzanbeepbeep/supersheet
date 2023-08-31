import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import { Kanit } from '@next/font/google'


const kanit = Kanit({
    subsets: ['latin-ext', 'thai'],
    weight: ['400', '500', '700', '800'],
})


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={kanit.className}>
      <Component {...pageProps} />
    </main>
  )
  
};

export default MyApp;
