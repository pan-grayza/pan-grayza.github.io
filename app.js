//
//
//
//
/*
<-----------START------------->

<-----------MENU------------->

<-----------START------------->
*/

const script = document.createElement("script")
script.src = "https://code.jquery.com/jquery-3.4.1.min.js"
script.type = "text/javascript"
document.getElementsByTagName("head")[0].appendChild(script)

$('input[id="menu-checkbox"]').on("change", function (e) {
    if ($(this).prop("checked")) {
        $("body").css("overflow-y", "hidden")
        $("a").click(function () {
            $("#menu-checkbox").prop("checked", false)
            $("body").css("overflow-y", "auto")
        })
    } else {
        $("body").css("overflow-y", "auto")
        //$("#menu-checkbox").prop("checked", true)
    }
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
    menu.style = "top: 87.5vh"
}

//If user in dark mode

const isDarkMode = () => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
}
