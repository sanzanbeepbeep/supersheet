import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/LayoutNav";
import NavbarBottom from "../components/navbar/NavbarBottom";
import NavbarTop from "../components/navbar/NavbarTop";
import Main from "../components/Main";





const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>supersheet</title>
        <meta name="description" content="supersheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;700&family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <Layout>
        <NavbarTop/>
          <Layout>
            <Main/>
          </Layout>
        <NavbarBottom/>
      </Layout>
    </>
  );
};

export default Home;
