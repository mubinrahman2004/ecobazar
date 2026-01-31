import Image from "next/image";
import React from "react";
import Instagram from "../../../public/instagram.png";

const FollowInstagram = () => {
 
  const instagramPosts = [
    { id: 1, alt: "Instagram post 1" },
    { id: 2, alt: "Instagram post 2" },
    { id: 3, alt: "Instagram post 3" },
    { id: 4, alt: "Instagram post 4" },
    { id: 5, alt: "Instagram post 5" },
    { id: 6, alt: "Instagram post 6" },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              Follow us on Instagram
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="aspect-square relative group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={Instagram}
                  alt={post.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowInstagram;
