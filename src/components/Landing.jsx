import SlideUpText from '@/app/effects/SlideUpText'
import React, { useRef } from 'react'
import CustomBtn from './CustomBtn'
import { ArrowRight, ArrowRightCircle, Globe, Phone, Plane, PlaneIcon, SquareArrowUpRight } from 'lucide-react'
import plane from '../../public/images/plane01.jpg'
import img1 from '../../public/images/service01.png'
import Image from 'next/image'
import ScaleUpContent from '@/app/effects/ScaleUpContent'
import FadeInText from '@/app/effects/FadeInText'
import { useTransform,useScroll,motion } from 'framer-motion'

const MotionImage = motion(Image);
function Landing() {
    const imgRef=useRef(null)
      const { scrollYProgress } = useScroll({
        target: imgRef,
        offset: ["0.5 end", "start 0.3"],
      })
      const scale = useTransform(scrollYProgress, [0, 1], ["1.3", "1"])
     
  return (
    <div className='w-full min-h[100vh] container-section container mx-auto pt-[70px]'>
      <section className='my-2 w-full h-full breaker gap-4 flex flex-col-reverse md:flex-row z-10'>
        <div className="p-4 md:p-6 div bg-brand-accent rounded-2xl breaker-child w-[55%] ">
         {/* <h2 className='bebas text-footer leading-footer uppercase'> convenient
            aircraft management</h2> */} 
       <h1>
         <SlideUpText duration={0.4} delay={0.08} className=' text-neutral-900 bebas text-footer leading-footer uppercase' text={'Ready to make healthy living feel effortless?'}/>  
          
       </h1>
        <div className='flex gap-2 items-center justify-start flex-wrap my-3'>
            <CustomBtn href='#book-a-call'  className='uppercase flex justify-center items-center'>
              
              <Phone className='mr-2 w-4 h-4 text-white'/> book a call
            </CustomBtn>
            <p className='flex items-center justify-center'>take a quiz <SquareArrowUpRight className=' mx-1 w-4 h-4 text-neutral-900'/> </p>
           </div>
          </div>

       <ScaleUpContent margin='0px' once={false} duration='0.20' delay='0.08' className='relative overflow-hidden bgbrand-secondary rounded-2xl breaker-child w-[43%]'>
         <div className="relative  w-full h-full">
          {/* <Image src={plane} width={400} height={400} className='object-cover w-full h-full'/> */}
            <video
            autoPlay
            muted
            loop
            playsInline
            className="blur-x z-[5]  h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
       </ScaleUpContent>
      </section>

       <section className="my-4 w-full flex gap-4 breaker px-0 md:px-8">
  {/* LEFT CARD */}
  <div className="  flex ga-4 gap-4 md:gap-10 bg-[#50535C] rounded-2xl p-2 md:p-4 breaker-child w-[68%]">
    {/* Image stack */}
    <div ref={imgRef} className="  z-[1]  relative flex[1]  flex-shrink">
      <div  className="absolute top-0 left-0 w-[80px] md:w-[130px] h-[80px] md:h-full bg-[#45775F] rounded-lg scale-95 translate-x-4 translate-y-2 shadow-md" />
      <div className='overflow-hidden w-[80px] md:w-[130px] h-[80px] md:h-full rounded-lg shadow-lg'>
      <MotionImage style={{scale}}
        src={img1} // replace with your img1
        alt="Private Jet"
        className="relative w-full h-full   object-cover"
      />

      </div>
    </div>

    {/* Text content */}
    <div className="bgblack/25 backdrop-blur-md rounded-lg z-[2] flex  p-[6px]  flex-col justify-between flex-[1] text-white bgpink-600">
      <h1 className="text-xs md:text-para font-semibold font-body leading-snug md:max-w-[80%] w-full">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quasi repudiandae fugit!
      </h1>

      <div className="flex items-center justify-between mt-2 text-sm">
        <p className="text-gray-200 font-body text-xs md:text-[14px]">
          12834 Address <br /> State, NY
        </p>
        <div className="text-right font-body text-xs md:text-[14px]">
          <p className="font-bold">24/7</p>
          <p className="text-gray-300">Support</p>
        </div>
      </div>
    </div>
  </div>

  {/* RIGHT CARD */}
  <div className="bg-[#2B2D33] rounded-2xl p-6 flex flex-col justify-between breaker-child w-[32%] text-white">
    {/* Rating */}
    <div className="flex items-center gap-2">
      <span className="text-3xl font-bold font-body">4.98</span>
      <div className="flex flex-col">
        <div className="flex text-yellow-400 font-body">
          ★★★★★
        </div>
        <p className="text-xs text-gray-400 font-body">Based on 456 reviews</p>
      </div>
    </div>

    {/* Tags */}
    <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
      <button className="px-3 py-2 rounded-lg bg-[#3A3D45] font-body">caochesdirectory.com</button>
      <button className="px-3 py-2 rounded-lg bg-[#3A3D45] font-body">noomi.com</button>
      <button className="px-3 py-2 rounded-lg bg-[#3A3D45] font-body">google reviews</button>
      <button className="px-3 py-2 rounded-lg bg-[#3A3D45] font-body">others</button>
    </div>
  </div>
</section>


      
      </div>
  )
}

export default Landing