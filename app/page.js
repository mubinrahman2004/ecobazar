import Image from "next/image";
import Banner from "./component/home/Banner";
import Shiping from "./component/home/Shiping";
import PopularCatagories from "./component/home/PopularCatagories";

export default function Home() {
  return (
    <>
    <Banner/>
    <Shiping/>
    <PopularCatagories/>
    </>
  );
}
