import Image from 'next/image'
import React from 'react'
import ecosystemIcon from '@/assets/icons/ecosystem.svg'
import Feature from './Feature'
const features= [
    {
        title:'Intergration Ecosystem',
        description:'Enhance your productivity by connecting with your tools,keeping your essentials in one place'
    },
    {
        title:'Goal setting and Tracking',
        description:'Define and track your goals,breaking down objectives into achievable tasks to keep your targets in sight'
    },
    {
        title:'Secure Data encyption',
        description:'With an end-to-end encryption system,keep your data safe and secure,ensuring your privacy'
    },
   
]
const Features = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
        <div className='container'>
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Everything you need</h2>
        <div className='max-w-xl mx-auto'>
    
        <p className='text-center mt-5 text-xl text-white/70'>Enjoy customizable lists,team work tools,and smart tracking all in
             one place.set tasks,get reminders,and see your progress
             simply and quickly.
        </p>
        </div>
        <div className='mt-16 flex flex-col sm:flex-row  gap-4'>
    {features.map(({title,description},index)=>(
        <Feature key={index} title={title} description={description}/>
    ))}
        </div>
        </div>
    </div>
  )
}

export default Features