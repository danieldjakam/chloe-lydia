import { Heart } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative grid grid-cols-1 md:grid-cols-2 items-center min-h-[88vh]
        px-[7%] py-16 gap-16 bg-cream overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(232,160,160,0.22) 0%, transparent 70%)',
        }}
      />

      {/* Text */}
      <div className="animate-fade-up">
        <h1
          className="text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.2] mb-6 text-dark"
          style={{ fontFamily: "'Poppins', 'sans-serif'" }}
        >
          L'histoire derriere Daily Mysteries
        </h1>

        <p className="font-nunito text-[0.92rem] leading-[1.85] text-muted max-w-[800px] mb-9 font-normal">
          Pendant longtemps, j’ai appris à m’habiller en regardant ailleurs.
          J’aimais les outfits, les accessoires, l’esthétique, les détails qui racontent une histoire. Mais à chaque fois que je voulais vraiment essayer, on me ramenait à la réalité.
          Je me sentais incomprise. Et surtout limitée.
          Comme si aimer le beau, le soin de soi, l’esthétique, devait forcément rester un rêve.
          {/* Beaucoup de filles, et même des garçons, ressentaient la même chose : l’envie de bien s’habiller, 
          de se sentir beaux, différents, alignés… sans avoir de vraie solution ici. */}
          Daily Mistery est né de cette envie-là.
          Créer un univers, pas juste une boutique.
          Daily Mistery, c’est la preuve qu’on n’est pas obligé de se contenter.
          C’est rendre l’esthétique accessible, ici aussi.
        </p>

        <Link
          href="#location"
          className="inline-block bg-rose text-white px-8 py-3.5 rounded-full
            font-nunito font-bold text-[0.82rem] uppercase tracking-widest
            transition-all duration-300 hover:bg-[#d48080] hover:-translate-y-0.5
            shadow-[0_4px_20px_rgba(232,160,160,0.4)]"
        >
          Nous Contacter
        </Link>

        <div className="mt-6 flex flex-col gap-2">
          {[
            'Livraison à domicile',
            'Ouvert 24h/24',
          ].map((text) => (
            <span
              key={text}
              className="font-nunito text-[0.84rem] text-muted flex items-center gap-2"
            >
              <span className="text-rose font-bold">✓</span>
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Image area */}
      <div className="relative hidden md:flex justify-center animate-fade-up-delayed">
        {/* Organic blob behind */}
        <div
          className="absolute top-8 right-0 w-4/5 h-[88%] z-0"
          style={{
            background: '#f5d5d5',
            borderRadius: '40% 60% 55% 45% / 40% 45% 55% 60%',
          }}
        />

        {/* Photo placeholder */}
        <div
          className="relative z-10 w-full max-w-[420px] rounded-[20px] flex items-center
            justify-center"
          style={{
            aspectRatio: '3/4',
            background: 'linear-gradient(145deg, #f0d0d0 0%, #e0b8b8 100%)',
          }}
        >
          <svg
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 opacity-35"
          >
            <circle cx="50" cy="35" r="22" fill="#c07a7a" opacity="0.5" />
            <path
              d="M10 110 Q10 75 50 75 Q90 75 90 110"
              fill="#c07a7a"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Badge top */}
        <div
          className="absolute top-12 -right-2 z-20 bg-white rounded-2xl px-4 py-3
            shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center gap-3"
        >
          <span className="text-[1.4rem]">🧠</span>
          <div>
            <p className="font-nunito font-bold text-[0.8rem] text-dark">
              Psychologie Clinique
            </p>
            <p className="font-nunito text-[0.72rem] text-[#aaa]">
              N° ADELI XXXXXX
            </p>
          </div>
        </div>

        {/* Badge bottom */}
        <div
          className="absolute bottom-16 -left-2 z-20 bg-white rounded-2xl px-4 py-3
            shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center gap-3"
        >
          <span className="text-[1.4rem]">💆‍♀️</span>
          <div>
            <p className="font-nunito font-bold text-[0.8rem] text-dark">
              +500 consultations
            </p>
            <p className="font-nunito text-[0.72rem] text-[#aaa]">
              réalisées avec succès
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
