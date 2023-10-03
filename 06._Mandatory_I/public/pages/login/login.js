
    document.addEventListener('DOMContentLoaded', () => {
        
        const submitButton = document.getElementById("submit-button");

        submitButton.addEventListener("click", () => {
            document.getElementById("sidebar-login-button").style.display = "none";
            document.getElementById("sidebar-logout-button").style.display = "block";
            window.location.href = "/";
        });

        const logoutButton = document.getElementById("sidebar-logout-button");
    
        logoutButton.addEventListener("click", () => {
            document.getElementById("sidebar-login-button").style.display = "block";
            document.getElementById("sidebar-logout-button").style.display = "none";
            window.location.href = "/";
        });
    });


