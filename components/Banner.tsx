import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className='py-3 text-center custom-gradient'>

    <div className='container font-medium  '>
      <p>
      <span className='hidden sm:inline'>Introducing a completlely redesigned interface -</span>
        <Link href="#" className='underline underline-offset-4 hover:text-black/60'>Explore the demo</Link>
      </p>
        </div>
    </div>
  )
}
 
export default Banner