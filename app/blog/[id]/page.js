import Image from "next/image";


export default async function BlogDetails({ params }) {
  const { id } =await params;
  console.log(params);
  

  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "no-store",
  });
  const post = await res.json();
  console.log(post);
  

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-3xl px-4">
       
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          {post.body}
        </p>
      </div>
    </section>
  );
}
