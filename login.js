document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let enteredUsername = document.getElementById("loginUsername").value.trim();
    let enteredPassword = document.getElementById("loginPassword").value.trim();

    let userData = localStorage.getItem("users");

if (userData) {
    userData = JSON.parse(userData);

    console.log("Entered Username:", enteredUsername);
    console.log("Entered Password:", enteredPassword);
    console.log("Stored Users:", userData);

    let foundUser = userData.find(user =>
        user.username.trim() === enteredUsername && user.password.trim() === enteredPassword
    );

    if (foundUser) {
        alert("Login was successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
} else {
    alert("No registered users found. Please register first.");
}

});
