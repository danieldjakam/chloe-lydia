'use client'
import React from "react";
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'

export default function HowWeHelp() {
  const imgRef = useReveal()
  const textRef = useReveal()

  return (
    <section className="bg-cream px-[7%] py-[90px] grid grid-cols-1 md:grid-cols-2 gap-[70px] items-center">
      {/* Image placeholder */}
      <div
        ref={imgRef}
        className="reveal rounded-[22px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.11)]
          flex items-center justify-center text-6xl"
        style={{
          aspectRatio: '4/3',
          background: 'linear-gradient(135deg, #ead8c8 0%, #d4b896 100%)',
        }}
      >
        
      </div>

      {/* Text */}
      <div ref={textRef} className="reveal">
        <h2
          className="text-[clamp(1.7rem,2.5vw,2.1rem)] font-semibold leading-[1.28] mb-5 text-dark"
          style={{ fontFamily: "'Poppins', 'sans-serif'" }}
        >
          A Propos de la Fondatrice
        </h2>

        <p className="font-nunito text-[0.91rem] leading-[1.9] text-muted mb-4">
          Moi, c’est <span className='text-rose font-extrabold text-md'>CHLOÉ LYDIA.</span>
          J’ai 19 ans, je suis camerounaise, parfaitement bilingue, et passionnée par l’entrepreneuriat depuis toujours.
          J’ai commencé à vendre très jeune, vers 17 ans, avec déjà cette même idée en tête : proposer des solutions réelles, des choses qui font du bien, qui élèvent, qui parlent. Daily Mistery a vraiment pris forme quand j’avais 18 ans, mais l’envie, elle, était là depuis longtemps.

          J’aime créer, jouer, rêver grand — et surtout transformer ces rêves en réalité.
          Daily Mistery, c’est un peu mon univers… que je partage avec vous 🤍
        </p>

        <Link
          href="https://wa.me//688160351"
          target="_blank"
          className="inline-block bg-rose text-white px-8 py-3.5 rounded-full
            font-nunito font-bold text-[0.82rem] uppercase tracking-widest
            transition-all duration-300 hover:bg-[#d48080] hover:-translate-y-0.5
            shadow-[0_4px_20px_rgba(232,160,160,0.4)]"
        >
          Me Contacter
        </Link>
      </div>
    </section>
  )
}
