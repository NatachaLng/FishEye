//modal 
const modalbg = document.querySelector(".bground");
const formData = document.querySelectorAll(".formData");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//name 
function templateModal(photograph){
  let templateTitle = `Contactez-moi <br> ${photograph.name}`;
  return templateTitle
}

function titleModal() {
  let modalTitle = document.getElementById('modal__title');
  modalTitle.innerHTML= "";
  photographs.forEach((photograph) => {
        let id = photograph.id;;
        if (id == pageId) {    
              modalTitle.innerHTML += templateModal(photograph);
      }
  });
}

// Form elements
let firstName = document.getElementById("first");
let msgFirst = document.getElementById("msgFirst");
let msgLast = document.getElementById("msgLast");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let message = document.getElementById("message");
let msgMessage = document.getElementById("msgMsg");

//validate first name
function validateFirstName(){
    if ((firstName.value.length < 2) || (!firstName.value.match(/^([a-zA-Z]+)$/))){ //double check from HTML
      msgFirst.style.display = "block";
    return false;
      }
      msgFirst.style.display = "none";
    return true;
  }

//validate last name
function validateLastName(){
    if ((lastName.value.length < 2) || (!lastName.value.match(/^([a-zA-Z]+)$/))){ //double check from HTML
      msgLast.style.display = "block";
    return false;
      }
      msgLast.style.display = "none";
    return true;
  }
  
  //validation email 
  function validateEmail(){
    if (!email.value.match(mailformat)){ //double check from HTML
    return false;
      }
    return true;
  }

  //validate message
function validateMessage(){
    if (message.value.length < 2){ //double check from HTML
      msgMessage.style.display = "block";
    return false;
      }
      msgMessage.style.display = "none";
    return true;
  }

  function validate(){
    formValid = true;
    formValid=(formValid && validateFirstName());
    console.log(firstName.value);
    formValid=(formValid && validateLastName());
    console.log(lastName.value);
    formValid=(formValid && validateEmail());
    console.log(email.value); 
    formValid=(formValid && validateMessage());
    console.log(message.value);
    return formValid; // return true as formValid=true
  }