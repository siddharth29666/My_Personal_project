/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'elegant': ['"Playfair Display"', 'serif'],
                'body': ['"Poppins"', 'sans-serif'],
            },
            colors: {
                softBlush: '#ffe5ec',
                champagneGold: '#d4af37',
                roseGold: '#e0bfb8',
                minimalWhite: '#fafafa',
                mutedPink: '#f3c4c4',
                elegantDark: '#4a3f35', // For text
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-up': 'slideUp 1s ease-out forwards',
                'subtle-pulse': 'pulse 4s infinite ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
