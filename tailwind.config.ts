import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: '#e8a0a0',
        'rose-light': '#f5d5d5',
        'rose-bg': 'rgb(238, 207, 205)',
        cream: 'rgb(244, 241, 239)',
        dark: '#2c2424',
        muted: '#7a6a6a',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
