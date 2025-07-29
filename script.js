document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please fill in both username and password.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  // If everything is valid
  alert("Login successful!\nUsername: " + username);
});
