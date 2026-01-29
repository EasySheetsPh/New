/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                teal: {
                    DEFAULT: '#6B8E8C',
                    muted: '#6B8E8C',
                    50: '#F0F5F5',
                    100: '#E1EBEB',
                },
                brand: {
                    blue: '#4A90E2',
                    orange: '#F4A261',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Instrument Sans', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
}
