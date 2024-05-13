import React from 'react'
import Card from './Card'
import Button from './Button'

const Programs: React.FC = () => {
    return (
        <div className=' w-full relative bg-abuSedang items-center justify-center  lg:p-16 p-6 pt-7'>
            <p className='font-bold lg:text-base text-[13px] text-hijauTulisan text-center lg:px-[150px] lg:py-6 mx-auto'>FEATURED PROGRAM</p>
            <p className='text-black text-2xl font-semibold text-center pb-3 lg:text-[40px]'>Job Connector Bootcamp Purwadhika</p>
            <p className='lg:text-base text-[13px] text-slate-600 flex text-center lg:px-[150px] lg:py-6'>Intensive training in digital skills that will lead you to promising job opportunities with over 1000+ hiring partners at Purwadhika across Asia, whether full-time, freelance, remote, or project-based.</p>
            <div className='lg:grid-cols-[1fr,1fr,1fr,1fr] gap-4 md:grid md:grid-cols-[1fr,1fr]'>
                <Card icon="bag.svg" firstText="Lifetime access to" span="jobs with limitless income potential" endText="" />
                <Card icon="people.svg" firstText="Acquire " span=" skills always in demand across industries" endText="no matter the circumstances." />
                <Card icon="peopleSit.svg" firstText="Options available for" span="full-time, freelance, remote, or project-based work." endText="" />
                <Card icon="hands.svg" firstText="Lifetime" span="Career Support" endText="" />
            </div>
            <Button text="Lihat Program" icon="http://www.w3.org/2000/svg" link="#" />
        </div>
    )
}

export default Programs
