const submitLoginForm = document.getElementById("login-form")

const savedUsername = sessionStorage.getItem("username");
const savedPassword = sessionStorage.getItem("password");

submitLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let username = document.getElementById("inputUsername").value
    let password = document.getElementById("inputPassword").value
    username = savedUsername;
    password = savedPassword;
    if (username == savedPassword && password == savedPassword){
        window.location.href = ("/admin");
    } else {
        console.log("Error: Wrong username or password.");
        return;
    }
})


