import Link from 'next/link'
import React from 'react'
import ArrowIcon from '@/assets/icons/arrow-w.svg'
import Image from 'next/image'
import messageIcon from '@/assets/images/message.png';
import cursorIcon from '@/assets/images/cursor.png';
import { motion } from 'framer-motion'
import { MotionDiv } from './MotionDiv';
const Hero = () => {
    return (
        <div className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-[65px] relative overflow-clip'>

            <div className='container'>
                <div className='flex items-center justify-center'>

                    <Link href='#' className='inline-flex gap-3 py-1 px-2 rounded-lg border border-white/30'>
                        <span className='bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text'>
                            Version 2.0 is here
                        </span>
                        <span className='inline-flex items-center gap-1'>
                            <span>  Read More   </span>
                            <Image src={ArrowIcon} alt='Arrow icon' className='h-4 w-4 ' />
                        </span>
                    </Link>
                </div>
                <div className='flex flex-col items-center mt-8'>
                    <div className='relative inline-flex'>
                        <h1 className='text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-center  md:px-24 px-4'>One Task <br /> at a Time</h1>
                        <MotionDiv
                            className='absolute right-[476px] top-[108px] hidden sm:inline'
                            drag
                            dragSnapToOrigin
                        >
                            <Image src={cursorIcon} alt='Cursor Icon' height={200} width={200} className='max-w-none' draggable="false" />
                        </MotionDiv>
                        <MotionDiv 
                        className='absolute top-[56px] left-[498px] hidden sm:inline' 
                        drag 
                        dragSnapToOrigin>
                        <Image src={messageIcon} alt='image' className='max-w-none' draggable='false'/>

                        </MotionDiv>
                    </div>
                    <p className='text-center text-xl mt-8 max-w-lg'>Celebrate the joy of accomplishment with an app designed to track progress,
                        motivate your efforts,and celebrate your successes.</p>
                </div>
                <div className='flex justify-center mt-8'>
                    <button className='bg-white text-black py-3 px-5 rounded-lg font-medium z-10'>Get for free</button>
                </div>
            </div>
            <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#848CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'></div>
        </div>
    )
}

export default Hero