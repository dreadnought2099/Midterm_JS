function validateLogin(event) {
  // Prevent default form submission
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Hardcoded valid users
  const validUsers = {
    RMAGALLANEZ: "newt",
  };

  // Validate credentials
  if (validUsers[username] && validUsers[username] === password) {
    alert("Login successful!");
    // Redirect to 'atm.html' on success
    window.location.href = "profile.html";
    return true;
  } else {
    // Display error message on failure
    errorMessage.textContent = "Invalid username or password";
    return false;
  }
}
