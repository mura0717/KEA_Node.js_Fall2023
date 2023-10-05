const submitSignUpForm = document.getElementById("sign-up-form")

submitSignUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputUsername = document.getElementById("inputUsername").value;
    const inputPassword = document.getElementById("inputPassword").value;
    sessionStorage.setItem("username", inputUsername);
    sessionStorage.setItem("password", inputPassword);
    if (!inputUsername && !inputUsername) {
        alert("Error: Form can't be empty.");
        console.log("Error: Form can't be empty.");
    } else {
        window.location.href = ("/login");
    }
})


