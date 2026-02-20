import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Signs from '@/components/Signs'
import HowWeHelp from '@/components/HowWeHelp'
import Services from '@/components/Services'
import Location from '@/components/Location'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Signs />
      <HowWeHelp />
      {/* <Services /> */}
      <Location />
      <Footer />
    </main>
  )
}
