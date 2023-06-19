/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: '#027333',
        purple: '#3B2273',
        white: '#FAFBFF',
        grey: '#828282',
        'dark-purple': '#13013C',
        error: '#FE0000',
        warning: '#FFBB34',
        success: '#01C851',
      },
    },
    fontFamily: {
      abril: ['Abril Fatface', 'cursive'],
      prosans: ['Product Sans', 'cursive'],
    },
  },
  plugins: [],
};
