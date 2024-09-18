import Image from 'next/image'
import React from 'react'
import acmeLogo from '@/assets/images/acme.png'
import quantumLogo from '@/assets/images/quantum.png'
import echoLogo from '@/assets/images/echo.png'
import celestialLogo from '@/assets/images/celestial.png'
import pulseLogo from '@/assets/images/pulse.png'
import apexLogo from '@/assets/images/apex.png'
import { MotionDiv } from './MotionDiv'
const images = [acmeLogo, quantumLogo, echoLogo, celestialLogo, pulseLogo, apexLogo]
const LogoTicker = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
      <div className='container'>
        <h2 className='text-xl text-center text-white/80'>Trusted by the world&apos;s most innovative teams</h2>
        <div className='overflow-hidden mt-8 before:content-[""] after:content-[""] before:z-10 before:absolute relative after:absolute before:h-full after:h-full before:w-5 after:w-5  after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]'>
          <MotionDiv initial={{translateX:0}} animate={{translateX:"-50%"}} transition={{duration:12,ease:"linear",repeat:Infinity}}
           className='flex gap-4 sm:gap-16  pr-16'>
            {images.map((image, index) => (
              <Image src={image} alt={`${image}Logo`} key={index} className='flex-none h-8 w-auto' />
            ))}
            {images.map((image, index) => (
              <Image src={image} alt={`${image}Logo`} key={index} className='flex-none h-8 w-auto' />
            ))}
          </MotionDiv>
        </div>
      </div>
    </div>
  )
}

export default LogoTicker