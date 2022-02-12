const copyButton = document.querySelector(".btn-three")
const textarea = document.querySelector("textarea")
const copiedDiv = document.querySelector(".copied-text")
const parallaxWrapper = document.querySelector(".parallax-wrapper")
const windowWidth = window.innerWidth > 0 ? window.innerWidth : screen.width
const windowHeight = window.innerHeight > 0 ? window.innerHeight : screen.height
/*
<-----------START------------->

<-----------MENU------------->

<-----------START------------->
*/

let menuCheckbox = document.getElementById("menu-checkbox")
let menuA = document.querySelectorAll(".menu-a")
menuCheckbox.addEventListener("click", () => {
    if (menuCheckbox.checked) {
        document.body.style.overflowy = "hidden"
    } else {
        document.body.style.overflowy = "auto"
        //menuCheckbox.checked = true
    }
})

menuA.forEach.call(menuA, function (element) {
    element.addEventListener("click", () => {
        if (menuCheckbox.checked) {
            menuCheckbox.checked = false
        } else {
            document.body.style.overflowy = "auto"
            //menuCheckbox.checked = true
        }
    })
})
/*
<-----------END------------->

<-----------MENU------------->

<-----------END------------->
*/

const getBrowser = () => {
    if (navigator.userAgent.indexOf("Chrome") != -1) {
        return "Chrome"
    } else if (navigator.userAgent.indexOf("Opera") != -1) {
        return "Opera"
    } else if (navigator.userAgent.indexOf("MSIE") != -1) {
        return "IE"
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return "Firefox"
    } else {
        return "unknown"
    }
}

const menu = document.getElementsByClassName("menu")[0]

if (getBrowser() === "Chrome") {
    menu.style.top = "100vh"
}

// Copy Button

copyButton.addEventListener("click", () => {
    textarea.value = "zagraystepan@gmail.com"
    document.execCommand("copy", textarea.select())
    copiedDiv.style.top = "85%"
    copiedDiv.style.opacity = "1"
    setTimeout(() => {
        copiedDiv.style.top = "105%"
        copiedDiv.style.opacity = "0"
    }, 4000)
})
//
//If user in dark mode
//
const isDarkMode = () => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
}

//
// Generating background circles
//

let numberOfCircles

if (windowWidth > 800) {
    numberOfCircles = Math.round((windowHeight * windowWidth) / 75000)
} else {
    numberOfCircles = Math.round((windowHeight * windowWidth) / 40000)
}

const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min
}

let i = numberOfCircles
let n = 1
let x
let y
let z
if (getBrowser() === "Chrome") {
    while (i > 0) {
        x = getRandomNumber(1000, -500)
        y = getRandomNumber(500, -500)
        z = getRandomNumber(-50, -250)

        let circle = document.createElement("div")
        circle.classList.add("circle")
        circle.classList.add(`circle-${n}`)
        parallaxWrapper.appendChild(circle)

        let circleStyle = document.querySelector(`.circle-${n}`)
        circleStyle.style.transform = `translateX(${x}vw)`
        circleStyle.style.transform = `translateY(${y}vh)`
        circleStyle.style.transform = `translateZ(${z}px)`
        circleStyle.style.left = `${getRandomNumber(130, -30)}vw`
        circleStyle.style.top = `${getRandomNumber(140, -40)}vh`
        circleStyle.style.zIndex = `${z}`

        n++
        i--
    }
} else {
    while (i > 0) {
        x = getRandomNumber(1000, -500)
        y = getRandomNumber(500, -500)
        z = getRandomNumber(-50, -250)

        let circle = document.createElement("div")
        circle.classList.add("circle")
        circle.classList.add(`circle-${n}`)
        parallaxWrapper.appendChild(circle)

        let circleStyle = document.querySelector(`.circle-${n}`)
        circleStyle.style.transform = `translateX(${x}vw)`
        circleStyle.style.transform = `translateY(${y}vh)`
        circleStyle.style.transform = `translateZ(${z}px)`
        circleStyle.style.left = `${getRandomNumber(110, -30)}vw`
        circleStyle.style.top = `${getRandomNumber(150, -10)}vh`
        circleStyle.style.zIndex = `${z}`

        n++
        i--
    }
}
