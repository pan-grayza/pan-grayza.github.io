const copyButton = document.querySelector(".btn-three")
const textarea = document.querySelector("textarea")
const copiedDiv = document.querySelector(".copied-text")

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
        copiedDiv.style.opacity = "0.25"
    }, 4000)
})
//
//If user in dark mode
//
const isDarkMode = () => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
}
