'use client'

import { useReveal } from '@/hooks/useReveal'
import { useState } from 'react';

export default function Location() {
  const mapRef = useReveal()
  const textRef = useReveal()
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

  return (
    <section
      id="location"
      className="bg-rose-bg px-[7%] py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      {/* Map placeholder */}
      <div
        ref={mapRef}
        // style={{
        //   aspectRatio: '4/3',
        //   background: 'linear-gradient(135deg, #c9d8e8 0%, #a8c4d4 100%)',
        // }}
      >
        
      <h2
        className="text-[clamp(1.7rem,3vw,2.3rem)] font-semibold mb-12 text-dark"
        style={{ fontFamily: "'Poppins', 'sans-serif'" }}
      >
        Laissez-nous une suggestion
      </h2>

      <div
        className="px-auto"
      >
        <div className="max-w-xl bg-white py-8 mb-8 px-12 rounded-3xl">
          <div className="block gap-4 mb-4">
            <label htmlFor="name" className='block text-left mb-2 text-rose'>Nom et prenoms: </label>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} className='w-full rounded-md py-2 px-4 text-rose border-2 border-rose outline-none'/>
          </div>
          <div className="block gap-4">
            <label htmlFor="name" className='block text-left mb-2 text-rose'>Message: </label>
            <textarea value={message} onChange={(e) => {setMessage(e.target.value)}} className='w-full rounded-md py-2 px-4 text-rose border-2 border-rose outline-none resize-none' rows={5}></textarea>
          </div>
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
      </div>

      {/* Text */}
      <div ref={textRef} className="reveal">
        <h2
          className="text-[clamp(1.7rem,2.5vw,2.1rem)] font-semibold leading-[1.28] mb-5 text-dark"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Où sommes-nous situés ?
        </h2>

        <p className="font-nunito text-[0.91rem] leading-[1.9] text-muted mb-4">
          Nous sommes localisés au :
        </p>

        <div
          className="bg-white rounded-2xl p-5 border-l-4 border-rose
            font-nunito text-[0.89rem] leading-[1.8] text-dark"
        >
          <strong className="text-rose font-bold">📍 Adresse :</strong>
          <br />
          Bonamoussadi ,
          <br />
          Douala
          <br />
          <br />
          En{' '}
          <strong className="text-rose font-bold">présentiel ou en ligne</strong>
          ,<br />
          nous sommes là pour vous servir !
        </div>
      </div>
    </section>
  )
}
