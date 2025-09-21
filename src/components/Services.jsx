import SlideUpText from '@/app/effects/SlideUpText'
import React from 'react'
import ScaleUpContent from '@/app/effects/ScaleUpContent'
import FadeInText from '@/app/effects/FadeInText'
import CustomArrow from './CustomArrow'

function Services() {
  const texts=[
    {text:'Individual Coaching',
      url:'#'
    }, {text:'Group Coaching',
      url:'#'
    }, {text:'Corporate Group Coaching',
      url:'#'
    }, {text:'hybrid Group Coaching',
      url:'#'
    },
  ]
  return (
    <div className='w-full min-h[100vh] container-section container mx-auto '>

       <section className=' w-full h-full  gap-4'>
        <div className="py-10 px-4 rounded-2xl  items-start justify-start flex gap-[20px] flex-col  w-full border border-brand-accent ">
       <p className='p-[8px] text-xs font-body rounded-lg text-white bg-[#3A3D45]'>Lorem ipsum dolor sit amet consectetur.</p>
      <FadeInText className='items-cente justify-start  text-para text-brand-accent font-custom  text-center max-w-[80vw] gap-[5px] leading-none' text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus maiores asperiores ullam recusandae nisi praesentium esse, molestias et, ratione nulla, eaque voluptate qui libero earum! Laborum, quia! Dolores suscipit veniam quasi, distinctio rerum voluptate velit, molestiae officiis inventore animi iste vitae modi commodi voluptatum harum quis.'}/>
          </div>
      </section>


      <section className='my-2 w-full h-full  gap-6'>
      
  <div className="flex gap-2 breaker">
  {/* Right side - single 50% item */}
  <div className="breaker-child py-10 px-4 rounded-2xl items-start justify-between flex gap-4 flex-col  w-[50%] border border-brand-accent ">
         <SlideUpText duration={0.5} delay={0.04} 
         className=' text-white bebas text-footer leading-footer uppercase' 
         text={'Coaching Programs & methods'}/>  

              <CustomArrow/>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2  w-full md:w-[50%]">
  {/* Left side - stacked items */}
  {texts.map(({text,url},index)=>{
   if(index==1 || index==2 ){
     return (
       <ScaleUpContent margin='-10px' once={false} duration='0.40' delay='0.08'  className="w-full py-10 px-4 rounded-2xl items-start justify-between flex gap-4 flex-col  border border-brand-accent ">
         <SlideUpText duration={0.5} delay={0.04} className=' text-white bebas  text-para  leading-para uppercase' text={text}/>  

       <CustomArrow href={url}/>
          </ScaleUpContent>
    )
   }else{
     return (
       <div className="w-full py-10 px-4 rounded-2xl items-start justify-between flex gap-4 flex-col  border border-brand-accent ">
         <SlideUpText duration={0.5} delay={0.04} className=' text-white bebas text-para leading-para uppercase' text={text}/>  

             <CustomArrow href={url}/>

          </div>
    )
   }
  })}
         
          
  </div>

</div>

      </section>
      
      </div>
  )
}

export default Services