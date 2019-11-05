

validateForm = () => {
    const fname = document.getElementById("fname").value
    const fnameInput = document.getElementById("fname")
    const fnameErrorMsg = document.getElementById('fname-error')
    const lname = document.getElementById('lname').value
    const lnameInput = document.getElementById('lname')
    const lnameErrorMsg = document.getElementById('lname-error')
    const email = document.getElementById('email').value
    const emailInput = document.getElementById('email')
    const emailErrorMsg = document.getElementById('email-error')
    const pass = document.getElementById('pass').value
    const passInput = document.getElementById('pass')
    const passErrorMsg = document.getElementById('pass-error')
    event.preventDefault()

    if (fname == "" || fname == null || fname.length == 0) {
        fnameErrorMsg.style.display = "flex";
        fnameInput.style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
        null
    }

    if (lname == "" || lname == null || lname.length == 0) {
        lnameErrorMsg.style.display = "flex"
        lnameInput.style.border = "1px solid hsl(0, 100%, 74%)";
    }  else {
        null
    }

    if (email == '' || email == null || email.length == 0) {
        emailErrorMsg.style.display = "flex"
        emailInput.style.border = "1px solid hsl(0, 100%, 74%)";
    }   else {
        null
    }

    if (pass == '' || pass == null || pass.length == 0) {
        passErrorMsg.style.display = "flex"
        passInput.style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
        null
    }
}

