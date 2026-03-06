'use client'
import React from "react";

import { Facebook, Instagram, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import Image from "next/image";

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
  const img = require('../assets/images/bag.png')
  return (
    <section className="bg-rose-bg px-[7%] py-10 text-center">
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:px-[20%] gap-4 mb-12"
      >
        <div className="sign-card reveal flex items-center justify-between gap-4">
          <a href="https://www.instagram.com/daily_mysteries?igsh=YW5uMWJ2aXo0dW1k&utm_source=qr" target="_blank" rel="noopener noreferrer"
            className="sign-card reveal flex items-center gap-3 bg-white rounded-2xl px-3 py-3
              shadow-[0_2px_18px_rgba(0,0,0,0.05)] transition-transform duration-300
              hover:-translate-y-1.5"
          >
            <Instagram className="w-20 h-16 text-rose" />
          </a>

          <a href="https://www.tiktok.com/@daily_mysteries1?_r=1&_t=ZS-942e823CTrj" target="_blank" rel="noopener noreferrer"
            className="sign-card reveal flex items-center gap-3 bg-white rounded-2xl px-3 py-3
              shadow-[0_2px_18px_rgba(0,0,0,0.05)] transition-transform duration-300
              hover:-translate-y-1.5"
          > 
          <FaTiktok className="w-20 h-16 text-rose" />
          </a>
          
          <a href={`https://wa.me//688160351?text=${encodeURIComponent(`Bonjour Daily Mysteries. Je souhaite vous contacter.`)}`} target="_blank" rel="noopener noreferrer"
            className="sign-card reveal flex items-center gap-3 bg-white rounded-2xl px-3 py-3
              shadow-[0_2px_18px_rgba(0,0,0,0.05)] transition-transform duration-300
              hover:-translate-y-1.5"
          > 
          <FaWhatsapp className="w-20 h-16 text-rose" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          
                  
                  <Image
                    src={img}
                    alt="Photo de Chloe Lydia"
                    width={400}
                    height={500}
                    className="relative z-10 w-full max-w-[420px] rounded-[20px] object-cover"
                  />
          <p className='font-extrabold text-lg italic text-[rgb(0,0,0,.5)]'>Chaque jour mérite sa dose de mystère</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className='font-extrabold text-sm  text-rose'>Ref Pinterest  | luxe abordable | Pépites tendances | Précommandes | selfcare</p>
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
