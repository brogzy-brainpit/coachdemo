'use client';
import Header from '@/components/Header';
import Landing from '@/components/Landing';
import dynamic from 'next/dynamic';
import Lenis from './effects/Scrolls/Lenis';
// import LocomotiveScroll from './effects/Scrolls/Locomotive';
// import ScrollBar from  './effects/Scrolls/ScrollBar';
// import LenisScroll from './effects/Scrolls/Lenis';
import Zoom from '@/components/Zoom';
import Services from '@/components/Services';
import CustomerFeedBack from '@/components/CustomerFeedBack';
import Feed from '@/components/Feed';
import CalModalInline from '@/components/CalModalInline';
import { useEffect } from 'react';
import LocomotiveScrolls from './effects/Scrolls/Locomotive';
import "locomotive-scroll/dist/locomotive-scroll.css";
import Alpha from '@/components/Alpha';
import Trends from '@/components/Trends';
import Footer from '@/components/Footer';

// const  Scene =dynamic(()=>import('@/components/3D/Scene'),{ssr:false})


export default function Home() {
//  useEffect(()=>{
   
//     (
//       async ()=>{
//         const LocomotiveScroll= (await import('locomotive-scroll')).default;
//     const locomotiveScroll = new LocomotiveScroll({
//   lenisOptions: {
//     lerp: 0.08, // super floaty
//     smoothWheel: true,
//     wheelMultiplier: 1.2,
//     duration:5.2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

//   },

// });
//       }
//     )()
//   },[])
 

  return (
    <main className='bg-neutral-800'>

<Lenis>
     <Header />
     <Landing/>
     <Services/>
     {/* <CalModalInline/> */}
     <Alpha/>
     <CustomerFeedBack/>
     <Trends/>
     <Footer/>
</Lenis>

     {/* <Feed/> */}

     {/* <Zoom/> */}
   
     
    </main>
  );
}