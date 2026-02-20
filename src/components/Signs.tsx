'use client'

import { IonIcon } from 'ionicons/components/ion-icon.js'
import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Bag, LogoWhatsapp } from 'react-ionicons'

const signs = [
  { icon: '😢', text: "Instagram" },
  { icon: '👶', text: 'Tiktok' },
  { icon: '😓', text: 'WhatsApp' },
]

export default function Signs() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>('.sign-card')
    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    cards.forEach((card, i) => {
      ;(card as HTMLElement).style.transitionDelay = `${i * 0.1}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-rose-bg px-[7%] py-20 text-center">
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:px-[20%] gap-4 mb-12"
      >
        <div className="sign-card reveal flex items-center justify-between gap-4">
          <button
            className="sign-card reveal flex items-center gap-3 bg-white rounded-2xl px-3 py-3
              shadow-[0_2px_18px_rgba(0,0,0,0.05)] transition-transform duration-300
              hover:-translate-y-1.5"
          >
            <Instagram className="w-20 h-16 text-rose" />
          </button>

          <button
            className="sign-card reveal flex items-center gap-3 bg-white rounded-2xl px-3 py-3
              shadow-[0_2px_18px_rgba(0,0,0,0.05)] transition-transform duration-300
              hover:-translate-y-1.5"
          > 
          <Facebook className="w-20 h-16 text-rose" />
          </button>
          <button
            className="sign-card reveal flex items-center gap-3 bg-white rounded-2xl px-3 py-3
              shadow-[0_2px_18px_rgba(0,0,0,0.05)] transition-transform duration-300
              hover:-translate-y-1.5"
          > 
          <LogoWhatsapp
            color={'#e8a0a0'}  
            title={""}
            height="64px"
            width="64px"
          />
          </button>
        </div>
        <div className="">
          <Bag color={"black"}
            height="320px"
            width="320px" />
          <p className='font-extrabold text-lg italic text-[rgb(0,0,0,.6)]'>Chaque jour mérite sa dose de mystère</p>
        </div>
      </div>

      {/* <Link
        href="#location"
        className="inline-block border-2 border-rose text-rose px-8 py-3 rounded-full
          font-nunito font-bold text-[0.82rem] uppercase tracking-[0.07em]
          transition-all duration-300 hover:bg-rose hover:text-white"
      >
        Prendre Rendez-vous
      </Link> */}
    </section>
  )
}
