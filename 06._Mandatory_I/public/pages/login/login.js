const submitLoginForm = document.getElementById("login-form")

const savedUsername = sessionStorage.getItem("username");
const savedPassword = sessionStorage.getItem("password");

//auto-refill username & password from sign-up
document.getElementById("input-username").value = savedUsername;
document.getElementById("input-password").value = savedPassword;

submitLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const givenUsername = document.getElementById("input-username").value;
    const givenPassword = document.getElementById("input-uassword").value;

    if (savedPassword == givenUsername && savedPassword == givenPassword){
        window.location.href = ("/admin");
    } else {
        const errorText = document.getElementById("message")
        errorText.innerHTML = `
        Wrong username or password. <br> 
        The saved data from session storage is ${savedUsername} and ${savedPassword}. <br> 
        Use this data to log in.
        `
    }
})


