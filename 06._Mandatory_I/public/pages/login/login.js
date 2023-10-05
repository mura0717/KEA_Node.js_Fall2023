const savedUsername = sessionStorage.getItem("username");
const savedPassword = sessionStorage.getItem("password");

//auto-refill username & password from sign-up
document.getElementById("input-username").value = savedUsername;
document.getElementById("input-password").value = savedPassword;


const submitLoginForm = document.getElementById("login-form")

submitLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const givenUsername = document.getElementById("input-username").value;
    const givenPassword = document.getElementById("input-password").value;

    if (savedPassword == givenUsername && savedPassword == givenPassword){
        window.location.href = ("/admin");
    } else {
        const errorText = document.getElementById("message")
        errorText.innerHTML = `
        Wrong username or password. <br> 
        The saved data from session storage is: <br>
        Username: ${savedUsername} <br> 
        Password: ${savedPassword} <br> 
        So use this to log in.
        `
    }
})


