'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CustomBtn from './CustomBtn'
import Button from './Button'
import FlipTextEffect from '@/app/effects/FlipTextEffect'
import {motion } from 'framer-motion'
import { Facebook } from 'lucide-react'
import SlideUpText from '@/app/effects/SlideUpText'

function Header() {
    const [burgerMenu,setBurgerMenu] =useState(false)
  const Links=[
    {
      title:'Home',
      url:'/'
    },{
      title:'About',
      url:'/'
    },{
      title:'Services',
      url:'/'
    },{
      title:'Testimonials',
      url:'/'
    },{
      title:'Contact',
      url:'/'
    },
  ]
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const root = document.documentElement
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrollingUp(currentScrollY < lastScrollY)
      setLastScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 400)
    }

    root.style.setProperty("--anouncement-height", isScrolled ? "0px" : "40px")
    root.style.setProperty("--header-height", isScrolled ? "64px" : "80px")

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
     <div
      className={`fixed top-0 w-full z-40 transition-transform duration-500 ease-in-out ${
        !isScrollingUp && isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <header
        style={{ height: "var(--header-height)" }}
        className={`bg-red500 container-section container mx-auto transition-all items-center flex justify-center duration-500 ease-in-out border-b ${
          isScrolled
            ? " border-transparent max-h-[60px]"
            : " border-transparent"
        }`}
      >
        <div className=" shadow-lg  backdrop-blur-lg bg-brand-accent rounded-full  w-full  flex items-center justify-between py-2 px-2">
          <Link
            prefetch
            href={"/"}
            className="text-center font-custom text-2xl inline-block tracking-normal"
          >
            LOGO
          </Link>
          {/* desktop links */}
          <ul className=' hidden md:flex flex-row  gap-6 mx-auto'>
            {Links.map(({title,url})=>{
              return <Link className='font-custom text-para capitalize' href={`/${url}`}>
     <FlipTextEffect text={title}/>
     </Link>
            })}
              </ul>
          {/* desktop links end here */}
  <div className=''>
    <CustomBtn   href='#book-a-call'  className='text-yellow-100 uppercase flex justify-center items-center'>         
    <div onClick={()=>{setBurgerMenu(!burgerMenu)}}>
     <FlipTextEffect className='text-white'  text='menu'/>
    </div>
     </CustomBtn>

  </div>
        </div>
      </header>
        <MobileMenu Links={Links} burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>
    </div>
  //  <section className='w-full h-screen'>


  //  </section>
  )
}




export const menuSlide={
    initial:{
       y: '-100%',
        
    }, 
    enter:{
        y:'0%',
     transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]},

    },
     exit:{
        y:'-100%',
        transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]},

    },
}
const MobileMenu=({burgerMenu, setBurgerMenu,Links})=>{
    const textAnim={
        initial:{
           opacity: 0,
            
        }, 
        enter:{
            opacity:1,
         transition:{duration:0.5, delay:0.5, ease:[0.76, 0, 0.24, 1]},
    
        },
         exit:{
            opacity:0,
            // transition:{duration:1.5, ease:[0.76, 0, 0.24, 1]},
    
        },
    }
    return <motion.div variants={menuSlide} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" className='z-40 m[10vh] fixed items-center justify-center w-[100%] top-0 left-0 h-screen bg-black'> 

<div className='relative bg-[#45775F]  h-full w-full'>
<div className=' md:flex cursor-pointer absolute top-0 right-10 font-custom text-[40px] bebas text-red-600' onClick={(e)=>{setBurgerMenu(false)}} >
  
x
 
</div>

<div className=' bg-slate600  flex justify-center items-center flex-col  h-full'>
{Links.map(({url,title},index)=>{
  return (

  <Link href={url}>
   {/* <motion.h1  variants={textAnim} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" onClick={(e)=>{setBurgerMenu(false)}} className=' font-custom text-heading2 font-bold uppercase heading-hover'>About</motion.h1>  */}
 <SlideUpText delay={0.1*index} once={false} text={title} className=' font-custo bebas text-footer font-bold uppercase heading-footer'/>
  </Link>
  )
})}
    

</div>
</div>

    </motion.div>
}
export default Header
