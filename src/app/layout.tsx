import React from "react";
import type { Metadata } from 'next'
import '../styles/globals.css'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
	title: {
		default: "Daily Mysteries - Ventes en ligne de produits de beauté naturels et vetements pour femmes et hommes",
		template: '%s | Daily Mysteries',
	},
	description: 'Découvrez Daily Mysteries, votre boutique en ligne de produits de beauté naturels et de vêtements pour femmes et hommes. Explorez notre collection unique alliant style et bien-être, avec des produits soigneusement sélectionnés pour sublimer votre beauté naturelle. Profitez d’une expérience d’achat exceptionnelle et laissez-vous séduire par nos offres exclusives.',
	keywords: [
    'Daily Mysteries',
    'boutique en ligne',
    'produits de beauté naturels',
    'vêtements pour femmes',
    'vêtements pour hommes',
    'style et bien-être',
    'collection unique',
    'expérience d’achat exceptionnelle',
    'offres exclusives',

	],
	authors: [{ name: 'Daniel Djakam' }],
	creator: 'Daniel Djakam',
	publisher: 'Daniel Djakam',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://lydia.danieldjakam.com'),
	alternates: {
		canonical: 'https://lydia.danieldjakam.com',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://lydia.danieldjakam.com',
		title: 'Daily Mysteries - Ventes en ligne de produits de beauté naturels et vetements pour femmes et hommes',
		description: 'Découvrez Daily Mysteries, votre boutique en ligne de produits de beauté naturels et de vêtements pour femmes et hommes. Explorez notre collection unique alliant style et bien-être, avec des produits soigneusement sélectionnés pour sublimer votre beauté naturelle. Profitez d’une expérience d’achat exceptionnelle et laissez-vous séduire par nos offres exclusives.',
		siteName: 'Daily Mysteries - Ventes en ligne de produits de beauté naturels et vetements pour femmes et hommes',
		images: [
		{
			url: '/bag.png',
			width: 1200,
			height: 630,
			alt: 'Daily Mysteries - Ventes en ligne de produits de beauté naturels et vetements pour femmes et hommes',
		},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Daily Mysteries - Ventes en ligne de produits de beauté naturels et vetements pour femmes et hommes',
		description: 'Découvrez Daily Mysteries, votre boutique en ligne de produits de beauté naturels et de vêtements pour femmes et hommes. Explorez notre collection unique alliant style et bien-être, avec des produits soigneusement sélectionnés pour sublimer votre beauté naturelle. Profitez d’une expérience d’achat exceptionnelle et laissez-vous séduire par nos offres exclusives.',
		images: ['/bag.png'],
		creator: '@danieldjakam',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
		index: true,
		follow: true,
		'max-video-preview': -1,
		'max-image-preview': 'large',
		'max-snippet': -1,
		},
	},
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
			<head>
				<link rel="icon" href="/bag.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#10b981" />
				<meta name="msapplication-TileColor" content="#10b981" />
				<meta name="google-site-verification" content="CdKC6gaR5Xb6iwHeheHkM_B6dr6qOfPRl5IaqOAeXo8" />
				
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="preconnect" href="https://github.com" />
				<link rel="preconnect" href="https://linkedin.com" />
				
				<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					"name": "Daniel Djakam",
					"jobTitle": "Full Stack Developer",
					"description": "Passionate about web development, I specialize in creating dynamic and responsive websites using Next.js, React, and Node.js. With a strong focus on user experience and performance, I strive to deliver high-quality solutions that meet the needs of my clients.",
					"url": "https://lydia.danieldjakam.com",
					"image": "https://lydia.danieldjakam.com/og-image.png",
					"sameAs": [
						"https://github.com/danieldjakam",
						"https://linkedin.com/in/danieldjakam",
						"https://twitter.com/danieldjakam"
					],
					"knowsAbout": [
						"Web Development",
						"Full Stack Development",
						"JavaScript",
						"Parchemins",
						"Next.js",
						"React",
						"Node.js"
					],
					"worksFor": {
						"@type": "Organization",
						"name": "Freelance"
					},
					"address": {
						"@type": "PostalAddress",
						"addressLocality": "Douala",
						"addressCountry": "Cameroon"
					}
					})
				}}
				/>
			</head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
