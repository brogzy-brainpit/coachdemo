import SlideUpText from '@/app/effects/SlideUpText'
import React from 'react'
import CustomBtn from './CustomBtn'
import { ArrowRight, ArrowRightCircle, Globe, Plane, PlaneIcon, SquareArrowUpRight } from 'lucide-react'
import plane from '../../public/images/plane01.jpg'
import img1 from '../../public/images/service01.png'
import Image from 'next/image'
import ScaleUpContent from '@/app/effects/ScaleUpContent'
import FadeInText from '@/app/effects/FadeInText'
import Link from 'next/link'
import InfiniteScrollX from '@/app/effects/InfiniteScrollX'

function Feed() {
  const texts=[
    {text:'aircraft maintainanc',
      url:'#',background:'pink'
    }, {text:' maintainance & tracking',
      url:'#',background:'#059669'
    }, {text:'aircraft & tracking',
      url:'#',background:'orange'
    }
  ]
  return (
    <div className='w-full  flex gap-2 flex-col container-section container mx-auto border rounded-2xl  border-brand-accent'>
    
<InfiniteScrollX times={3} text={' not your regular coach '} className=' text-white bebas text-[120px] leading-heading uppercase'/>
 
 <div className=" p-4 grid grid-cols-1 md:grid-cols-3 gap-2  w-full mdw-[50%]">
  {/* Left side - stacked items */}
  {texts.map(({text,url,background},index)=>{
    return (
       <div style={{backgroundColor:background}} className={` w-full py-10 px-4 rounded-2xl items-start justify-between flex gap-4 flex-col  border border-brand-accent`}>
         <SlideUpText duration={0.5} delay={0.04} className=' text-white bebas  text-para  leading-para uppercase' text={text}/>  

       <Link href={url} className='backdrop-blur-md p-[10px] text-xs font-body rounded-full text-white bg-gray-500'>
        <ArrowRight className='w-6 h-6'/>
        </Link>
          </div>
    )
  
  })}
         
          
  </div>
      
      </div>
  )
}

export default Feed