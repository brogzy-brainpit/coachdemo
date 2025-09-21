import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CustomArrow({href="/"}) {
  return (
   <Link href={href} className='z-[3] backdrop-blur-md p-[10px] text-xs font-body rounded-full text-white bg-gray-500'>
        <ArrowRight className='w-6 h-6'/>
        </Link>
  )
}

export default CustomArrow