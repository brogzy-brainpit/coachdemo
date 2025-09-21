import SlideUpText from '@/app/effects/SlideUpText'
import React from 'react'
import CustomBtn from './CustomBtn'
import CustomArrow from './CustomArrow'

function CustomerFeedback() {
  const texts=[
    {text:'Stress, Anxiety & Depression',
      url:'#',background:'pink'
    }, {text:'Emotional Pain & Trauma',
      url:'#',background:'#059669'
    }, {text:'Relationship Issues',
      url:'#',background:'orange'
    }
  ]
  return (
    <div className='  w-full  flex gap-2 flex-col container-section container mx-auto'>
      <section className='my-4 w-full h-full gap-6 p4  border rounded-2xl  border-brand-accent'>
    
  <div className="flex gap-2 breaker ">
  {/* Right side - single 50% item */}
  <div className="breaker-child py-10 px-4  items-start justify-between flex gap-4 flex-col  w-[68%]  ">
        <div className='w-full md:w-[80%]'>
         <SlideUpText duration={0.5} delay={0.04} className=' text-white bebas text-footer leading-footer uppercase' text={'What can we help you with?'}/>  

        </div>
          </div>
           <div className="breaker-child py-10 px-4  items-start flex gap-4 flex-col  w-[32%]  ">
         <SlideUpText gap='4px' duration={0.5} delay={0.04} className=' text-white font-body text-para leading-para' 
         text={'Greatest gift you can give to this world and your surrounding is becoming a better version of yourself each day!'}/>  
        <CustomBtn className='flex justify-center items-center'>
             All testimonials
            </CustomBtn>
          </div>
        

</div>

 <div className=" p-4 grid grid-cols-1 md:grid-cols-3 gap-2  w-full mdw-[50%]">
  {/* Left side - stacked items */}
  {texts.map(({text,url,background},index)=>{
    return (
       <div style={{backgroundColor:background}} className={`min-h-[200px] w-full py-10 px-4 rounded-2xl items-start justify-between flex gap-4 flex-col  borde border-brand-accent`}>
         <SlideUpText duration={0.5} delay={0.04} className=' text-white bebas  text-para  leading-para uppercase' text={text}/>  

      <CustomArrow/>
          </div>
    )
  
  })}
         
          
  </div>
      
      </section>
      </div>
  )
}

export default CustomerFeedback