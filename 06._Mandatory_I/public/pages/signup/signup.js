const submitSignUpForm = document.getElementById("sign-up-form")

submitSignUpForm.addEventListener("submit", () => {
    const savedUsername = document.getElementById("inputUsername").value;
    const savedPassword = document.getElementById("inputPassword").value;
    if (!savedUsername && !savedPassword){
        console.log("Error: Form can't be empty.");
        return;
    } else {
        localStorage.setItem("username", savedUsername);
        localStorage.setItem("password", savedPassword);
        window.location.href = ("/login");
    }
})


