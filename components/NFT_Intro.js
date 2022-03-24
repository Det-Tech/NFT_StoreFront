import constants from './constants/Constant'

export default function NFTIntro() {

    const NFTAdapter = constants.nftList

    const NFTItem = function(data, i) {
        return (
            <div className='w-[90%] border border-y-2 border-[#007A7A] px-5 py-8 space-y-5 rounded-lg card-up md:h-full md:space-y-0' key={i} style={{
                backgroundImage: 'radial-gradient(farthest-side at 50% 3%, rgba(0, 178, 255, 0.47), rgba(0, 178, 255, 0.13), rgba(0, 0, 0, 0.10))',
                backdropFilter: 'blur(6px)'
            }}>
                <div className="w-full h-[9rem]">
                    <img className='w-full h-full object-contain' src={ data.image } alt='lifetime_logo' />
                </div>
                <div className="flex flex-col place-items-center w-full space-y-8 md:space-y-4 py-5">
                    <h3 className='text-white text-4xl font-bold md:text-xl'>{ data.type }</h3>
                    <h1 className='text-6xl font-extrabold rainbow-font w-fit -ml-6 md:text-4xl'>x { data.count }</h1>
                    <p className='text-white text-2xl md:text-base'>
                        { data.detail }
                    </p>
                </div>
            </div>
        )
    }
    
    return (
        <div className='flex flex-col space-y-20 w-full pt-28 pb-44' style={{
            backgroundImage: "url('/images/desktop/background_coming.png')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            mixBlendMode: 'lighten'
        }}>
            <div className="flex flex-col place-items-center text-center space-y-10 md:space-y-3">
                <h1 className='w-[90%] text-gray-200 text-[3em] font-bold uppercase
                               md:w-[65%]'>
                    how long will you wait before getting involved?
                </h1>
                <p className='text-white text-2xl md:text-[0.9rem] w-fit'>
                    Our first drop of utility NFT's is coming soon
                </p>
            </div>

            <div className='grid grid-cols-1 place-items-center space-y-12 px-16 md:grid-cols-3 md:space-y-0 md:px-24'>
                { NFTAdapter.map((data, i) => {
                    return NFTItem(data, i)
                })}
            </div>
        </div>
    )
}