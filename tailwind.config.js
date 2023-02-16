/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      lg: ['32px', '32px'],
      m: ['14px', '23px'],
      s: ['13px', '23px'],
      xs: ['12px', '15px'],
    },
    letterSpacing: {
      widest: '5px',
    },
    colors: {
      creme: '#F2EBE3',
      deepaquamarine: '#3C8067',
      deepaquamarinehover: '#1A4032',
      aurometalsaurus: '#6C7289',
      gunmetal: '#1C232B',
      white: '#FFFFFF',
    },
    extend: {
      width: {
        600: '600px',
        450: '450px',
      },
      fontFamily: {
        sans: ['Montserrat'],
        fancy: ['Fraunces'],
      },
    },
  },
  plugins: [],
}
