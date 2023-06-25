
function handleSubmit() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("user_email").value;
  var password = document.getElementById("user_password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  var termsChecked = document.getElementById("exampleCheck1").checked;

  // Check if first name is empty
  if (username === "") {
    alert("Please enter your Username");
    return false;
  } else if (!/^[a-zA-Z]+$/.test(username)) {
    document.getElementById("error").innerHTML =
      "Username should contain only letters ⚠";
    return false;
  } else if (username.length < 2) {
    document.getElementById("error").innerHTML =
      "Username should contain two or more letters ⚠";
    return false;
  }

  // Check if email address is empty or invalid
  if (email === "") {
    alert("Please enter your email address");
    return false;
  } else if (!validateEmail(email)) {
    document.getElementById("invalid").innerHTML = "Please enter a valid email address ⚠";
    return false;
  }


  if (password === "") {
    // Check if password is empty
    alert("Please enter your password");
    return false;
  }

  var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!passwordRegex.test(password)) {
    document.getElementById("message").innerHTML = `
    it must contain a mixture of numbers,
    uppercase and lowercase letters, 
    special character and musn't be less than six⚠`;
    return false;
  } 

  // Check if confirm password is empty and matches the password
  if (confirmPassword === "") {
    alert("Please confirm your password");
    return false;
  } else if (password !== confirmPassword) {
    document.getElementById("errorText").innerHTML = "Passwords do not match";
    return false;
  }

  // Check if terms and conditions checkbox is checked
  if (!termsChecked) {
    alert("Please agree to the Terms and Conditions");
    return false;
  }

  // Form validation successful
  var formData = {
    username: username,
    email: email, 
    password: password,
  };

  // Store the form data or perform any desired operations with it
  console.log(formData);

    

  alert("You have been registered successfully!");
  return true;
}

function validateEmail(email) {
  // A simple regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
