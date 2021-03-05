class Modal {

    /**
     *
     * @param selector_id_list
     */
    constructor(selector_id_list) {
        this.selector_id_list = selector_id_list;
        this.url = url
    }

    /**
     * Display the modal
     */
    launchModal(){
        document.querySelector(this.selector_id_list).style.display = "block";
    }

    /**
     * Hide the modal
     */
    closeModal(){
        document.querySelector(this.selector_id_list).style.display = "none";
    }

    /**
     * Validate the first name
     * @return {boolean}
     */
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

    /**
     * Validate the last name
     * @return {boolean}
     */
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

    /**
     * Validate the email
     * @return {boolean}
     */
    validateEmail(){
        let email = document.getElementById("email");
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.value.match(mailformat)){ //double check from HTML
            return false;
        }
        return true;
    }

    /**
     * Validate the message
     * @return {boolean}
     */
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

    /**
     * Validate the form
     */
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
    }

}

