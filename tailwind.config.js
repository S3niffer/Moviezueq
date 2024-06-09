/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
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
        },
    },
    plugins: [],
}
