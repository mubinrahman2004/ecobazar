import Image from "next/image";
import React from "react";
import popular from "../../../public/popularcatagori.png";

const PopularCatagories = () => {
  return (
    <section>
      <div className="container">
        <div className=''>
          <Image src={popular} alt="popular" />
          <p className="text-base font-sans font-medium px-10"> Vegetables</p>
        </div>
      </div>
    </section>
  );
};

export default PopularCatagories;
