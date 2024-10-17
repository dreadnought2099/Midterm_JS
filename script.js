function validateLogin(event) {
  // Prevent default form submission
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Hardcoded valid users
  const validUsers = {
    RMAGALLANEZ: "newt",
    Yutang: "demon",
  };

  // Validate credentials
  if (validUsers[username] && validUsers[username] === password) {
    alert("Login successful!");

    if (username === "RMAGALLANEZ") {
      window.location.href = "RMAGALLANEZ.html";
    } else if (username === "Yutang") {
      window.location.href = "Yutang.html";
    }

    return true;
  } else {
    errorMessage.textContent = "Invalid username or password";
    return false;
  }
}
