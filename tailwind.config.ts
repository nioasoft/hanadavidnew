import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF8',
        'soft-black': '#2D2D2D',
        'medium-gray': '#6B6B6B',
        'pale-blue': '#A8C5DD',
        'sage-green': '#B8D4C8',
        'warm-beige': '#E8E4DF',
        'border-light': '#E5E3DE',
        'border-medium': '#D4D0C8',
      },
    },
  },
  plugins: [],
}
export default config
