const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    mode: "jit",
    darkMode: "media", // or 'media' or 'class'
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            width: {
                120: "30rem",
                "general-full": "calc(100% - 2rem)",
                "1/7": "calc(100% / 7)",
                "1/8": "calc(100% / 8)",
            },
            height: {
                "1/4vh": "25vh",
                "1/2vh": "50vh",
                "3/4vh": "75vh",
                menuHeight: "calc(100vh - 5rem)",
            },
            minWidth: {
                "1/4": "25%",
                "1/2": "50%",
                "3/4": "75%",
                16: "16rem",
            },
            minHeight: {
                92: "92px",
                50: "50px",
                135: "135px",
                315: "315px",
            },
            maxWidth: {
                "70vw": "70vw",
                "80%": "80%",
                "90%": "90%",
                10: "10rem",
                16: "16rem",
                1920: "1920px",
                "5/6": "85%",
            },
            maxHeight: {
                img: "calc(.65 * 20rem)",
                "50vh": "50vh",
                "70vh": "70vh",
                "75vh": "75vh",
                "60%": "60%",
                "80%": "80%",
                "90%": "90%",
                8: "8rem",
                10: "10rem",
                152: "38rem",
                48: "48rem",
                64: "64rem",
                phMobile: "calc((100vw / 4) * 1.8)",
                phTablet: "calc((100vw / 6) * 1.3)",
                phDesktop: "calc((100vw / 12) * 0.625)",
            },
            spacing: {
                4.5: "1.125rem",
                15: "3.75rem",
                17.5: "4.375rem",
                22: "8rem",
                "gi-double": "2rem",
                "text-full-margin": "calc((100vw - 1017px) / 2)",
            },
            borderRadius: {
                card: "3.75rem",
                avatar: "9999px",
            },
            strokeWidth: {
                '3': '3',
                '4': '4',
                '5': '5',
                '6': '6',
            },
            zIndex: {
                "-1": "-1",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                100: "100",
                1100: "1100",
                1101: "1101",
            },
            lineHeight: {
                2: "0.625rem",
                heightOne: "clamp(3rem, 10vw, 5rem)",
                heightTwo: "clamp(1.8rem, 6vw, 2rem)",
                initial: "initial",
            },
            transitionDuration: {
                20: "20ms",
            },
            boxShadow: {
                btn: "0px 3px 1px - 2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                deepInner: "inset 0 2px 6px 0 rgb(0 0 0 / 18%)",
            },
            scale:{
                '10': '.1',
                '25': '.25',
                '35': '.35',
                '40': '.40',
                '60': '.60',
            },
            rotate:{
                '4': '4deg',
            },
            blur: {
                xs: '2px',
            },
            colors: {
                darkBg: "#191E23",
                lightBg: "#ffffff",
                borderColor: "#537798",

                primary: "#537798",
                secondary: "#03cbf9",
                tertiary: "#90D51B",
                quaternary: "#1E2A36",
                quinary: "#191E23",

                accent: "#F04537",

                google: "#ff0000",
                facebook: "#1877f2",
                info: "#2196f3",
                warning: "#ff9800",
                danger: "#ff5b5b",
                success: "#4caf50",
            },
            fontSize: {
                0.4: ".4rem",
                0.5: ".5rem",
                0.6: ".6rem",
                0.7: ".7rem",
                0.8: ".8rem",
                0.9: ".9rem",
                heightOne: "clamp(3rem, 10vw, 5rem)",
                heightTwo: "clamp(1.2rem, 6vw, 2rem)"
            },
            fontFamily: {
                'display': [ ...defaultTheme.fontFamily.sans],
                'serif': [ ...defaultTheme.fontFamily.serif],
            },
            transitionTimingFunction: {
                textBox: "cubic-bezier(0.0, 0, 0.2, 1)",
            },
            backgroundImage: () => ({
                bigWins: "url('/icons/big-win.jpg')",
                showMore: `linear-gradient(hsla(0,0%,100%,0), #4caf50)`,
                btnCTA: `linear-gradient(106deg, #8343c8 0%, #8343c8 100%)`,
            }),
            backgroundSize: {
                20: "1rem 1rem",
            },
            backgroundPosition: {
                pattern: "0.5rem 0, 0.5rem 0, 0 0, 0 0",
            },
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-60px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "pulse-anim-live": {
                    "0%": {
                        opacity: ".95",
                        color: "white",
                        transform: "scale(1)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "scale(1.05)",
                    },
                },
                "rotate-anim-live": {
                    "0%": {
                        opacity: "1",
                        transform: "rotate(0.45deg)",
                    },
                    "50%": {
                        opacity: "0.85",
                        transform: "rotate(-0.65deg)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "rotate(0.65deg)",
                    },
                },
                "progress": {
                    "0%": {
                        strokeDasharray: "0 100",
                    }
                },
            },
            animation: {
                "fade-in-down": "fade-in-down 0.5s ease-out",
                "pulse-anim-live": "pulse-anim-live 0.65s linear infinite alternate forwards",
                "rotate-anim-live": "rotate-anim-live 2s linear infinite alternate forwards",
                "progress": "progress 1s ease-out forwards",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio")
    ],
}