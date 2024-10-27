function validateLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // hardcoded or predefined valid users
  const validUsers = {
    RMAGALLANEZ: "newt",
    Yutang: "demon",
  };

  if (validUsers[username] && validUsers[username] === password) {
    localStorage.setItem("loggedInUser", username);
    alert("Welcome " + username + "!");

    if (username === "RMAGALLANEZ") {
      window.location.href = "profile/RMAGALLANEZ.html";
    } else if (username === "Yutang") {
      window.location.href = "profile/Yutang.html";
    }

    return true;
  } else {
    errorMessage.textContent = "Invalid username or password";
    return false;
  }
}
