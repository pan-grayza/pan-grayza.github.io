//If user in dark mode

const isDarkMode = () => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
}
