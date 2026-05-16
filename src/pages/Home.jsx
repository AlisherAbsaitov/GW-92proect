import React from "react";

// Akbar
export default function Home() {
  const courses = [
    {
      id: 1,
      category: "Marketing",
      title: "The Ultimate Google Ads Training Course",
      price: "$100",
      author: "Jerome Bell",
      image: "home5.jpg",
      color: "bg-green-500",
    },
    {
      id: 2,
      category: "Management",
      title: "Product Management Fundamentals",
      price: "$480",
      author: "Marvin McKinney",
      image: "home6.jpg",
      color: "bg-blue-500",
    },
    {
      id: 3,
      category: "HR & Recruiting",
      title: "HR Management and Analytics",
      price: "$200",
      author: "Leslie Alexander Li",
      image: "home4.jpg",
      color: "bg-orange-400",
    },
    {
      id: 4,
      category: "Marketing",
      title: "Brand Management & PR Communications",
      price: "$530",
      author: "Kristin Watson",
      image: "home7.jpg",
      color: "bg-green-500",
    },
    {
      id: 5,
      category: "Management",
      title: "Business Development Management",
      price: "$400",
      author: "Dianne Russell",
      image: "home8.jpg",
      color: "bg-blue-500",
    },
    {
      id: 6,
      category: "Design",
      title: "Graphic Design Basic",
      price: "$500",
      author: "Guy Hawkins",
      image: "home9.jpg",
      color: "bg-pink-500",
    },
  ];

  const events = [
    {
      id: 1,
      day: "05",
      month: "August",
      time: "11:00 - 14:00",
      title:
        "Formation of the organizational structure of the company in the face of uncertainty.",
      type: "Online master-class",
    },
    {
      id: 2,
      day: "24",
      month: "July",
      time: "11:00 - 12:30",
      title: "Building a customer service department. Best Practices.",
      type: "Online lecture",
      active: true,
    },
    {
      id: 3,
      day: "16",
      month: "July",
      time: "10:00 - 13:00",
      title:
        "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
      type: "Online workshop",
    },
  ];

  return (
    <div className="w-full min-h-screen font-sans">
      <section className="bg-[#F9E3DE] px-6 md:px-20 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center text-red-500">
                ▶
              </div>
              <p className="text-sm text-gray-700">Play showreel</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#1E1E2F]">
              Enjoy studying <br />
              with Createx <br />
              Online Courses
            </h1>
            <div className="flex gap-4 mt-10">
              <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-50 duration-300">
                About us
              </button>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 duration-300">
                Explore courses
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="home1.png" alt="" className="w-full max-w-xl" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 text-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1E1E2F]">1200</h2>
            <p className="text-gray-600 mt-2">Students graduated</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#1E1E2F]">84</h2>
            <p className="text-gray-600 mt-2">Completed courses</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#1E1E2F]">16</h2>
            <p className="text-gray-600 mt-2">Qualified tutors</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#1E1E2F]">5</h2>
            <p className="text-gray-600 mt-2">Years of experience</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] px-6 md:px-20 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="home2.png" alt="" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
              Who we are
            </p>
            <h2 className="text-5xl font-bold text-[#1E1E2F] mb-8">
              Why Createx?
            </h2>
            <ul className="space-y-5 text-gray-700">
              <li className="flex gap-3">
                <span className="text-orange-500">✓</span>A fermentum in morbi
                pretium aliquam adipiscing donec tempus.
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500">✓</span>Vulputate placerat
                amet pulvinar lorem nisl.
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500">✓</span>Consequat feugiat
                habitant gravida quisque elit bibendum.
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500">✓</span>Etiam duis lobortis in
                fames ultrices commodo nibh.
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500">✓</span>Tincidunt sagittis
                neque sem ac eget.
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500">✓</span>Ultricies amet justo
                et eget quisque purus vulputate dapibus.
              </li>
            </ul>
            <button className="mt-10 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 duration-300">
              More about us
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 md:px-20 py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
          <div>
            <p className="uppercase tracking-widest text-2xl text-black mb-3 font-bold">
              Ready to learn?
            </p>
            <h2 className="text-5xl font-bold text-[#1E1E2F]">
              Featured Courses
            </h2>
          </div>
          <button className="mt-6 md:mt-0 border border-orange-500 text-orange-500 px-7 py-3 rounded-md hover:bg-orange-50 duration-300">
            View all courses
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg duration-300 flex flex-col sm:flex-row"
            >
              <div className="bg-yellow-400 flex items-center justify-center sm:w-[220px] h-[220px] sm:h-auto">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span
                  className={`${course.color} text-white text-xs px-3 py-1 rounded w-fit mb-4`}
                >
                  {course.category}
                </span>
                <h3 className="text-xl font-bold text-[#1E1E2F] leading-snug mb-4">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-orange-500 font-bold">
                    {course.price}
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500">by {course.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F9F9F9] px-6 md:px-20 py-28">
        <div className="text-center">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            Our benefits
          </p>
          <h2 className="text-5xl font-bold text-[#1E1E2F]">
            That's how we do it
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
          <button className="border border-orange-500 text-orange-500 py-4 rounded-md font-medium hover:bg-orange-50 duration-300">
            ☆ Experienced Tutors
          </button>
          <button className="border border-gray-200 text-gray-500 py-4 rounded-md hover:border-orange-300 hover:text-orange-500 duration-300">
            👍 Feedback & Support
          </button>
          <button className="border border-gray-200 text-gray-500 py-4 rounded-md hover:border-orange-300 hover:text-orange-500 duration-300">
            📚 24/7 Online Library
          </button>
          <button className="border border-gray-200 text-gray-500 py-4 rounded-md hover:border-orange-300 hover:text-orange-500 duration-300">
            💬 Community
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-20 items-center mt-24">
          <div>
            <h3 className="text-4xl font-bold text-[#1E1E2F] mb-8">
              Only practicing tutors
            </h3>
            <p className="text-gray-600 leading-8">
              Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
              dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
              mollis augue. Nunc, sodales tortor sit diam mi amet massa.
              Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
              dignissim massa ut amet. Amet enim, nisi tempus vehicula.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="home3.png" alt="" className="w-full max-w-lg" />
          </div>
        </div>
      </section>

      <section className="bg-[#FDF1E9] px-6 md:px-20 py-24">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">
            Our events
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E2F]">
            Lectures & workshops
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="text-center border-r pr-6 border-gray-100">
                  <h3 className="text-3xl font-bold text-orange-600 leading-none">
                    {event.day}
                  </h3>
                  <p className="text-sm font-semibold text-gray-800">
                    {event.month}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{event.time}</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1E1E2F] max-w-lg">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{event.type}</p>
                </div>
              </div>
              <button
                className={`px-8 py-2 rounded border transition-colors ${
                  event.active
                    ? "bg-orange-500 text-white border-orange-500"
                    : "text-orange-500 border-orange-500 hover:bg-orange-50"
                }`}
              >
                View more
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <p className="text-xl font-bold text-[#1E1E2F]">Do you want more?</p>
          <button className="bg-orange-500 text-white px-10 py-3 rounded-md hover:bg-orange-600 transition-colors">
            Explore all events
          </button>
        </div>
      </section>
      <section className="bg-white px-6 md:px-20 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
              Createx Certificate
            </p>
            <h2 className="text-5xl font-bold text-[#1E1E2F] leading-tight mb-8">
              Your expertise will <br /> be confirmed
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              We are accredited by international professional <br />{" "}
              organizations and institutes:
            </p>
            <div className="flex flex-wrap items-center gap-8 opacity-60">
              <img src="logo.png" alt="Del Mar Strategy" className="h-20" />
              <img src="logo2.png" alt="Sentinal Consulting" className="h-20" />
              <img src="logo3.png" alt="National" />
            </div>
          </div>
          <div className="relative">
            <img
              src="home10.png"
              alt="Certificate"
              className="w-full rounded shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
