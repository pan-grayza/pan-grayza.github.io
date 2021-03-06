const copyButton = document.querySelector('.btn-three')
const textarea = document.querySelector('textarea')
const copiedDiv = document.querySelector('.copied-text')
const parallaxWrapper = document.querySelector('.parallax-wrapper')
const main = document.querySelector('main')
const windowWidth = window.innerWidth > 0 ? window.innerWidth : screen.width
const windowHeight = window.innerHeight > 0 ? window.innerHeight : screen.height
/*
<-----------START------------->

<-----------MENU------------->

<-----------START------------->
*/

let menuCheckbox = document.getElementById('menu-checkbox')
let menuA = document.querySelectorAll('.menu-a')
menuCheckbox.addEventListener('click', () => {
    if (menuCheckbox.checked) {
        document.body.style.overflowy = 'hidden'
    } else {
        document.body.style.overflowy = 'auto'
        //menuCheckbox.checked = true
    }
})

menuA.forEach.call(menuA, function (element) {
    element.addEventListener('click', () => {
        if (menuCheckbox.checked) {
            menuCheckbox.checked = false
        } else {
            document.body.style.overflowy = 'auto'
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
    if (navigator.userAgent.indexOf('Chrome') != -1) {
        return 'Chrome'
    } else if (navigator.userAgent.indexOf('Opera') != -1) {
        return 'Opera'
    } else if (navigator.userAgent.indexOf('MSIE') != -1) {
        return 'IE'
    } else if (navigator.userAgent.indexOf('Firefox') != -1) {
        return 'Firefox'
    } else {
        return 'unknown'
    }
}

const isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
        return p.toString() === '[object SafariRemoteNotification]'
    })(
        !window['safari'] ||
            (typeof safari !== 'undefined' && window['safari'].pushNotification)
    )

const menu = document.getElementsByClassName('menu')[0]

if (getBrowser() === 'Chrome' || isSafari) {
    menu.style.top = '100vh'
} else {
    menu.style.top = '40vh'
}

// Copy Button

copyButton.addEventListener('click', () => {
    textarea.value = 'zagraystepan@gmail.com'
    document.execCommand('copy', textarea.select())
    copiedDiv.style.top = '85%'
    copiedDiv.style.opacity = '1'
    setTimeout(() => {
        copiedDiv.style.top = '105%'
        copiedDiv.style.opacity = '0'
    }, 4000)
})
//
//If user in dark mode
//
const isDarkMode = () => {
    window.matchMedia('(prefers-color-scheme: dark)').matches
}

//
// Generating background circles
//

let numberOfCircles

const mainHeight = main.offsetHeight
const mainWidth = main.offsetWidth

if (windowWidth > 800) {
    numberOfCircles = Math.round((mainHeight * mainWidth) / 100000)
} else {
    numberOfCircles = Math.round((mainHeight * mainWidth) / 65000)
}

const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min
}

let i = numberOfCircles
let n = 1
let z

while (i > 0) {
    z = getRandomNumber(-40, -250)

    let circle = document.createElement('div')
    circle.classList.add('circle')
    circle.classList.add(`circle-${n}`)
    parallaxWrapper.appendChild(circle)

    let circleStyle = document.querySelector(`.circle-${n}`)
    circleStyle.style.transform = `translateZ(${z}px)`

    circleStyle.style.left = `${getRandomNumber(
        mainWidth,
        (-1 * mainWidth) / 10
    )}px`

    circleStyle.style.top = `${getRandomNumber(mainHeight, -10)}px`

    circleStyle.style.zIndex = `${z}`

    n++
    i--
}
