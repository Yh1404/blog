module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts}",
    ],
    theme: {
        screens: {
            '2xl': { 'max': '1535px' },
            // => @media (max-width: 1535px) { ... }

            'xl': { 'max': '1279px' },
            // => @media (max-width: 1279px) { ... }

            'lg': { 'max': '1023px' },
            // => @media (max-width: 1023px) { ... }

            'md': { 'max': '767px' },
            // => @media (max-width: 767px) { ... }

            'sm': { 'max': '639px' },
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            keyframes: {
                appear: {
                    '0%, 25%': { opacity: 0 },
                    '100%': { opacity: 100 }
                },
                out: {
                    '0%': { opacity: 100, position: 'relative', left: 0 },
                    '100%': { opacity: 10, left: '-3999px', position: 'relative' }
                }
            },
            animation: {
                appear: 'appear 1s ease-in-out',
                out: 'out .5s ease-in-out'
            }
        }
    },
    plugins: [],
}