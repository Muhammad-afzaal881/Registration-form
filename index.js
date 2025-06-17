let logincard = document.getElementById("login")
let signcard = document.getElementById("sign")
let messagecard = document.getElementById("message")
let resetcard = document.getElementById("reset")
let profilecard = document.getElementById("profile")
let input = document.getElementById("name")
let text = document.getElementById("text")

function sign(){
    text.append(input.value)
    signcard.style.display = "none"
    messagecard.style.display ="block"
}

function login(){
    signcard.style.display ="none"
    logincard.style.display ="block"
}

function profile() {
    text.append("Divad johns")
    profilecard.style.display = "block"
    logincard.style.display ="none"
}

function message(){
    profilecard.style.display ="block"
    messagecard.style.display ="none"

}

function clickhere(){
    resetcard.style.display ="block"
    logincard.style.display ="none"
}

function back(){
    signcard.style.display = "block"
    resetcard.style.display ="none"
}
