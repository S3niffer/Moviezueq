/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "0.5rem",
                480: "1rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "2.5rem",
            },
        },
        extend: {
            colors: {
                added: {
                    schoolbus: "var(--schoolbusyellow)",
                    white: "var(--white)",
                    delftblue: "var(--delftblue)",
                    oxfordblue: "var(--oxfordblue)",
                    charcoal: "var(--charcoal)",
                    slategray: "var(--slategray)",
                },
            },
            fontFamily: {
                FaFont: "FaFont",
                EnFont: "EnFont",
            },
            height: {
                navBarHeight: "var(--navbar-height)",
            },
            screens: {
                480: "480px",
            },
        },
    },
    plugins: [],
}
