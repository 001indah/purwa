import React from 'react'
import FactNum from '../FactNum';
import Label from '../Label';

const Programs = [
    { program: "Software development" },
    { program: "Digital Marketing" },
    { program: "Data Science" },
]

interface Program {
    program: string;
}

const Hero: React.FC = () => {

    return (
        <div>
            <div className=' min-h-screen w-full relative bg-black items-center justify-center lg:pt-[150px] pt-[120px] overflow-hidden lg:p-16'>
                <div>
                    <div className='grid lg:grid-cols-[3fr,4fr] gap-4 px-5'>
                        <div>
                            <p className=' text-4xl lg:text-[40px] lg:leading-[55px] text-white my-3'>Raih <span className='font-bold text-hijauMuda'>karir</span> dan <span className='font-bold text-hijauMuda'>keahlian digital</span> dengan peluang kerja tanpa batas</p>
                            <p className='text-white text-sm lg:text-base my-6 leading-6'>Purwadhika dipercaya sejak 1987 dan telah menyalurkan lebih dari 30.000 talenta digital berkualitas ke 1.000+ hiring partner Purwadhika di seluruh dunia</p>
                            <div className='flex flex-wrap gap-2 text-sm lg:text-[14px] font-semibold'>
                                {Programs.map((program: Program, index: number) => (
                                    <p key={index} className='text-white p-2 border border-green-300 border-solid rounded-full'>{program.program}</p>
                                ))}

                            </div>
                            <div className='lg:flex md:flex gap-3 my-6'>
                                <div className=' my-4 px-6 py-3 border border-hijauMuda border-solid rounded-lg flex align-center justify-center gap-2'>
                                    <p className='text-white text-base lg:text-[18px]'>Lihat Program </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='fill-white h-5 flex self-center'><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                </div>
                                <div className='my-4 px-6 py-3 bg-white rounded-lg flex align-center justify-center gap-2'>
                                    <p className='text-black text-base lg:text-[18px] font-semibold'>Hubungi Kami </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img src="thumbnailVideo.webp" alt="" className="hover:scale-110 ease-in-out duration-500 object-cover rounded-lg" />
                            <img src="ic_play.svg" alt="" className="absolute inset-0 m-auto w-[50px]" />
                        </div>
                    </div>
                    <FactNum />
                </div>

            </div>

        </div>
    )
}

export default Hero
