'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Label from '@/app/components/Label';

const Header = () => {
    //hamburger
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen)
    };

    // warna scroll start
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsNavbarFixed(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <header className={`lg:top-8 h-18 bg-black top-0 w-full flex items-center z-10 fixed ${isNavbarFixed ? 'bg-gray-100' : ''}`}>
                <div className='w-full lg:px-4'>
                    <div className='lg:grid lg:grid-cols-[3fr,2fr] flex items-center justify-between relative'>
                        <div>
                            <img src={`${isNavbarFixed ? 'logo.png' : 'logoWhite.png'}`} alt="" className='h-7 block m-4' />
                        </div>
                        <button onClick={handleClick} className='hamburger block absolute right-2 p-4 lg:hidden'>
                            <span className={`w-[30px] h-[2px] my-2 block ${isNavbarFixed ? ' bg-black' : 'bg-white'}  ease-in-out duration-500 ${isOpen ? 'origin-top-left rotate-45' : ''}`}></span>
                            <span className={`w-[30px] h-[2px] my-2 block ${isNavbarFixed ? ' bg-black' : 'bg-white'} ease-in-out duration-500 ${isOpen ? 'scale-0' : ''}`}></span>
                            <span className={`w-[30px] h-[2px] my-2 block ${isNavbarFixed ? ' bg-black' : 'bg-white'} ease-in-out duration-500 ${isOpen ? 'origin-bottom-left -rotate-45' : ''}`}></span>
                        </button>
                        <nav className={`lg:flex lg:static lg:bg-transparent lg:max-w-full lg:h-8 lg:pt-0 lg:shadow-none lg:py-0 absolute py-5 ${isNavbarFixed ? ' bg-abuMuda text-gray-800' : 'bg-black text-white'} shadow-lg w-full h-screen top-full z-50 ease-in-out duration-500 pt-12 text-4xl font-semibold ${isOpen ? '' : 'hidden'}`}>
                            <ul className='lg:flex lg:justify-between'>
                                <li className="group">
                                    <Link href="/#About" className="lg:flex lg:items-center text-base ml-10 border-b-2 border-dashed border-gray-500 hover:text-hijauSedang hover:border-hijauSedang hover:font-bold">About Us</Link>
                                </li>
                                <li className="group">
                                    <Link href="/#About" className="lg:flex lg:items-center text-base ml-10 border-b-2 border-dashed border-gray-500  hover:text-hijauSedang hover:border-hijauSedang hover:font-bold">Our Teams</Link>
                                </li>
                                <li className="group">
                                    <Link href="/#Work" className="lg:flex lg:items-center text-base ml-10 border-b-2 border-dashed border-gray-500  hover:text-hijauSedang hover:border-hijauSedang hover:font-bold">Product</Link>
                                </li>
                                <li className="group">
                                    <Link href="/Contact" className="lg:flex lg:items-center text-base ml-10 border-b-2 border-dashed border-gray-500  hover:text-hijauSedang hover:border-hijauSedang hover:font-bold">Testimonials</Link>
                                </li>
                            </ul>

                        </nav>

                    </div>
                </div>
            </header >
            <Label />

        </div >
    )
}

export default Header
