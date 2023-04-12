import Image from 'next/image'
import { Inter } from 'next/font/google'

//import nav
import Nav from '../components/nav/nav';

//import hero
import Hero from '../components/nav/hero';

//import scroll
import Scroll from '../components/scroll';

//import footer
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Nav/>
      
      <Scroll/>

      <div className='anchor  w-full content-margin h-screen' title='Home' id='Home'>
        <div className='background paralax gradient' style={{backgroundImage:"url('/images/Revolution-Banner.png')"}}></div>
        <Hero />
      </div>

      <div className='anchor h-screen paralax' style={{backgroundImage:"url('/images/Revolution-Banner.png')"}} title='About' id='About'>
      </div>

      <div className='anchor h-screen' title='Projects' id='Projects'>
      </div>

      <div className='anchor h-screen' title='Contact' id='Contact'>
      </div>

      <div className='anchor' title='Footer' id='Footer'>
        <Footer />
      </div>
    </main>
  )
}
