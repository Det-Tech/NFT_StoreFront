import Head from 'next/head'
import Intro from '../components/Intro'
import About from '../components/About'
import Why from '../components/Why'
import NFTIntro from '../components/NFT_Intro'
import SecondDrop from '../components/SecondDrop'
import RegisterWhitelist from '../components/RegisterWhitelist'
import RoadMap from '../components/Roadmap'
import Faq from '../components/Faq'
import Footer from '../components/layouts/Footer'

import styles from '../styles/Home.module.css'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fortune Tower</title>
        <meta name="description" content="Fortune Tower Minting Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-[#121328]'>
        <Intro />
        {/* <div className='w-full' style={{
            backgroundImage: "linear-gradient(180deg, #211f23, transparent 25%, transparent 75%, #211f23), radial-gradient(circle farthest-corner at 50% 80%, rgba(85, 64, 191, 0.2), rgba(58, 56, 62, 0) 65%), radial-gradient(circle farthest-corner at 0% 50%, rgba(64, 128, 191, 0.3), rgba(58, 56, 62, 0) 66%), radial-gradient(circle farthest-corner at 75% 15%, rgba(191, 64, 85, 0.25), rgba(58, 56, 62, 0) 40%), url('https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/617ffc954f80dd02ddb2b35c_stardust.png')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}> */}
          <About />
          <Why />
          <NFTIntro />
          <SecondDrop />
          <RegisterWhitelist />
          <RoadMap />
          <Faq />
          <Footer />
        {/* </div> */}
      </div>
    </div>
  )
}
