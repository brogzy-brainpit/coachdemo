import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function FadeInText({text,className='gap-[5px]'}) {
    const textRef2=useRef(null)
     const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  // const secondPara= "How i can Help?".split(" ")
    const secondPara2= text.split(" ")
    const opacity = useTransform(scrollYProgress, [0, 1], ["0", "1"])
   const {scrollYProgress:ss}= useScroll({
      target:textRef2,
      offset:["0.6 end",'end 0.8']
    })
    return (
        <div className='flex justify-center text-center'>
            <h1 ref={textRef2} once={true}  className={`${className}    flex flex-wrap`}>
{secondPara2.map((word,i)=>{
    var start= i/secondPara2.length;
    var end= start+ (1/secondPara2.length);
    return <Word key={i} range={[start,end]} word={word} progress={ss}/>
  })}
</h1>
        </div>
    )
}

const Word=({word,progress,range})=>{
    const textOpacity= useTransform(progress,range,[0,1])
    return(
  <span className='relative font-custom text-center flex justify-center'>
    <span style={{opacity:0.09}}   className='mr-[1px] absolute text-center flex justify-center' >{word}</span>
    <motion.span style={{opacity:textOpacity}}   className='mr-[1px]' >{word}</motion.span>
  
  </span>
    )
  }
