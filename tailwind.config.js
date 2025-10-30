// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           blue: {
//             900: '#0A2463',
//             800: '#1E3A8A',
//             50: '#EFF6FF',
//           },
//           green: {
//             500: '#34D399',
//           }
//         }
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//       },
//       animation: {
//         'fade-in': 'fadeIn 0.5s ease-in-out forwards',
//         'slide-up': 'slideUp 0.5s ease-in-out forwards',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { transform: 'translateY(20px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//       },
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: '1rem',
//           sm: '2rem',
//           lg: '4rem',
//           xl: '5rem',
//         },
//       },
//     },
//   },
//   plugins: [],
// }


// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#10B981', // Main brand green
        }
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}