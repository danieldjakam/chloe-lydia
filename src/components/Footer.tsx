import React from "react";
export default function Footer() {
  return (
    <footer className="bg-black text-white/40 text-center py-7 font-nunito text-[0.82rem]">
      © 2026{' '}
      <span className="text-rose">Daily Mysteries</span>{' '} by 
      <a href="https://www.danieldjakam.com" target="_blank" rel="noopener noreferrer" className="text-rose font-bold" style={{ textDecoration: 'underline' }}>Daniel Djakam</a>.
    </footer>
  )
}
