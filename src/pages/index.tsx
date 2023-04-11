import Image from 'next/image'
import { Inter } from 'next/font/google'

//import nav
import Nav from '../components/nav/nav';

//import hero
import Hero from '../components/nav/hero';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="hero">
        <div className="hero-body">
          <Hero />
          </div>
        </div>

    </main>
  )
}
