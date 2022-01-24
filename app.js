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

//If user in dark mode

const isDarkMode = () => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
}
