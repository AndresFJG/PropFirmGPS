/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#d1d4dc',
            a: {
              color: '#2962ff',
              '&:hover': {
                color: '#2979ff',
              },
            },
            h1: {
              color: '#d1d4dc',
            },
            h2: {
              color: '#d1d4dc',
            },
            h3: {
              color: '#d1d4dc',
            },
            strong: {
              color: '#d1d4dc',
            },
            code: {
              color: '#d1d4dc',
            },
            blockquote: {
              color: '#787b86',
              borderLeftColor: '#2a2e39',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
