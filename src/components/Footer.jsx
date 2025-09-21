import SlideUpText from '@/app/effects/SlideUpText'
import React from 'react'
import CustomBtn from './CustomBtn'
import CustomArrow from './CustomArrow'
import { Facebook, FacebookIcon, Instagram, Linkedin } from 'lucide-react'

function footer() {
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
    <div className='w-full  flex gap-2 flex-col container-section container mx-auto'>

      <section className='my-4 w-full h-full gap-6 p4  border rounded-2xl  border-brand-accent'>
   <div className="flex gap-2 breaker ">
  {/* Right side - single 50% item */}
  <div className="breaker-child py-10 px-4  items-start justify-start flex flex-col gap-4  w-[60%]  ">
         {/* <SlideUpText duration={0.5} delay={0.04} className=' text-white font-body text-[40px] leading-[40px] uppercase' text={'hello@domain.com'}/>   */}
          <p  className=' text-white bebas  text-para  leading-para uppercase'>contacts</p>
         <p  className=' text-white font-body  text-para  leading-para uppercase'>n0 123 city, country</p>
        
          </div>

            <div className="breaker-child py-10 px-4  items-start justify-end flex gap-4  w-[40%]  ">
        {/* contact form */}
           <form className=" flex flex-col justify-center items-center bg-[#2B2D33] p-4 w-full rounded-xl">
      <div className="flex md:flex-row flex-col justify-between gap-2 w-full p-2 bgpink-400">
      <input placeholder='first name' className='min-w-[50%] font-body rounded-md focusoutline-none focus:outline-double focus:outline-slate-300 focus:outline-2 capitalize text-xs input -4 border-non !border-b border-b-[#5f6472] bg-[transparent] text-brand-accent' type='text'/>
      <input placeholder='last name' className='min-w-[50%]  font-body rounded-md focusoutline-none focus:outline-double focus:outline-slate-300 focus:outline-2 capitalize text-xs input -4 border-non !border-b border-b-[#5f6472] bg-[transparent] text-brand-accent' type='text'/>
    </div>
     <div className="flex justify-center gap-2 w-full p-2 bgpink-400">
      <input placeholder='email address' className='font-body focusoutline-none focus:outline-double focus:outline-slate-300 focus:outline-2 capitalize text-xs input w-full border-non !border-b border-b-[#5f6472] bg-[transparent] text-brand-accent' type='text'/>
    </div>
     <div className="flex justify-center gap-2 w-full p-2 bgpink-400">
      {/* <input placeholder='email address' className='font-body focusoutline-none focus:outline-double focus:outline-slate-300 focus:outline-2 capitalize text-xs input w-full border-non !border-b border-b-[#5f6472] bg-[transparent] text-brand-accent' type='text'/> */}
        <textarea  className='textarea bg-transparent text-white border-[#5f6472] w-full my-4 font-body text-xs min-h-[120px] max-h-[300px] focus:outline-double focus:outline-slate-300 focus:outline-2 ' placeholder='enter your message here' name='message' required/>
    </div>
    <CustomBtn>
      <p className='text-center text-xs font-body'>submit form </p>
    </CustomBtn>


      </form>
          </div>
          

</div>
  
   
  <div className="flex gap-2 breaker ">
  {/* Right side - single 50% item */}
  <div className="breaker-child  px-4  items-start justify-end md:justify-start flex   w-[68%]  ">
         <SlideUpText duration={0.5} delay={0.04} className=' text-white bebas text-[20px] md:text-[40px] leading-[40px] uppercase' text={'hello@domain.com'}/>  
          </div>
            <div className="breaker-child px-4  items-start justify-end flex w-[68%]  ">
         <SlideUpText duration={0.5} delay={0.04} className=' text-white bebas text-[20px] md:text-[40px] leading-[40px] uppercase' text={'+(234)9063260237'}/>  
          </div>
          
        

</div>

 <div className="  p-4 grid grid-cols-1 md:grid-cols-3 gap-2  w-full mdw-[50%]">
  {/* Left side - stacked items */}
       <div className={`w-full  items-start gap-2 flex`}>
         
         <p  className=' text-white font-body  text-para  leading-para uppercase'><FacebookIcon className='w-4 h-4'/></p>
         <p  className=' text-white font-body  text-para  leading-para uppercase'><Linkedin className='w-4 h-4'/></p>
         <p  className=' text-white font-body  text-para  leading-para uppercase'><Instagram className='w-4 h-4'/></p>
       

          </div>

          <div className={`w-full  -4 rounded-2xl items-end md:items-center justify-between flex gap-[2px] flex-col  borde border-brand-accent`}>

         <p  className=' text-white bebas text-para  leading-para uppercase'> Let's talk</p>
         <p  className=' text-white font-body  text-para  leading-para uppercase'> info[at]domain.com</p>

          </div>
            <div className={`w-full  -4 rounded-2xl items-end justify-between flex gap-[4px] flex-col  borde border-brand-accent`}>
         
         <p  className=' text-white bebas  text-para  leading-para uppercase'>Policies</p>
         <p  className=' text-white font-body  text-para  leading-para uppercase'>Privacy policy</p>
         <p  className=' text-white font-body  text-para  leading-para uppercase'>Terms and conditions
         </p>

          </div>
  
         
          
  </div>

  <p className='font-body text-gray-500 text-xs text-center py-4'>copyright &copy; all rights reserved {new Date().getFullYear()}</p>
      
      </section>
      </div>
  )
}

export default footer