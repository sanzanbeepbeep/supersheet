import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/LayoutNav";
import NavbarTop from "../components/navbar/NavbarTop";
import Toptopic from "../components/market/Toptopic";
import Searchbar from "../components/market/Searchbar";
import Card from "../components/Cardshow/Showitems";


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
            <Toptopic/>
            <Searchbar/>
          </Layout>
      </Layout>
    </>
  );
};

export default Home;
