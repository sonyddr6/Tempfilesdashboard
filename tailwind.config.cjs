/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#00E5FF", // Neon Cyan
                "primary-dark": "#00B8CC",
                secondary: "#7C4DFF", // Purple accent
                "background-light": "#F3F4F6",
                "background-dark": "#0B0C15",
                "surface-light": "#FFFFFF",
                "surface-dark": "#161822",
                "surface-darker": "#111219",
                "card-dark": "#232736",
                "border-light": "#E5E7EB",
                "border-dark": "#2D303E",
                success: "#0EBA81", // "#00E676",
                warning: "#FFEA00",
                error: "#FF1744",
                danger: "#ef4444",
                bg: {
                    main: '#0f172a',
                    sidebar: '#161822',
                    card: '#1e293b',
                    hover: '#1F2430'
                },
                accent: {
                    teal: '#2dd4bf',
                    cyan: '#00ffff',
                    blue: '#1A73E8',
                    purple: '#a855f7',
                    green: '#10B981',
                    yellow: '#eab308',
                    red: '#ef4444',
                    gray: '#6B7280'
                }
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                'xl': '0.75rem',
                '2xl': '1rem',
            },
            boxShadow: {
                'glow': '0 0 15px rgba(0, 229, 255, 0.15)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ],
}
