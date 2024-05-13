import React from 'react'
import Card from './Card'

const AboutUs = () => {
    return (
        // underline decoration-8  
        <div className=' w-full relative bg-abuSedang items-center justify-center lg:pt-[150px] lg:p-16 p-6'>
            <p className='text-black text-2xl font-semibold text-center pb-3 lg:text-[40px]'><span className='border-b-8 border-hijauMuda'>Why</span> Purwadhika?</p>
            <p className='lg:text-base text-[13px] text-slate-600 flex text-center decoration-solid lg:px-[150px] lg:py-6'>Purwadhika telah menjadi lembaga pendidikan teknologi digital berpengalaman dan terpercaya selama lebih dari 36 tahun sejak 1987.</p>
            <div className='lg:mx-9 my-6 grid lg:grid-cols-[1fr,1fr,1fr] md:grid-cols-[1fr,1fr] sm:grid-cols-[1fr] gap-9'>
                <Card title="Purwadhika is a life changer" icon="iconGreen.webp" background="green.jpg" picture="company-profile.jpg" desc="Join our 30.000+ alumni who have achieved dream careers in the digital industry from various backgrounds." />
                <Card title="Proven by industry" icon="iconPurple.webp" background="purple.jpg" picture="hiring-partner.jpg" desc="Purwadhika has become the talent pool for 1.000+ hiring partner companies from various industries across Asia." />
                <Card title="Lifetime career support" icon="iconOrange.webp" background="orange.jpg" picture="career-network.jpeg" desc="From building CV to interview preparation and career coaching, Purwadhika is ready to assist you become top digital talent!" />
            </div>
        </div>
    )
}

export default AboutUs
