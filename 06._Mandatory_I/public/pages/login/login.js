const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

document.getElementById("inputUsername").value.setItem(savedUsername);
document.getElementById("inputPassword").value.setItem(savedPassword);

submitLoginForm.addEventListener("submit", () => {
    if (savedUsername == localStorage.getItem("username") && savedPassword == localStorage.getItem("password")){
        window.location.href("/admin");
    } else {
        console.log("Error: Failed to fill out the form.");
        return;
    }
})


