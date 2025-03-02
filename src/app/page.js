import Header from "./components/Navbar/header";
import Hero from "./components/Home/hero";
import Discounts from "./components/Discount/discount";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import Footbar from "./components/Footbar/footbar";
import CopyRight from "./components/Footbar/copyright";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Discounts />
      <NewArrivals />
      <Footbar />
      <CopyRight />
    </>
  );
}
