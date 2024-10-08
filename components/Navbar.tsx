"use client"
import React, { useState } from 'react'
import logoImage from '@/assets/images/logosaas.png'
import menuIcon from '@/assets/icons/menu.svg'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='bg-black'>
      <div className='px-4 '>
        <div className='py-4 flex justify-between'>
          <div className='relative'>
            <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md'></div>
            <Image src={logoImage} alt='Saas logo' className='h-12 w-12 relative' />
          </div>

      
          

          {/* Mobile Menu Animation */}
          <motion.div
            initial={{ x: 200, opacity: 0.4 }}
            animate={{ x: showMenu ? 0 : 200, opacity: showMenu ? 1 : 0.4 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`${showMenu ? 'block' : 'hidden'} sm:hidden`} 
          >
            <nav className='gap-2 sm:gap-6 items-center flex text-sm sm:text-lg ml-2'>
              <Link href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>About</Link>
              <Link href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>Features</Link>
              <Link href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>Updates</Link>
              <Link href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>Help</Link>
              <Link href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>Customers</Link>
              
            </nav>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ x: 200, opacity: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            
          >
          <nav className='hidden sm:flex gap-6 items-center'>
            <Link href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>About</Link>
            <Link href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>Features</Link>
            <Link href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>Updates</Link>
            <Link href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>Help</Link>
            <Link href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>Customers</Link>
            <button className='bg-white py-2 px-4 rounded-lg'>Get for free</button>
          </nav>
          </motion.div>
          <div 
            className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden' 
            onClick={() => setShowMenu(prev => !prev)}
          >
            <Image src={menuIcon} alt='Menu icon' className='h-6 w-6 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
