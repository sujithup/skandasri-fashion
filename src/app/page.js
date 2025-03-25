import Header from "./components/Navbar/header";
import Hero from "./components/Home/hero";
import Discounts from "./components/Discount/discount";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import Footbar from "./components/Footbar/footbar";
import CopyRight from "./components/Footbar/copyright";
import Categories from "./components/Footbar/categories";
import WomenCategories from "./components/Categories/womenCategories";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Discounts />
      <NewArrivals />
      <WomenCategories/>
      <Footbar />
      <CopyRight />
    </>
  );
}
