const submitSignUpForm = document.getElementById("submit_form")

submitSignUpForm.addEventListener("submit", () => {
    const savedUsername = document.getElementById("inputUsername").value;
    const savedPassword = document.getElementById("inputPassword").value;
    if (!savedUsername || !savedPassword){
        console.log("Error: Failed to fill out the form.");
        return;
    } else {
        localStorage.setItem("username", savedUsername);
        localStorage.setItem("password", savedPassword);
        window.location.href("/login");
    }
})


