var form = document.getElementById("form__container")
var namee = document.getElementById("input__name")
var email = document.getElementById("input__email")
var password = document.getElementById("input__password")

var submit = document.getElementById("submit__btn")

var name__error = document.getElementById("name__error")
var email__error = document.getElementById("email__error")
var password__error = document.getElementById("password__error")

form.addEventListener("submit", function (event) {  //here v can use (e)=>{} , instead of function

    var email__check = /^([A-Za-z0-9_\-\.])+\@([A -Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //email should be in this format only
    if (namee.value === "" || namee.value == null) { // name cant be empty or null
        event.preventDefault() 
        name__error.innerText = "Name is Required"//printing error message
    }
    else{
        name__error.innerText = ""//if name is correct , wont print error message
    }

    if (!email.value.match(email__check)) //!(not meaning),if email.value not match email__check(nu meaning)
    {
        event.preventDefault()
        email__error.innerText = "Enter valid email id"
    }
    else{
        email__error.innerText = ""
    }

    if (password.value <= 6) {
        event.preventDefault()
        password__error.innerText = "Password should be min 6 character"
    }
    if (password.value.length > 15) { //pswd length should be less than 15
        event.preventDefault()
        password__error.innerText = "Password should be less than 15 character"
    }

    if (password.value === "password") { // password should not be password
        event.preventDefault()
        password__error.innerText = "Password can't be Password"
    }

})

