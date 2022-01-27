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

//
//If user in dark mode
//
const isDarkMode = () => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
}
