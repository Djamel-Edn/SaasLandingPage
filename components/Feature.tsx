"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import ecosystemIcon from '@/assets/icons/ecosystem.svg'
import { MotionDiv } from './MotionDiv'
import { useMotionTemplate, useMotionValue } from 'framer-motion'
const Feature = ({title,description}:{title:string,description:string}) => {
    const border = useRef<HTMLDivElement>(null)
    const offsetX=useMotionValue(-100)
    const offsetY=useMotionValue(-100)
    const maskImage=useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px ,black,transparent)`
    useEffect(() => {
        const updateMousePosition=(e:MouseEvent)=>{
            if (!border.current) return;
            const rect=border.current.getBoundingClientRect()
             offsetX.set(e.clientX-rect?.x)
             offsetY.set(e.clientY-rect?.y)
        }
        window.addEventListener('mousemove',updateMousePosition)
        return()=>{
            removeEventListener('mousemove',updateMousePosition)    
        }
    }, [offsetX,offsetY])
  return (
    <div  className='border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative'>
        <MotionDiv className='absolute inset-0 border-2 border-purple-400 rounded-xl' style={{maskImage:maskImage}} ref={border}> 

        </MotionDiv>
    <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg '>
        <Image src={ecosystemIcon} alt='ecosystem'/>
    </div>
<h3 className='mt-6 font-bold'>{title}</h3>

<p className='mt-2 text-white/70 '>{description}</p>
</div>
  )
}

export default Feature