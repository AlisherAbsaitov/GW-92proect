import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { SiUmbraco } from "react-icons/si";
import studendImg from "../assets/image.png"
import certificate from "../assets/sertificate.jpg"
import logo from "../assets/coursepage'slogo.svg"
// Abdulbosit
export default function Course() {
  const [isActive, setIsActive] = useState();
  const allCourses = [
    { id: 1, category: "Marketing", title: "The Ultimate Google Ads Training Course", price: 100, author: "Jerome Bell" },
    { id: 2, category: "Management", title: "Product Management Fundamentals", price: 480, author: "Marvin McKinney" },
    { id: 3, category: "HR & Recruiting", title: "HR Management and Analytics", price: 480, author: "Leslie Alexander Li" },
    { id: 4, category: "Marketing", title: "Brand Management & PR Communications", price: 100, author: "Kristin Watson" },
    { id: 5, category: "Design", title: "Graphic Design Basic", price: 500, author: "Guy Hawkins" },
    { id: 6, category: "Management", title: "Business Development Management", price: 400, author: "Dianne Russell" },
    { id: 7, category: "Development", title: "Full Stack Web Development Bootcamp", price: 350, author: "Robert Fox" },
    { id: 8, category: "Design", title: "UI/UX Design Fundamentals", price: 299, author: "Jenny Wilson" },
    { id: 9, category: "Marketing", title: "Social Media Marketing Mastery", price: 199, author: "Wade Warren" },
    { id: 10, category: "Finance", title: "Financial Planning & Analysis", price: 450, author: "Esther Howard" },
    { id: 11, category: "Development", title: "React & Node.js Complete Guide", price: 320, author: "Cameron Williamson" },
    { id: 12, category: "HR & Recruiting", title: "Talent Acquisition Strategy", price: 280, author: "Brooklyn Simmons" },
  ]
  const ITEMS_PER_PAGE = 6;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleCourses = allCourses.slice(0, visibleCount);
  const hasMore = visibleCount < allCourses.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, allCourses.length));
  };
  return (
    <div>
      <p className="text-xs font-semibold text-center  text-gray-600  mb-3">
        Enjoy your studying!
      </p>
      <h1 className='text-center text-[46px] font-black mb-14'>Our online courses</h1>
      <div className='flex justify-between container mx-auto px-5'>
        <ul className='flex gap-x-3'>
          <li className='py-2.5 px-5 relative hover:text-red-400 active:text-red cursor-pointer' >All <span className='text-[12px] absolute -top-1 right-0'>17</span></li>
          <li className='py-2.5 px-5 relative hover:text-red-400 active:text-red cursor-pointer' >Marketing <span className='text-[12px] absolute -top-1 right-0'>4</span></li>
          <li className='py-2.5 px-5 relative hover:text-red-400 active:text-red cursor-pointer' >Management <span className='text-[12px] absolute -top-1 right-0'>3</span></li>
          <li className='py-2.5 px-5 relative hover:text-red-400 active:text-red cursor-pointer' >HR & Recruting <span className='text-[12px] absolute -top-1 right-0'>5</span></li>
          <li className='py-2.5 px-5 relative hover:text-red-400 active:text-red cursor-pointer' >Design <span className='text-[12px] absolute -top-1 right-0'>2</span></li>
          <li className='py-2.5 px-5 relative hover:text-red-400 active:text-red cursor-pointer' >Development <span className='text-[12px] absolute -top-1 right-0'>3</span></li>
        </ul>
        <div className='flex w-78.75  border-2 border-gray-400 rounded-sm justify-between mb-6'>
          <input type="text" className='py-3 px-4' placeholder='Search course...' />
          <CiSearch className='mt-4 mr-4' />
        </div>
      </div>
      <div className='mx-auto mb-[120px] container mx-auto px-5 '>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleCourses.map((course) => (
            <div key={course.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <span className="inline-block bg-emerald-400 text-white text-xs font-semibold px-3 py-1 rounded-md mb-4">
                {course.category}
              </span>
              <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500">
                <span className="text-orange-500 font-semibold">${course.price}</span>
                {" | "}
                <span>by {course.author}</span>
              </p>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-4 h-4 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Load more
            </button>
          </div>
        )}
      </div>
      <div className='pt-[80px] pb-[100px] bg-gray-200'>
        <p className="text-xs font-semibold  text-gray-600 text-center mb-3">
          TESTIMONIALS
        </p>
        <h2 className='font-black text-[46px] text-center mb-[60px]'>What our students say</h2>
        <div className="carousel w-full ">
          <div id="slide1" className="carousel-item relative w-full">
            <div className='w-254 mx-auto flex items-centr gap-[30px] bg-white py-[64px] px-[105px] shadow-md'>
              <SiUmbraco className='text-orange-400' />
              <div>
                <div className='w-[752px] mb-[24px]'>
                  <p className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
                </div>
                <div className='flex items-center gap-2.5'>
                  <img src={studendImg} alt="" />
                  <div>
                    <p>Eleanor Pena</p>
                    <p className='text-gray-700'>Position, Course</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle hover:bg-[#FF3F3A] ">❮</a>
              <a href="#slide2" className="btn btn-circle hover:bg-[#FF3F3A] ">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className='w-254 mx-auto flex items-centr gap-[30px] bg-white py-[64px] px-[105px] shadow-md'>
              <SiUmbraco className='text-orange-400' />
              <div>
                <div className='w-[752px] mb-[24px]'>
                  <p className='text-gray-800 text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
                </div>
                <div className='flex items-center gap-2.5'>
                  <img src={studendImg} alt="" />
                  <div>
                    <p>Eleanor Pena</p>
                    <p className='text-gray-700'>Position, Course</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle hover:bg-[#FF3F3A] ">❮</a>
              <a href="#slide3" className="btn btn-circle hover:bg-[#FF3F3A] ">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className='w-254 mx-auto flex items-centr gap-[30px] bg-white py-[64px] px-[105px] shadow-md'>
              <SiUmbraco className='text-orange-400' />
              <div>
                <div className='w-[752px] mb-[24px]'>
                  <p className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
                </div>
                <div className='flex items-center gap-2.5'>
                  <img src={studendImg} alt="" />
                  <div>
                    <p>Eleanor Pena</p>
                    <p className='text-gray-700'>Position, Course</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle hover:bg-[#FF3F3A] ">❮</a>
              <a href="#slide4" className="btn btn-circle hover:bg-[#FF3F3A] ">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className='w-254 mx-auto flex items-centr gap-[30px] bg-white py-[64px] px-[105px] shadow-md'>
              <SiUmbraco className='text-orange-400' />
              <div>
                <div className='w-[752px] mb-[24px]'>
                  <p className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
                </div>
                <div className='flex items-center gap-2.5'>
                  <img src={studendImg} alt="" />
                  <div>
                    <p>Eleanor Pena</p>
                    <p className='text-gray-700'>Position, Course</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle hover:bg-[#FF3F3A] ">❮</a>
              <a href="#slide1" className="btn btn-circle hover:bg-[#FF3F3A] ">❯</a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex py-32 gap-[130px] container mx-auto px-5'>
        <div className='w-[397px]'>
          <p className="text-xs font-semibold   text-gray-600  mb-3">
            Createx Certificate
          </p>
          <h2 className='mb-12 text-[46px] font-black '>Your expertise will be confirmed</h2>
          <p className='text-[16px] font-normal mb-[32px]' >We are accredited by international professional organizations and institutes:</p>
          <ul className='flex gap-3'>
            <li><img src={logo} alt="" /></li>
            <li><img src={logo} alt="" /></li>
            <li><img src={logo} alt="" /></li>
          </ul>
        </div>
        <div className='shadow-sm'>
          <img src={certificate} className='w-[705px] h-[500px] ' alt="" />
        </div>
      </div>
      <div className="w-full text-center pt-[120px] pb-[180px]  bg-[#FEDDCF]">
        <div className='w-[810px] mx-auto'>
          <p className="text-xs font-semibold  text-gray-600  mb-3">
            Don't miss anything
          </p>
          <h2 className="text-[46px] text-center font-extrabold text-gray-900 mb-8">
            Subscribe to the Createx School announcements
          </h2>
        </div>

        <div className="flex items-center justify-center gap-6">
          <input
            type="email"
            placeholder="Your working email"
            className="py-[13px] pl-4 w-[422px] text-sm text-gray-700 bg-white rounded-md outline-none placeholder-gray-400 focus:ring-2 focus:ring-orange-400"
          />
          <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600  text-white text-sm font-semibold rounded-md "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

