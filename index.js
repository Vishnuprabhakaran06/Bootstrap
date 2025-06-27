// Function to reset error messages
function resetErrorMessages() {
  document.getElementById('nameerror').textContent = '';
  document.getElementById('emailerror').textContent = '';
  document.getElementById('commenterror').textContent = '';
}

// Function to display error messages
function setErrorMessage(field, message) {
  document.getElementById(field).textContent = message;
}

// Main function that runs when the button is clicked
function message() {
  // Reset previous error messages
  resetErrorMessages();

  // Get form field values
  const username = document.getElementById('floatingInputGroup1').value.trim();
  const email = document.getElementById('floatingInput').value.trim();
  const comment = document.getElementById('floatingTextarea2').value.trim();

  let isValid = true;

  // Validate Username
  if (username === '') {
    setErrorMessage('nameerror', 'Username is required');
    isValid = false;
  }

  // Validate Email
  if (email === '') {
    setErrorMessage('emailerror', 'Email is required');
    isValid = false;
  } else if (!validateEmail(email)) {
    setErrorMessage('emailerror', 'Please enter a valid email address');
    isValid = false;
  }

  // Validate Comments
  if (comment === '') {
    setErrorMessage('commenterror', 'Comment is required');
    isValid = false;
  }

  // If everything is valid, you can submit the form or proceed with further actions
  if (isValid) {
    alert('Thanks for Sending Your Message! Our Team Will Contact You in Few Hours ');
    // You can submit the form here, or perform any further actions
  }
  
}

// Simple Email Validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}























function validateform(){


  document.getElementById("emaillerror").textContent=""
}

function msg(field, message) {
  document.getElementById(field).textContent = message;
}
function check(){

  validateform();
  const mail = document.getElementById('floatinginput').value.trim();


  isValid=true

  
   
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

   if (mail==='') {
    msg('emaillerror', 'Email is required....!');
    isValid = false;
   }

     else if(!emailRegex.test(mail)){
      msg('emaillerror', 'Please enter a valid email address');
    isValid=false
   }
  
  
   if(isValid){
    alert("Congrats Know You Can Order")
    
   }
   else{
    alert("Please Enter Your Email Id")
   }

   return isValid

}

function addto(){


alert("You Need to Sign Up")
}