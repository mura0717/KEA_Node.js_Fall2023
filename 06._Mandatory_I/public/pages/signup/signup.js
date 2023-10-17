//toastr options
toastr.options = {
    "positionClass": "toast-top-center"
}

const submitSignUpForm = document.getElementById("sign-up-form")

submitSignUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputUsername = document.getElementById("input-username").value;
    const inputPassword = document.getElementById("input-password").value;
    sessionStorage.setItem("username", inputUsername);
    sessionStorage.setItem("password", inputPassword);
    if (!inputUsername && !inputUsername) {
        //const errorText = document.getElementById("message")
        //errorText.innerHTML = "Form cannot be submitted empty."
        toastr.warning("No empty fields.")
    } else {
        window.location.href = ("/login");
    }
})


