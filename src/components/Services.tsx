'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    icon: '💻',
    title: 'Accompagnement Humanisé en Ligne',
    description:
      'Un suivi spécialisé avec empathie et bienveillance, même à distance.',
  },
  {
    icon: '🤝',
    title: 'Consultations Individuelles',
    description:
      'Une thérapie centrée sur vous, avec une écoute attentive et personnalisée.',
  },
  {
    icon: '📋',
    title: 'Plans de Suivi',
    description:
      'Un accompagnement continu pour votre santé mentale sur le long terme.',
  },
]

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>('.svc-card')
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
      card.style.transitionDelay = `${i * 0.12}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="bg-cream px-[7%] py-20 text-center">
      <h2
        className="text-[clamp(1.7rem,3vw,2.3rem)] font-semibold mb-12 text-dark"
        style={{ fontFamily: "'Poppins', 'sans-serif'" }}
      >
        Laissez-nous une suggestion
      </h2>

      <div
        ref={gridRef}
        className="px-auto"
      >
        <div className="max-w-xl mx-auto bg-rose-bg py-8 mb-8 px-12 rounded-3xl">
          {/* <div className="block gap-4 mb-4">
            <label htmlFor="name" className='block text-left mb-2 text-rose'>Nom et prenoms: </label>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} className='w-full rounded-md py-2 px-4 text-rose border-2 border-none outline-rose'/>
          </div>
          <div className="block gap-4">
            <label htmlFor="name" className='block text-left mb-2 text-rose'>Nom et prenoms: </label>
            <textarea value={message} onChange={(e) => {setMessage(e.target.value)}} className='w-full rounded-md py-2 px-4 text-rose border-2 border-none outline-rose resize-none' rows={5}></textarea>
          </div> */}
      <button
        onClick={() => {}}
        className="inline-block border-2 border-rose text-rose px-8 py-3 rounded-full
          font-nunito font-bold text-[0.82rem] uppercase tracking-[0.07em]
          transition-all duration-300 hover:bg-rose hover:text-white mt-8"
      >
        Envoyer
      </button>
        </div>
      </div>

    </section>
  )
}
