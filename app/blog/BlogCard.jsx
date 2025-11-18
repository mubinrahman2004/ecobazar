import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog, image }) => {
  return (
    <article className="group bg-white rounded-xl shadow hover:shadow-xl transition border">

      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{blog.title}</h3>

        <p className="text-gray-600 text-sm line-clamp-3 mt-2">
          {blog.body}
        </p>

        <div className="mt-4 flex justify-between items-center">

          <Link
            href={`/blog/${blog.id}`}
            className="text-blue-600 font-semibold hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>

    </article>
  );
};

export default BlogCard;
