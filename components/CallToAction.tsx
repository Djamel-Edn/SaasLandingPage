"use client"
import helixImage from '@/assets/images/helix2.png'
import emojiStar from '@/assets/images/emojistar.png'
import Image from 'next/image'
import {useScroll, useTransform,motion} from "framer-motion"
import { useEffect, useRef } from 'react'
const CallToAction = () => {
  const containerRef=useRef<HTMLDivElement>(null)
  const {scrollYProgress}=useScroll({
    target:containerRef,
    offset:['start end','end end']
  })
  useEffect(()=>{

  },[])
  const translateY=useTransform(scrollYProgress,[0,1],[120,-70])
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center" ref={containerRef}>
        <div className="container max-w-xl relative ">
          <motion.div style={{translateY}} className=''>

            <Image src={helixImage} className='absolute top-6 left-[calc(100%+36px)]  ' alt=''/>
          </motion.div>
          <motion.div style={{translateY}}>

            <Image src={emojiStar} className='absolute -top-[120px] right-[calc(100%+24px)]' alt=''/>
          </motion.div>
            <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get instant access</h2>
            <p className="text-xl text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track progress,
            motivate your efforts,and celebrate your successes.
            </p>
            <form className="mt-10 flex flex-col py-2 gap-2.5 max-w-sm md:max-w-lg mx-auto sm:flex-row">
                <input type="email" placeholder="your@email.com"className="sm:flex-1 h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF]" />
                <button className="bg-white text-black h-12 rounded-lg px-5">
                Get access 
                </button>
            </form>
        </div>
    </div>
  )
}

export default CallToAction