import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/small.png'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import img13 from '../assets/img13.png'
import img14 from '../assets/img14.png'
import img15 from '../assets/img15.png'
import img16 from '../assets/img16.png'
import img17 from '../assets/img17.png'
import img18 from '../assets/img18.png'
import img19 from '../assets/img19.png'
import img20 from '../assets/img20.png'
import img21 from '../assets/img21.png'
import { FaArrowRightLong } from 'react-icons/fa6'




// Saidalo
export default function About() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between items-center mb-[180px]'>
        <div className='w-[615px]'>
          <h2 className='text-[16px] font-bold mb-[8px] '>About us</h2>
          <h1 className='text-[#1E212C] font-black text-[46px] mb-[48px] '>Createx Online School</h1>
          <h3 className='text-[20px] font-bold mb-[24px] '>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</h3>
          <p className='text-[16px] mb-[60px]'>We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.</p>
          <div className='flex gap-6'  >
            <button className='border-2 font-bold border-[#F75E05] text-[#F75E05] px-10 text-[16px] py-3 rounded-lg '>
              Explore events
            </button>
            <button className='border-2 bg-[#F75E05] text-white px-10 py-3 rounded-lg font-bold '>
              Browse courses
            </button>
          </div>
        </div>
        <div>
          <img className='w-[465px] h-[400px] mx-w ' src={img1} alt="human" />
        </div>
      </div>
      <div className='mb-[180px]'>
        <div className='flex gap-4 items-center mb-[32px]'>
          <img className='w-[52px] y-[52px] ' src={img2} alt="icon" />
          <p className='font-bold text-[14px]'>Watch Video</p>
        </div>
        <div className='flex gap-[135px] items-center'>
          <div>
            <img src={img3} alt="woman" />
          </div>
          <div className=''>
            <span className='flex items-center gap-4'>
              <p className='text-[48px] font-black text-[#FF3F3A] '>1200</p>
              <p className='text-[18px] font-bold'>students graduated</p>
            </span >
            <span className='flex items-center gap-4'>
              <p className='text-[48px] font-black text-[#FF3F3A] '>84</p>
              <p className='text-[18px] font-bold'>completed courses</p>
            </span>
            <span className='flex items-center gap-4'>
              <p className='text-[48px] font-black text-[#FF3F3A] '>16</p>
              <p className='text-[18px] font-bold'>qualified tutors</p>
            </span>
            <span className='flex items-center gap-4'>
              <p className='text-[48px] font-black text-[#FF3F3A] '>5</p>
              <p className='text-[18px] font-bold'>years of experience</p>
            </span>
          </div>
        </div>
      </div>
      <div className='py-16 px-8 mb-[180px]'>
        <div className='text-center mb-12'>
          <p className='text-[16px] font-bold tracking-widest uppercase'>We always stand for</p>
          <h2 className='text-[46px] font-black mt-2'>Our core values</h2>
        </div>
        <div className='flex justify-center gap-x-[120px]'>

          <div className='flex flex-col items-center max-w-[220px] text-center'>
            <img src={img4} alt='icon1' className='w-12 h-12 mb-6' />
            <h3 className='text-[20px] font-bold mb-2'>Structured Approach</h3>
            <p className='text-[16px]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.</p>
          </div>

          <div className='flex flex-col items-center max-w-[220px] text-center'>
            <img src={img5} alt='icon2' className='w-12 h-12 mb-6' />
            <h3 className='text-[20px] font-bold mb-2'>Professional Feedbacks</h3>
            <p className='text-[16px]'>Culpa nostrud commodo ea consequat reprehenderit aliquip.</p>
          </div>

          <div className='flex flex-col items-center max-w-[220px] text-center'>
            <img src={img6} alt='icon3' className='w-12 h-12 mb-6' />
            <h3 className='text-[20px] font-bold mb-2'>Efficiency</h3>
            <p className='text-[16px]'>Viverra scelerisque consequat net. Adipisicing esse consequat.</p>
          </div>

          <div className='flex flex-col items-center max-w-[220px] text-center'>
            <img src={img7} alt='icon4' className='w-12 h-12 mb-6' />
            <h3 className='text-[20px] font-bold mb-2'>Flexible Shedule</h3>
            <p className='text-[16px]'>Aute eiusmod dolore dolore deserunt veniam ad deserunt.</p>
          </div>
        </div>
      </div>
      <div class="text-center mb-12">
        <p class="text-[14px] font-bold  mb-3">OUR MAIN DIRECTIONS</p>
        <h2 class="text-[46px] font-black">What do we teach</h2>
      </div>
      <div class="grid grid-cols-3 gap-6">
        <div class="border border-[#E5E8ED] rounded-lg ">
          <img src={img9} alt="Marketing" class="w-full h-[200px] object-cover" />
          <div class="p-6">
            <button class="bg-[#03CEA4] px-3 py-[3px] text-white text-[13px] rounded-[3px] font-semibold mb-4">Marketing</button>
            <p class="text-[#787A80] text-[16px] mb-5 ">Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
            <div class="flex gap-[10px] items-center ">
              <p class="text-[#1E212C] font-semibold text-[16px]">Check courses</p>
              <FaArrowRightLong color='#FF3F3A' size={18} />
            </div>
          </div>
        </div>
        <div class="border border-[#E5E8ED] rounded-lg ">
          <img src={img10} alt="Management" class="w-full h-[200px] object-cover" />
          <div class="p-6">
            <button class="bg-[#4285F4] px-3 py-[3px] text-white text-[13px] rounded-[3px] font-semibold mb-4">Management</button>
            <p class="text-[#787A80] text-[16px] mb-5 ">Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
            <div class="flex gap-[10px] items-center ">
              <p class="text-[#1E212C] font-semibold text-[16px]">Check courses</p>
              <FaArrowRightLong color='#FF3F3A' size={18} />
            </div>
          </div>
        </div>
        <div class="border border-[#E5E8ED] rounded-lg ">
          <img src={img11} alt="HR & Recruting" class="w-full h-[200px] object-cover" />
          <div class="p-6">
            <button class="bg-[#F75E05] px-3 py-[3px] text-white text-[13px] rounded-[3px] font-semibold mb-4">HR & Recruting</button>
            <p class="text-[#787A80] text-[16px] mb-5 ">Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
            <div class="flex gap-[10px] items-center ">
              <p class="text-[#1E212C] font-semibold text-[16px]">Check courses</p>
              <FaArrowRightLong color='#FF3F3A' size={18} />
            </div>
          </div>
        </div>
        <div class="border border-[#E5E8ED] rounded-lg ">
          <img src={img12} alt="Design" class="w-full h-[200px] object-cover" />
          <div class="p-6">
            <button class="bg-[#FF3F3A] px-3 py-[3px] text-white text-[13px] rounded-[3px] font-semibold mb-4">Design</button>
            <p class="text-[#787A80] text-[16px] mb-5 ">Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
            <div class="flex gap-[10px] items-center ">
              <p class="text-[#1E212C] font-semibold text-[16px]">Check courses</p>
              <FaArrowRightLong color='#FF3F3A' size={18} />
            </div>
          </div>
        </div>
        <div class="border border-[#E5E8ED] rounded-lg overflow-hidden">
          <img src={img13} alt="Development" class="w-full h-[200px] object-cover" />
          <div class="p-6">
            <button class="bg-[#7B61FF] px-3 py-[3px] text-white text-[13px] rounded-[3px] font-semibold mb-4">Development</button>
            <p class="text-[#787A80] text-[16px] mb-5 ">Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
            <div class="flex gap-[10px] items-center ">
              <p class="text-[#1E212C] font-semibold text-[16px]">Check courses</p>
              <FaArrowRightLong color='#FF3F3A' size={18} />


            </div>
          </div>
        </div>
        <div class="border border-[#E5E8ED] rounded-lg flex items-center justify-center py-20 px-8">
          <p class="text-[20px] font-bold text-center text-[#1E212C]">New studying program coming soon...</p>
        </div>
      </div>
      <div class="container mx-auto py-16 px-4 mt-[180px]">
        <div class="flex justify-between items-center gap-16 ">


          <div class="flex-1  ">
            <p class="text-[13px] font-bold tracking-widest uppercase text-[#1E212C] mb-3">Studying process</p>
            <h2 class="text-[46px] font-black text-[#1E212C] mb-12">That's how we do it</h2>


            <div class="relative">

              <div class="absolute left-[5px] top-2 bottom-2 w-[1px] bg-[#E5E8ED]"></div>


              <div class="flex gap-8 mb-10 relative">
                <div class="w-[11px] h-[11px] rounded-full bg-[#FF3F3A] mt-1 shrink-0 z-10"></div>
                <div>
                  <p class="text-[11px] font-bold tracking-widest uppercase text-[#787A80] mb-1">Step 1</p>
                  <h3 class="text-[20px] font-bold text-[#1E212C] mb-2">Watching online video lectures</h3>
                  <p class="text-[15px] text-[#787A80] leading-relaxed">Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
                </div>
              </div>


              <div class="flex gap-8 mb-10 relative">
                <div class="w-[11px] h-[11px] rounded-full bg-[#FF3F3A] mt-1 shrink-0 z-10"></div>
                <div>
                  <p class="text-[11px] font-bold tracking-widest uppercase text-[#787A80] mb-1">Step 2</p>
                  <h3 class="text-[20px] font-bold text-[#1E212C] mb-2">Passing test</h3>
                  <p class="text-[15px] text-[#787A80] leading-relaxed">Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam.</p>
                </div>
              </div>


              <div class="flex gap-8 mb-10 relative">
                <div class="w-[11px] h-[11px] rounded-full bg-[#FF3F3A] mt-1 shrink-0 z-10"></div>
                <div>
                  <p class="text-[11px] font-bold tracking-widest uppercase text-[#787A80] mb-1">Step 3</p>
                  <h3 class="text-[20px] font-bold text-[#1E212C] mb-2">Curator's feedback</h3>
                  <p class="text-[15px] text-[#787A80] leading-relaxed">Eget amet, enim pharetra leo egestas nisl, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis.</p>
                </div>
              </div>


              <div class="flex gap-8 relative">
                <div class="w-[11px] h-[11px] rounded-full bg-[#FF3F3A] mt-1 shrink-0 z-10"></div>
                <div>
                  <p class="text-[11px] font-bold tracking-widest uppercase text-[#787A80] mb-1">Step 4</p>
                  <h3 class="text-[20px] font-bold text-[#1E212C] mb-2">Corrections if needed</h3>
                  <p class="text-[15px] text-[#787A80] leading-relaxed">Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="shrink-0">
            <img src={img14} alt="Student" class="w-[525px] h-[620px] object-cover" />
          </div>
        </div>
      </div>
      <div class="container mx-auto py-16 px-4 mb-[180px] ">
        <div class="text-center mb-12">
          <p class="text-[13px] font-bold tracking-widest uppercase text-[#1E212C] mb-3">Best tutors are all here</p>
          <h2 class="text-[46px] font-black text-[#1E212C]">Meet our team</h2>
        </div>
     

  
    <div class="flex flex-wrap gap-6 justify-center">

      <div class="text-center">
        <div class="w-[285px] h-[340px] bg-[#FFC800] rounded-lg overflow-hidden mb-4 flex items-end justify-center">
          <img src={img15} alt="Dianne Russell" class="w-[245px] h-[320px] object-contain" />
        </div>
        <h3 class="text-[18px] font-bold text-[#1E212C]">Dianne Russell</h3>
        <p class="text-[14px] text-[#787A80]">Founder and CEO</p>
      </div>

  
      <div class="text-center">
        <div class="w-[285px] h-[340px] bg-[#FFC800] rounded-lg overflow-hidden mb-4 flex items-end justify-center">
          <img src={img16} alt="Jerome Bell" class="w-[245px] h-[320px] object-contain" />
        </div>
        <h3 class="text-[18px] font-bold text-[#1E212C]">Jerome Bell</h3>
        <p class="text-[14px] text-[#787A80]">Founder and Program Director</p>
      </div>

    
      <div class="text-center">
        <div class="w-[285px] h-[340px] bg-[#FFC800] rounded-lg overflow-hidden mb-4 flex items-end justify-center">
          <img src={img17} alt="Kristin Watson" class="w-[245px] h-[320px] object-contain" />
        </div>
        <h3 class="text-[18px] font-bold text-[#1E212C]">Kristin Watson</h3>
        <p class="text-[14px] text-[#787A80]">Marketer, Curator of Marketing Course</p>
      </div>

    
      <div class="text-center">
        <div class="w-[285px] h-[340px] bg-[#FFC800] rounded-lg overflow-hidden mb-4 flex items-end justify-center">
          <img src={img18} alt="Marvin McKinney" class="w-[245px] h-[320px] object-contain" />
        </div>
        <h3 class="text-[18px] font-bold text-[#1E212C]">Marvin McKinney</h3>
        <p class="text-[14px] text-[#787A80]">PM, Curator of Management Course</p>
      </div>

      <div class="text-center">
        <div class="w-[285px] h-[340px] bg-[#FFC800] rounded-lg overflow-hidden mb-4 flex items-end justify-center">
          <img src={img19} alt="Leslie Alexander Li" class="w-[245px] h-[320px] object-contain" />
        </div>
        <h3 class="text-[18px] font-bold text-[#1E212C]">Leslie Alexander Li</h3>
        <p class="text-[14px] text-[#787A80]">Curator of HR & Recruting Course</p>
      </div>

     
      <div class="text-center">
        <div class="w-[285px] h-[340px] bg-[#FFC800] rounded-lg overflow-hidden mb-4 flex items-end justify-center">
          <img src={img20} alt="Kathryn Murphy" class="w-[245px] h-[320px] object-contain" />
        </div>
        <h3 class="text-[18px] font-bold text-[#1E212C]">Kathryn Murphy</h3>
        <p class="text-[14px] text-[#787A80]">Analyst and Marketing specialist</p>
      </div>

     
      <div class="text-center">
        <div class="w-[285px] h-[340px] bg-[#FFC800] rounded-lg overflow-hidden mb-4 flex items-end justify-center">
          <img src={img21} alt="Brooklyn Simmons" class="w-[245px] h-[320px] object-contain" />
        </div>
        <h3 class="text-[18px] font-bold text-[#1E212C]">Brooklyn Simmons</h3>
        <p class="text-[14px] text-[#787A80]">Curator of Development Course</p>
      </div>

   
      <div class="text-center">
        <div class="w-[285px] h-[340px] bg-[#FFC800] rounded-lg overflow-hidden mb-4 flex items-end justify-center">
          <img src={img15} alt="Cody Fisher" class="w-[245px] h-[320px] object-contain" />
        </div>
        <h3 class="text-[18px] font-bold text-[#1E212C]">Cody Fisher</h3>
        <p class="text-[14px] text-[#787A80]">UX Designer, Curator of Design Course</p>
      </div>

    </div>
  </div>
    </div>


  )
}
