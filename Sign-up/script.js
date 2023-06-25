function handleLogin() {
  var email = document.getElementById("user_email").value;
  var password = document.getElementById("user_password").value;

  // Check if email address is empty or invalid
  if (email === "") {
    alert("Please enter your email address");
    return false;
  } else if (!validateEmail(email)) {
    document.getElementById("invalid").innerHTML = "Please enter a valid email address ⚠";
    return false;
  }

  // Check if password is empty
  if (password === "") {
    alert("Please enter your password");
    return false;
  }

  // Perform login authentication
  // You can add your own logic here to validate the email and password

  // Form validation successful
  var formData = {
    email: email,
    password: password,
  };

  // Store the form data or perform any desired operations with it
  console.log(formData);

  alert("You have been logged in successfully!");
  return true;
}
