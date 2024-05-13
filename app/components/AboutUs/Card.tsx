import React from 'react'

interface CardProps {
    title: string;
    background: string;
    icon: string;
    picture: string;
    desc: string;
}

const Card: React.FC<CardProps> = ({ title, background, icon, picture, desc }) => {
    return (

        <div className='relative'>
            <img src={background} alt="" className='rounded-[12px] relative' />
            <div className='absolute mx-5 my-6 inset-0 flex flex-col'>
                <div className='flex items-center'>
                    <img src={icon} alt="" className='w-12 mr-2' />
                    <p className='text-[24px] font-bold leading-8'>{title}</p>
                </div>
                <p className='text-sm text-slate-600 flex justify-center my-5'>{desc}</p>
            </div>
            <div className='rounded-[24px] border-t-4 border-white translate-y-500 absolute md: top-[200px] overflow-hidden '>
                <img src={picture} alt="" className='hover:scale-110 object-cover ease-in-out duration-500' />
            </div>
            <img src="ic_play.svg" alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[135%] w-[65px]' />
            <br />
        </div>

    )
}

export default Card
