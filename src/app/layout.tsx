import type { Metadata } from 'next'
import '../styles/globals.css'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Fernanda Santos – Santé Mentale pour Femmes',
  description:
    'Cabinet de psychologie clinique spécialisé en santé mentale féminine et dépression post-partum. Consultations en ligne ou en présentiel.',
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
