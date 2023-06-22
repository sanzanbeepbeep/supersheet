import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/LayoutNav";
import NavbarTop from "../components/navbar/NavbarTop";
import Registerbox from "../components/register/Registerbox";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>supersheet</title>
        <meta name="description" content="supersheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <NavbarTop/>
          <Layout>
            <Registerbox/>
          </Layout>
      </Layout>
    </>
  );
};

export default Home;
