import SlideUpText from '@/app/effects/SlideUpText'
import React from 'react'
import CustomArrow from './CustomArrow'

function Trends() {
  const texts=[
    {text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate',
      url:'#',background:'pink',img:'/images/service04.png'
    }, {text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem perferendis amet',
      url:'#',background:'#059669',img:'/images/service03.png'
    }
  ]
  return (
    <div className='w-full  flex gap-2 flex-col container-section container mx-auto'>
      <section className='my-4 w-full h-full gap-6 p4  border rounded-2xl  border-brand-accent'>
    
  <div className="flex gap-2 breaker ">
  {/* Right side - single 50% item */}
  <div className="breaker-child py-10 px-4  items-start justify-between flex gap-4 flex-col  w-[74%]  ">
         <SlideUpText duration={0.5} delay={0.04} className=' text-white bebas text-footer leading-footer uppercase' text={'our customers feedback'}/>  
         <SlideUpText gap='4px' duration={0.5} delay={0.04} className=' text-white font-body text-para leading-para' 
         text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic dolor voluptas vitae et vel nam voluptate itaque, amet quae'}/>  
       
          </div>
          
        

</div>

<div className='breaker gap-4  p-4'>
<div className='breaker-child w-[50%]'>
  <div style={{backgroundColor:'green'}} className={`overflow-hidden relative min-h-[200px] w-full p-4 rounded-2xl items-start justify-end flex gap-4 flex-col  border border-brand-accent`}>
        <img src={'/images/service02.png'} className='z-[1] absolute top-0 left-0'/>
        <div className='w-full h-full absolute top-0 left-0 z-[2] bg-black/60'/>
        <div className='md:w-[70%] w-full'>
         <SlideUpText gap='4px' duration={0.5} delay={0.04} className=' z-[3] text-white bebas   text-para  leading-para uppercase' text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem perferendis amet'}/>  
          </div> 
              <CustomArrow/>

          </div>
</div>
<div className='breaker-child w-[50%]'>
   <div className=" grid grid-cols-1 md:grid-cols-2 gap-2  w-full mdw-[50%]">
  {/* Left side - stacked items */}
  {texts.map(({text,url,background,img},index)=>{
    return (
        <div style={{backgroundColor:background}} className={`overflow-hidden relative min-h-[200px] w-full p-4 rounded-2xl items-start justify-end flex gap-4 flex-col  border border-brand-accent`}>
        <img src={img} className='z-[1] absolute top-0 left-0'/>
        <div className='w-full h-full absolute top-0 left-0 z-[2] bg-black/60'/>
        <div className='md:w-[70%] w-full'>
         <SlideUpText gap='4px' duration={0.5} delay={0.04} className=' z-[3] text-white bebas   text-para  leading-para uppercase' text={text}/>  
          </div> 
       <CustomArrow/>
          </div>
    )
  
  })}
         
          
  </div>
</div>
</div>
      
      </section>
      </div>
  )
}

export default Trends