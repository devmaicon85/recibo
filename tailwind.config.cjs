/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: "Inter, sans-serif",
        },
        extend: {
            colors: {
                primary: "#bc30f3",
            },
            screens: {
                xs: "300px",
            },
        },
    },
    plugins: [],
};
