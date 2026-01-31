import React from "react";
import MeatItem from "./MeatItem";

const Meat = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-1">
          <MeatItem />
          <MeatItem />
          <MeatItem />
        </div>
       
      </div>
      
    </section>
  );
};

export default Meat;
