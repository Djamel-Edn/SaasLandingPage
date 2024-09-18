'use client'
const items = [
    {
        question: 'What payment methods do you  accept?',
        answer: 'We accept all major credit cards, PayPal,and various other payment methods depending on your location.Please contact our support team for more information on accepted payment methods in your region'
    },
    {
        question: 'How does the pricing work for teams?',
        answer: 'Our pricing is per user, per month.This means you only pay for the number of team members you have on your account.Discounts are avaliable for larger teams and annual subscriptions'
    },
    {
        question: 'Can i change my plan later?',
        answer: 'Yes you can upgrade or downgrade your plan at any time. If you choose to upgrade, you will be charged a pro-rated amount for the remainder of the billing period. If you choose to downgrade, you will be credited on your next billing cycle'
    },
    {
        question: 'Is my data secure?',
        answer: 'Security is our top priority. We use industry-leading measures to keep your data safe and secure. All data is encrypted both in transit and at rest. We undergo regular security audits and penetration testing to ensure our platform is up to date with the latest security standards'
    }
]

import AccordionItem from "./AccordionItem"
import { useState } from 'react'
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<boolean[]>([false,false,false,false]);

    const handleOpen = (index: number) => {
        setOpenIndex(prev => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    }
    return (
        <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24"> 
            <div className="container">
                <h2 className='text-center text-5xl sm:text-6xl sm:max-w-[760px] mx-auto font-bold tracking-tighter'>Frequently asked questions</h2>
                <div className='mt-12  max-w-[760px] mx-auto'>
                    {items.map(({ question, answer }, index) => (
                        <AccordionItem question={question} answer={answer} key={index} isOpen={openIndex[index]} 
                        handleOpen={()=>handleOpen(index)} />
                       

                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ