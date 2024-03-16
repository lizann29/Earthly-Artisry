let modal = document.getElementById("myModal");
let closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function () {
  modal.style.display = "none";
  window.location.href = "index.html";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.href = "index.html";
  }
};

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let password = document.getElementById("password").value;

  if (!/^[A-Z][a-zA-Z0-9]{5,}$/.test(username)) {
    alert("Error: Username should start with a capital letter, contain at least 4 characters, and include at least one digit.");
    return;
  }

  if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName)) {
    alert("Error: First name and last name should contain only letters.");
    return;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Error: Invalid email address.");
    return;
  }

  if (address.trim() === "" || city.trim() === "") {
    alert("Error: Address and city cannot be empty.");
    return;
  }

  if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password)) {
    alert("Error: Password must be at least 8 characters long with at least one letter and one digit.");
    return;
  }

  // Create an object with user data
  let userData = {
    username,
    firstName,
    lastName,
    email,
    address,
    city,
    password,
  };

  // Retrieve existing user data from local storage
  let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Add the new user data to the array
  existingUsers.push(userData);

  // Store the updated user data back in local storage
  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("Registration successful!");
  window.location.href = "login.html";
});

function togglePasswordVisibility() {
  let passwordInput = document.getElementById("password");
  let toggleIcon = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    toggleIcon.textContent = "👁️";
  }
}

async function someAsyncOperation() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
}



