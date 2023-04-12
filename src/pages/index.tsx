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
      
    

      <div className='anchor  w-full content-margin h-screen' title='Home' id='Home'>
        <div className='background paralax gradient' style={{backgroundImage:"url('/images/Land.jpg')"}}></div>
        <Hero />
      </div>

   
    
    </main>
  )
}
