import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-inter)', 'sans-serif'],
        heebo: ['var(--font-heebo)', 'sans-serif'],
      },
      // Colors are now largely handled by the CSS variables in global.css via the @theme directive
      // We can add specific overrides here if absolutely needed, but the CSS variable mapping 
      // is the modern way to handle this with Tailwind v4 (or v3 with variable mapping).
      // Since the user is using Tailwind v4 syntax in CSS (@theme), we rely on that.
    },
  },
  plugins: [],
}
export default config