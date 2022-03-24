export default function Why() {

    return(
        <div className='grid gird-cols-1 pt-24 md:grid-cols-2'>
            <div className="hidden md:block">
                <img src='/images/desktop/building.svg' />
            </div>
            <div className='flex flex-col place-items-center space-y-10 md:pr-20'>
                <div className="w-[85%] space-y-10 md:w-auto">
                    <h1 className='text-gray-200 text-[3.5em] font-bold uppercase'>Why join Fortune towers?</h1>
                    <p className="text-white text-2xl md:text-[0.9rem]">
                        We have a highly experienced team with an inovative mature platform of slot machines we can incorporate into the game world. We've been working on 3D casino experiences for years and believe we're the best positioned to deliver on it's potential.
                    </p>
                </div>

                <div className="block md:hidden">
                    <img src='/images/desktop/building.svg' />
                </div>

                <div className='flex flex-col w-[80%] space-y-6 md:w-full'>
                    <div className='flex flex-col bg-[#161731] place-items-center md:px-5 space-x-6 shadow-md
                                    md:flex-row'>
                        <div className='w-full px-24 py-20 md:h-[9em] md:p-0 md:px-3 flex items-center
                                        md:w-[40%]'>
                            <img className="object-contain w-full h-full" src='/images/desktop/item_1.png'></img>
                        </div>
                        <div className='flex flex-col w-full px-8 pb-16 space-y-8 md:space-y-3 md:p-0 md:py-7 md:w-[60%]'>
                            <h1 className='text-gray-200 text-4xl font-bold md:text-xl'>
                                Established slots platform
                            </h1>
                            <p className='text-white text-2xl md:text-base'>
                                Well tested, stable foundation for our games all written by our existing team
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col bg-[#161731] place-items-center md:px-5 space-x-6 shadow-md
                                    md:flex-row'>
                        <div className='w-full px-24 md:h-[9em] md:p-0 md:px-3 flex items-center
                                        md:w-[40%]'>
                            <img className="object-contain w-full h-full" src='/images/desktop/item_2.png'></img>
                        </div>
                        <div className='flex flex-col w-full px-8 pb-16 space-y-8 md:space-y-3 md:p-0 md:py-7 md:w-[60%]'>
                            <h1 className='text-gray-200 text-4xl font-bold md:text-xl'>
                                Web based
                            </h1>
                            <p className='text-white text-2xl md:text-base'>
                                Playable on any device! You can jump in and play on your phone on the bus
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col bg-[#161731] place-items-center md:px-5 space-x-6 shadow-md
                                    md:flex-row'>
                        <div className='w-full px-24 py-10 md:h-[9em] md:p-0 md:px-3 flex items-center
                                        md:w-[40%]'>
                            <img className="object-contain w-full h-full" src='/images/desktop/item_3.png'></img>
                        </div>
                        <div className='flex flex-col w-full px-8 pb-16 space-y-8 md:space-y-3 md:p-0 md:py-7 md:w-[60%]'>
                            <h1 className='text-gray-200 text-4xl font-bold md:text-xl'>
                                Library of existing games
                            </h1>
                            <p className='text-white text-2xl md:text-base'>
                                We have a broad library of high quality games that we're modifying to fit into the Fortune Towers metaverse
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}