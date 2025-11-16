import Image from "next/image";
import Banner from "./component/home/Banner";
import Shiping from "./component/home/Shiping";
import PopularCatagories from "./component/home/PopularCatagories";
import PopularProduct from "./component/home/PopularProduct";
import Meat from "./component/home/Meat";
import NewestProduct from "./component/home/NewestProduct";
import Testmonial from "./component/home/Testmonial";
import FollowInstagram from "./component/home/FollowInstagram";
import Subscribe from "./component/home/Subscribe";

export default function Home() {
  return (
    <>
    <Banner/>
    <Shiping/>
    <PopularCatagories/>
    <PopularProduct/>
    <Meat/>
    <NewestProduct/>
    <Testmonial/>
    <FollowInstagram/>
    <Subscribe/>
    </>
  );
}
