export default function RegisterWhitelist() {

    return (
        <div className="flex justify-center py-28">
            <div className="w-[80%] space-y-8 py-16" style={{
                backgroundImage: "url('/images/desktop/background_whitelist.png')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className="flex flex-col place-items-center text-center space-y-3 px-12">
                    <h1 className='text-gray-200 text-[3em] font-bold uppercase'>
                        Register now for the whitelist
                    </h1>
                    <p className='text-white text-2xl md:text-[0.9rem] w-fit'>
                        Enter your email to be notified about our upcoming pre-sale
                    </p>
                </div>
                <div className="flex flex-col justify-center place-items-center space-y-6 md:space-x-8 md:space-y-0 md:flex-row">
                    <input className='w-[80%] bg-white text-white bg-opacity-10 border border-white text-sm px-2 py-3 focus:outline-none md:w-[18rem]' type="email" name="email" id="email" placeholder='E-mail' required=""/>
                    <button className='w-[80%] text-white px-12 py-2 border border-transparent hover:px-16 md:w-fit md:button-scale-x' type='submit' style={{
                        backgroundImage: 'linear-gradient(90deg, #124CBD, #09E1F5)'
                    }}>GET STARTED</button>
                </div>
            </div>
        </div>
    )
}