import constants from './constants/Constant'

export default function SecondDrop() {

    const NFTAdapter = constants.secondNFTList

    const NFTItem = function(data, i) {
        return (
            <div className='w-[90%] px-5 space-y-5 rounded-lg pb-12 bg-[#161731] shadow-md card-scale md:h-full' key={i}>
                <div className="w-full px-24 py-5">
                    <img className='w-full h-full object-contain' src={ data.image } alt='lifetime_logo' />
                </div>
                <div className="flex flex-col place-items-center w-full h-[50%] space-y-7">
                    <h1 className='text-white text-4xl font-bold md:text-2xl'>{ data.type }</h1>
                    <p className='text-white text-2xl md:text-base'>
                        { data.detail }
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className='flex flex-col space-y-20 w-full py-28'>
            <div className="flex flex-col place-items-center text-center space-y-10 md:space-y-3">
                <h1 className='text-gray-200 w-[65%] text-[3em] font-bold uppercase'>
                    2nd nft drop
                </h1>
                <p className='text-white text-2xl md:text-[0.9rem] w-fit'>
                    Priority will be given to NFT holders from 1st drop
                </p>
            </div>

            <div className='grid grid-cols-1 place-items-center h-full space-y-12 px-16 md:grid-cols-3 md:space-y-0 md:px-24'>
                { NFTAdapter.map((data, i) => {
                    return NFTItem(data, i)
                })}
            </div>
        </div>
    )
}