function redirectToLogin(event) {
    event.preventDefault();
    window.location.href = "main.html"; // redirect to login page
  }

  function handleLogin(event) {
    event.preventDefault();
    window.location.href = "project.html"; // Your game file
  }
  
function validateSignup(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find((user) => user.email === email)) {
    alert("Email already registered!");
    return;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful!");
  window.location.href = "main.html";
}


function validateLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const validUser = users.find((user) => user.email === email && user.password === password);

  if (validUser) {
    alert("Login successful!");
    window.location.href = "project.html"; // Redirect to game page
  } else {
    alert("Invalid email or password!");
  }
}