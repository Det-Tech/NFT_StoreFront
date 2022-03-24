import { useState, useEffect } from 'react'
import constants from './constants/Constant'

export default function Faq() {

    const [accordion, setAccordion] = useState([])

    function setActive(i) {
        let newAccordion = [...accordion]

        newAccordion[i].isOpen = !newAccordion[i].isOpen
        setAccordion(newAccordion)
    }

    useEffect(() => {
        let newAccordion = constants.FAQ.map((data) => {
            return (
                {
                    title: data.title,
                    detail: data.detail,
                    isOpen: false
                }
            )
        })
        setAccordion(newAccordion)
    }, [])

    return (
        <div className='relative grid grid-cols-1 pt-32 md:grid-cols-2'>
            <div className='flex flex-col z-10 space-y-4 px-16 md:px-0 md:pl-24' id='faq'>
                <h1 className='text-white text-5xl font-bold tracking-widest'>FAQ</h1>
                <div className='w-full space-y-8 md:space-y-3 md:w-[95%]'>
                    {accordion.map((data, i) => {

                        return (
                            <div className='w-full h-auto flex flex-col border-b border-gray-600' key={ i }>
                                <button className="relative w-full font-bold text-3xl text-left overflow-hidden text-white py-4 pr-20 bg-transparent md:text-[1.3em]"
                                    onClick={ () => setActive(i) }
                                >
                                    <div className={`absolute right-6 transform top-1/2 -translate-y-1/2 transition-all duration-500
                                                    ${data.isOpen === true ? 'rotate-45' : 'rotate-0'}`}>
                                        <span className='text-4xl mt-[-0.3em] block md:text-2xl'>+</span>
                                    </div>
                                    { data.title }
                                </button>

                                <div className={data.isOpen === true
                                    ? 'max-h-96 overflow-hidden transition-all duration-700'
                                    : 'max-h-0 overflow-hidden transition-all duration-700'
                                }>
                                    <p className='text-white text-2xl pb-2 md:text-base'>
                                        { data.detail }
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='md:relative'>
                <img className='absolute top-0 opacity-30 md:opacity-100' src='/images/desktop/background_faq.png'></img>
            </div>
        </div>
    )
}