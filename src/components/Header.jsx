'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CustomBtn from './CustomBtn'
import Button from './Button'
import FlipTextEffect from '@/app/effects/FlipTextEffect'

function Header() {
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
    <CustomBtn href='#book-a-call'  className='text-yellow-100 uppercase flex justify-center items-center'>         
     <FlipTextEffect className='text-white'  text='click me'/>
     </CustomBtn>
  </div>

        </div>
      </header>
    </div>
  )
}

export default Header
