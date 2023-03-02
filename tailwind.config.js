/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.tsx", "./public/index.html"],
    theme: {
        fontFamily: {
            primary: "Poppins",
            "body": ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
            "sans": ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
        },
        container: {
            padding: {
                DEFAULT: "30px",
                lg: "0"
            }
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1440px"
        },
        extend: {
            colors: {
                // primary: "#222222",
                primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
                // secondary: "#F5E6E0"
            },
            backgroundImage: {
                hero: "url('./img/bg_hero.svg')"
            }
        }
    },
    plugins: []
};
