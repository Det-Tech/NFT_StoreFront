export default function Footer() {

    return (
        <div className="w-full h-[52em] flex flex-col justify-end place-items-center" style={{
            backgroundImage: "url('/images/desktop/background_footer.png')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            mixBlendMode: 'lighten'
        }}>
            <div className="w-max h-fit flex flex-col place-items-center space-y-6 py-12">
                <div className='flex space-x-16'>
                    <a href='#' target="_blank" rel="noopener noreferrer">
                        <span className='text-white text-3xl cursor-pointer'>
                            <i className='fab fa-instagram'></i>
                        </span>
                    </a>
                    <a href='#' target="_blank" rel="noopener noreferrer">
                        <span className='text-white text-3xl cursor-pointer'>
                            <i className='fab fa-twitter'></i>
                        </span>
                    </a>
                    <a href='#' target="_blank" rel="noopener noreferrer">
                        <span className='text-white text-3xl cursor-pointer'>
                            <i className='fa-brands fa-facebook-f'></i>
                        </span>
                    </a>
                </div>
                <p className="text-white text-xs">
                    @Fortune Towers. All rights reserved
                </p>
            </div>
        </div>
    )
}