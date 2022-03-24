// import Web3 from 'web3'

export default function About() {

    return (
        <div className='w-full' id='about' style={{
            backgroundImage: "url('/images/desktop/background_about.svg')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className='w-full flex flex-col  place-items-center space-y-20 pt-20 pb-24 md:pt-16' style={{
                backgroundImage: 'linear-gradient(180deg, rgba(9, 31, 42, .8), transparent)',
            }}>
                <div className='flex flex-col place-items-center w-full h-auto'>
                    <div className="w-[35rem] space-y-6 md:w-auto md:text-center md:space-y-6">
                        <h1 className='text-gray-200 text-6xl font-bold uppercase md:text-[3em] tracking-wide'>Fortune Towers</h1>
                        <p className="text-white text-2xl md:text-[0.9rem]">
                            We are building an exciting machine gaming casino world that you can join and even own a piece of
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-[80%] h-auto bg-black bg-opacity-40 border border-y-2 border-[#007A7A]
                                md:w-[70%] md:flex-row">
                    <div className='w-full ml-12 md:w-[40%] md:ml-0' style={{
                        mixBlendMode: 'lighten'
                    }}>
                        <img className="object-cover" src='/images/desktop/casino_1.png' />
                    </div>
                    <div className='flex flex-col justify-center w-full h-auto p-10 space-y-4
                                    md:w-[60%] md:p-0 md:pr-8'>
                        <h1 className='text-gray-200 text-3xl font-bold md:text-xl'>
                            We built our first 3D casino 20 years ago so we know a bit about it.
                        </h1>
                        <p className='text-white text-2xl md:text-base'>
                            Trying to just recreate the physical world doesn't work. We're building a better experience for slot machine gaming. A place where you can lose yourself for minutes or hours, that you'll come back to again and again. All our development effort will go towards creating compelling immersive slots game experiences.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-[80%] h-auto bg-black bg-opacity-40 border border-y-2 border-[#007A7A]
                                md:w-[70%] md:flex-row">
                    <div className='w-full ml-6 md:w-[40%] md:ml-0' style={{
                        mixBlendMode: 'lighten'
                    }}>
                        <img className="object-cover" src='/images/desktop/casino_2.png' />
                    </div>
                    <div className='flex flex-col justify-center w-full h-auto p-10 space-y-4
                                    md:w-[60%] md:p-0 md:pr-8'>
                        <h1 className='text-gray-200 text-3xl font-bold md:text-xl'>
                            We know that our slot machines work, people play them for long periods of time, again and again.
                        </h1>
                        <p className='text-white text-2xl md:text-base'>
                        As such Fortune Towers is solely focused around what we know works, casino games with carefully added innovations that enhance the core slots experience. This is not just sticking slot machines within a shared 3D environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}