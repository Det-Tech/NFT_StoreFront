import { useState, useEffect } from 'react'
import Image from 'next/image'

import Web3 from 'web3'

export default function Intro() {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        if(window.ethereum) {
            const web3 = new Web3(window.ethereum)
            console.log(web3.utils.fromWei('100000000000000000', 'ether'))
        }
    }, [])

    return (
        <div className='relative w-full h-[86.7em] md:h-[48.6em] overflow-hidden intro-background' style={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            overflow: 'hidden',
        }}>
            {/* For Desktop */}
            <div className='hidden md:block'>
                <nav className='relative w-full h-auto py-5'>
                    <div className='w-full flex justify-center space-x-[32em]'>
                        <ul className="flex flex-row w-auto relative text-white text-md space-x-24">
                            <li className='text-lg w-auto p-auto cursor-pointer navbar-item'><a href='#about'>About us</a></li>
                            <li className='text-lg w-auto p-auto cursor-pointer navbar-item'><a href='#roadmap'>Contacts</a></li>
                        </ul>
                        <ul className="flex flex-row w-auto relative text-white text-md space-x-24">
                            <li className='text-lg w-auto p-auto cursor-pointerr navbar-item'><a href='#faq'>FAQ</a></li>
                            <li className='text-lg w-auto p-auto cursor-pointer navbar-item'><a href='#metaverse'>Metaverse</a></li>
                        </ul>
                    </div>
                    <div className='absolute w-[13em] top-0 left-1/2 transform -translate-x-1/2'>
                        <img src='/images/logo.svg' alt='logo_img' />
                    </div>
                </nav>

                <div>
                    <img className='w-full h-auto' src='/images/desktop/line_1.svg' alt='line_img' />
                </div>

                <div className='w-auto h-auto ml-48 mt-24 space-y-16'>
                    <div className='space-y-6'>
                        <h1 className='text-5xl text-gray-200 font-bold uppercase'>
                            play to earn<br></br>casino metaverse
                        </h1>
                        <p className='text-xl text-white'>
                            Own the metaverse
                        </p>
                    </div>
                    <button className='text-white text-xl uppercase px-20 py-2 hover:px-24 button-scale-x' style={{
                        backgroundImage: 'linear-gradient(90deg, #BD1296, #B809F5 10%, #09E1F5)'
                    }}>
                        <p className='tracking-wider'>play now &#62;</p>
                    </button>
                </div>

                <div className='absolute bottom-[7%]'>
                    <img className='w-full h-auto' src='/images/desktop/line_2.svg' alt='line_img' />
                </div>
            </div>

            {/* For Mobile */}
            <div className='block md:hidden'>
                <nav className='relative w-full h-auto md:py-5'>
                    <div className={`sidenav ${sidebarOpen === true ? 'w-1/2' : 'w-0'}`}>
                        <a href="javascript:void(0)"
                           className="closebtn text-white"
                           onClick={() => setSidebarOpen(false)}>
                            &times;
                        </a>
                        <ul className="relative text-white text-md whitespace-nowrap overflow-x-hidden">
                            <li className='text-4xl w-auto px-12 py-5 cursor-pointer navbar-item'><a href='#about'>About us</a></li>
                            <li className='text-4xl w-auto px-12 py-5 cursor-pointer navbar-item'><a href='#roadmap'>Contacts</a></li>
                            <li className='text-4xl w-auto px-12 py-5 cursor-pointerr navbar-item'><a href='#faq'>FAQ</a></li>
                            <li className='text-4xl w-auto px-12 py-5 cursor-pointer navbar-item'><a href='#metaverse'>Metaverse</a></li>
                        </ul>
                    </div>
                    <div className='absolute w-[18em] top-0 left-1/2 transform -translate-x-1/2'>
                        <img src='/images/logo.svg' alt='logo_img' />
                    </div>
                    <div className="text-[2.5em] text-white px-5 py-8">
                        <a href="javascript:void(0);" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                </nav>

                <div>
                    <img className='w-full h-auto' src='/images/desktop/line_1.svg' alt='line_img' />
                </div>

                <div className='w-auto flex flex-col place-items-center pt-[9rem] space-y-[24rem]'>
                    <div className='space-y-6 w-[80%]'>
                        <h1 className='text-7xl text-gray-200 font-bold uppercase'>
                            play to earn casino metaverse
                        </h1>
                        <p className='text-3xl text-white'>
                            Own the metaverse
                        </p>
                    </div>
                    <button className='text-white text-4xl uppercase w-[80%] py-6 hover:px-24' style={{
                        backgroundImage: 'linear-gradient(90deg, #BD1296, #B809F5 10%, #09E1F5)'
                    }}>
                        <p className='tracking-wider'>play now &#62;</p>
                    </button>
                </div>

                <div className='absolute bottom-[7%]'>
                    <img className='w-full h-auto' src='/images/desktop/line_2.svg' alt='line_img' />
                </div>
            </div>
        </div>
    )
}