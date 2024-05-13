import React from 'react'
import Card from './Card'
import Button from '../Programs/Button'

const Testimonials = () => {
    return (
        <div className='bg-black lg:pt-20 pt-6'>
            <p className='text-white lg:text-5xl lg:mx-28 text-2xl font-bold text-center pb-3 lg:text-[40px] mx-6'>What do <span className=' text-hijauMuda mx-1'>Job Connector Bootcamp alumni</span> say about Purwadhika?</p>
            {/* <p className='lg:text-base text-[13px] text-slate-600 flex text-center lg:px-[150px] lg:py-6 m-5'>Intensive training in digital skills that will lead you to promising job opportunities with over 1000+ hiring partners at Purwadhika across Asia, whether full-time, freelance, remote, or project-based.</p> */}
            <img src="contactBanner.webp" alt="" className='lg:p-6' />
            <div className=' w-full relative bg-abuSedang items-center justify-center lg:pt-[30px] pt-[20px] overflow-hidden lg:p-16 p-5 rounded-t-[24px]'>
                <div className='slide-text text-headdisplay gap-6 overflow-hidden'>
                    <div className='grid grid-cols-[3fr,2fr] lg:grid-cols-[2fr,6fr]'>
                        <p className='border-b-4 border-hijauMuda font-bold text-lg lg:text-2xl'>Software Engginering</p>
                    </div>

                    <div className=' overflow-x-auto overflow-hidden'>
                        <div className='gap-6 grid grid-cols-[1fr,1fr,1fr] '>
                            {/* Grid untuk layar kecil (sm), tidak memakai grid untuk layar besar (lg) */}
                            <Card photo="Willy.webp" name="Willy Bernardus" label="Hired less than a month!" company="Software Engineer di Mazecare, Hongkong" desc="“Purwadhika's value exceeded my expectations, particularly in terms of learning and mentoring systems, as well as work connections.”" />
                            <Card photo="bayu.webp" name="Bayu Darmawan" label="Hired a month!" company="JDeveloper at Vantsing International" desc="“What is learned in class is not much different from the workplace, though it is more complex, and the knowledge" />
                            <Card photo="ibnu.webp" name="Ibnu Sina" label="Hired two month!" company="Jr. Solutions Developer at Werkdone, Singapore" desc="“Having a mentor in the final project is very helpful! After graduation, the Purwadhika team actively offered us the positions needed by hiring partners.”" />
                        </div>
                    </div>
                    <Button text="Lihat Selengkapnya" icon="http://www.w3.org/2000/svg" link="#" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
