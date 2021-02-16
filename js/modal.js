class Modal {

    /**
     *
     * @param selector_id_list
     */

    constructor(selector_id_list) {
        this.selector_id_list = selector_id_list;
    }

    launchModal(){
        document.querySelector(this.selector_id_list).style.display = "block";
    }

    closeModal(){
        document.querySelector(this.selector_id_list).style.display = "none";
    }

    validateFirstName(){
        let firstName = document.getElementById("first");
        let msgFirst = document.getElementById("msgFirst");
        if ((firstName.value.length < 2) || (!firstName.value.match(/^([a-zA-Z]+)$/))){ //double check from HTML
            msgFirst.style.display = "block";
            return false;
        }
        msgFirst.style.display = "none";
        return true;
    }

    validateLastName(){
        let msgLast = document.getElementById("msgLast");
        let lastName = document.getElementById("last");
        if ((lastName.value.length < 2) || (!lastName.value.match(/^([a-zA-Z]+)$/))){ //double check from HTML
            msgLast.style.display = "block";
            return false;
        }
        msgLast.style.display = "none";
        return true;
    }

    validateEmail(){
        let email = document.getElementById("email");
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.value.match(mailformat)){ //double check from HTML
            return false;
        }
        return true;
    }

    validateMessage(){
        let message = document.getElementById("message");
        let msgMessage = document.getElementById("msgMsg");
        if (message.value.length < 2){ //double check from HTML
            msgMessage.style.display = "block";
            return false;
        }
        msgMessage.style.display = "none";
        return true;
    }

    validate(){
        let formValid = true;
        let firstName = document.getElementById("first");
        formValid=(formValid && this.validateFirstName());
        console.log(firstName.value);
        let lastName = document.getElementById("last");
        formValid=(formValid && this.validateLastName());
        console.log(lastName.value);
        let email = document.getElementById("email");
        formValid=(formValid && this.validateEmail());
        console.log(email.value);
        let message = document.getElementById("message");
        formValid=(formValid && this.validateMessage());
        console.log(message.value);
        this.confirmationMessage();
    }

    confirmationMessage(){
            let formSent = document.getElementById("form__sent");
            formSent.style.display="block";
        }

        closeConfirmationMessage(){
            let formSent = document.getElementById("form__sent");
            formSent.style.display="block";
        }
}


/* function confirmationMessage(){
   if ((validate()==true)){
     let formSent = document.getElementById("form__sent");
   formSent.style.display="block";
   }
 }
//display confirmation

let formSent = document.getElementById("form__sent"); //validation message

/*if(window.location.href.indexOf("?") > 1){ //if the url contain a ? (because of the get method of the datas in the form)
 formSent.style.display = "block"; //then we display the validation message
 }
else{
 formSent.style.display="none"; //otherwise we don't
}*/