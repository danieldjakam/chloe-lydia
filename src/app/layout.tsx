import React from "react";
import type { Metadata } from 'next'
import '../styles/globals.css'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Daily Mysteries - Ventes en ligne de produits de beauté naturels et vetements pour femmes et hommes',
  description:
    'Découvrez Daily Mysteries, votre boutique en ligne de produits de beauté naturels et de vêtements pour femmes et hommes. Explorez notre collection unique alliant style et bien-être, avec des produits soigneusement sélectionnés pour sublimer votre beauté naturelle. Profitez d’une expérience d’achat exceptionnelle et laissez-vous séduire par nos offres exclusives.',
}
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
