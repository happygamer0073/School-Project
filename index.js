window.onload = setCss
var elem = document.getElementById("set_style")

function setCss() {
    let fileName = localStorage.getItem('style_name')
    elem.setAttribute('href', fileName)
}

function set_first_style(){
    elem.setAttribute('href', 'style.css')
    localStorage.setItem("style_name", "style.css");
}

function set_second_style(){
    elem.setAttribute('href', 'style1.css')
    localStorage.setItem("style_name", "style1.css");
}

function set_third_style(){
    elem.setAttribute('href', 'style2.css')
    localStorage.setItem("style_name", "style2.css");
}

