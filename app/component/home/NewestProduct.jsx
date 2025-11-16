import ProductCard from "./ProductCard";

const NewestProduct = () => {
  const products = [
    {
      id: 1,
      title: "Green Chili",
      price: 14.99,
      image: "/chili.png",
    },
    {
      id: 2,
      title: "Green Apple",
      price: 14.99,
      image: "/apple.png",
    },
    {
      id: 3,
      title: "patakofi",
      price: 14.99,
      image: "/patakofi.png",
    },
    {
      id: 4,
      title: "vutta",
      price: 14.99,
      image: "/vutta.png",
    },
    {
      id: 5,
      title: "pescicum",
      price: 14.99,
      image: "/pescicum.png",
    },
  ];

  return (
  <section className="py-5">
     <div className="container ">
      <h2 className="text-3xl font-semibold font-sans py-3">Newest Products</h2>
     <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
   </div>
  </section>
  );
};


export default NewestProduct