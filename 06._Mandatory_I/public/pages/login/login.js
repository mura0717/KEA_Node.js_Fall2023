const savedUsername = sessionStorage.getItem("username");
const savedPassword = sessionStorage.getItem("password");

//auto-refill username & password from sign-up
document.getElementById("input-username").value = savedUsername;
document.getElementById("input-password").value = savedPassword;


//toastr options
toastr.options = {
    "positionClass": "toast-top-center"
}

const submitLoginForm = document.getElementById("login-form")

submitLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const givenUsername = document.getElementById("input-username").value;
    const givenPassword = document.getElementById("input-password").value;

    if (savedUsername === givenUsername && savedPassword === givenPassword){
        window.location.href = ("/admin");
    } else if (!givenUsername || !givenPassword){
        //const errorText = document.getElementById("message")
        //errorText.innerHTML = "Form can't be submitted empty."
        toastr.warning("No empty fields.")
    } else if (!savedUsername || !savedPassword ){
        //const errorText = document.getElementById("message")
        //errorText.innerHTML = "No data in session storage, you haven't signed up yet."
        toastr.error("No data in session storage, you haven't signed up yet.")
    } else {
        //const errorText = document.getElementById("message")
        /* errorText.innerHTML = `
        Wrong username or password. <br> 
        The saved data from session storage is: <br>
        Username: ${savedUsername} <br> 
        Password: ${savedPassword} <br> 
        So use this to log in.
        ` */
        toastr.error(`
        Wrong username or password. <br> 
        The saved data from session storage is: <br>
        Username: ${savedUsername} <br> 
        Password: ${savedPassword} <br> 
        So use this to log in.
        `)
    }
})


