function showError(inputElement, errorMessage){
    inputElement.style.borderColor = "red";
    let nextElement = inputElement.nextElementSibling;

    if (nextElement){
      errorImgElement = nextElement;
    }
    else{
      errorImgElement = document.createElement("img");
      errorImgElement.src = "icon-error.svg";
      inputElement.after(errorImgElement);
    }

    nextElement = errorImgElement.nextElementSibling;
    
    if (nextElement){
      errorElement = nextElement;
    }
    else{
      errorElement = document.createElement("p");
      errorElement.classList.add("input-error");
      errorImgElement.after(errorElement);
    }
    errorElement.textContent = errorMessage;

}
function handleForm(event){
  let forms = document.getElementsByTagName("form");
  let form = forms[0];
  let firstName = document.querySelector("form input#firstname");
  let lastName = document.querySelector("form input#lastname");
  let email = document.querySelector("form input#email");
  let password = document.querySelector("form input#password");

  let errorElement;
  let errorImgElement;
  
  if (firstName.value == ""){
    showError(firstName, "First Name cannot be empty");
  }

  if (lastName.value == ""){
    showError(lastName, "Last Name cannot be empty");
  }
  
  if (email.value == ""){
    showError(email, "Email cannot be empty");
  }
  else if(email.validity.typeMismatch){
    showError(email, "Looks like this is not an email")
  }

  if (password.value == ""){
    showError(password, "Password cannot be empty");
  }
}

function validateForm(){
  console.log("Inside validateForm");
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener('click', handleForm);
}

validateForm();