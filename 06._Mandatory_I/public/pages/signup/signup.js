const submitSignUpForm = document.getElementById("sign-up-form")

submitSignUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputUsername = document.getElementById("input-username").value;
    const inputPassword = document.getElementById("input-password").value;
    sessionStorage.setItem("username", inputUsername);
    sessionStorage.setItem("password", inputPassword);
    if (!inputUsername && !inputUsername) {
        const errorText = document.getElementById("message")
        errorText.innerHTML = "Form can't be submitted empty."
    } else {
        window.location.href = ("/login");
    }
})


