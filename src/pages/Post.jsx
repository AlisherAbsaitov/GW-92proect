import React from "react";

const relatedPosts = [
  {
    id: 1,
    category: "Design",
    date: "July 28, 2020",
    title: "What are color profiles and how they work in graphic design",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Development",
    date: "September 1, 2020",
    title: "How to choose the first programming language for a beginner",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Design",
    date: "August 8, 2020",
    title:
      "Should you choose a creative profession if you are attracted to creativity?",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
  },
];

const trending = [
  {
    id: 1,
    title: "What is traffic arbitrage and does it really make money?",
    date: "September 4, 2020",
  },
  {
    id: 2,
    title: "Start-up: how to build a team that will live longer than a year",
    date: "July 15, 2020",
  },
  {
    id: 3,
    title: "What do you want to get feedback on the product",
    date: "August 2, 2020",
  },
];

export default function BlogDetails() {
  return (
    <div className="bg-[#f7f7f7] text-gray-800">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-14">
        
        <div className="lg:col-span-2">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            HR statistics: job search, interviews, hiring and recruiting
          </h1>

          <div className="flex items-center gap-5 text-gray-500 text-sm mb-8">
            <span>August 3, 2020</span>
            <span>4 min read</span>
          </div>

          <img
            src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
            alt="blog"
            className="rounded-lg mb-10 w-full h-[420px] object-cover"
          />

          <p className="text-lg font-semibold leading-8 mb-8">
            Vulputate vitae pellentesque scelerisque luctus consequat mattis
            pellentesque dui odio. Interdum aenean sit malesuada ornare sed
            gravida rhoncus, congue.
          </p>

          <div className="space-y-6 text-gray-600 leading-8">
            <p>
              At facilisi sapien posuere eget nunc senectus proin nullam.
              Tortor senectus in et sagittis, vitae diam cras dignissim.
            </p>

            <p>
              Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci
              interdum feugiat lectus libero dui.
            </p>
          </div>

          
          <div className="border-l-4 border-red-500 pl-6 my-12">
            <p className="text-2xl font-bold leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              amet lectus quam viverra mus lobortis fermentum amet.
            </p>
          </div>

          
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-red-500">✔️</span>
              A fermentum in morbi pretium aliquam adipiscing donec tempus.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-red-500">✔️</span>
              Vulputate placerat amet pulvinar lorem nisl.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-red-500">✔️</span>
              Consequat feugiat habitant gravida quisque elit bibendum.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-red-500">✔️</span>
              Etiam duis lobortis in fames ultrices commodo nibh.
            </li>
          </ul>
        </div>

        
        <div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wide mb-5">
              Author
            </h3>

            <div className="flex gap-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="author"
                className="w-20 h-20 rounded-xl object-cover"
              />

              <div>
                <h4 className="font-bold text-lg">Kristin Watson</h4>
                <p className="text-gray-500 text-sm">
                  Curator of Marketing Course
                </p>

                <div className="flex gap-3 mt-3 text-gray-500">
                  <span>IG</span>
                  <span>TW</span>
                  <span>IN</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wide mb-5">
              Trending Articles
            </h3>

            <div className="space-y-5">
              {trending.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-100 pb-4 last:border-none"
                >
                  <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                  <h4 className="font-semibold leading-6 hover:text-red-500 cursor-pointer">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wide mb-5">
              Tags
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "#marketing",
                "#recruiting",
                "#coding",
                "#learning",
                "#HR",
                "#self-development",
              ].map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-lg text-sm border transition ${
                    tag === "#coding"
                      ? "bg-red-500 text-white border-red-500"
                      : "border-gray-300 hover:border-red-400"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-[#ececec] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="newsletter"
              className="w-72 mx-auto"
            />
          </div>

          <div>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">
              Want to get the best articles weekly? Subscribe to our newsletter!
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your working email"
                className="flex-1 px-5 py-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-lg font-semibold">
                Subscribe
              </button>
            </div>

            <label className="flex items-center gap-3 mt-5 text-sm text-gray-600">
              <input type="checkbox" className="accent-red-500" />
              I agree to receive communications
            </label>
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="uppercase text-sm font-bold text-gray-500 mb-3">
          Our Blog
        </p>

        <h2 className="text-5xl font-extrabold mb-14">
          You may also like
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold leading-8 mb-4">
                  {post.title}
                </h3>

                <button className="text-red-500 font-semibold hover:underline">
                  Read →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}