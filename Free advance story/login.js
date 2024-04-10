document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation
    if (username === "" || password === "") {
        document.getElementById("error-message").textContent = "Please enter username and password.";
        return;
    }

    // Check username and password (in a real application, this would be done server-side)
    if (username === "user" && password === "password") {
        document.getElementById("error-message").textContent = ""; // Clear error message
        alert("Login successful!"); // Replace with your desired action upon successful login
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});
