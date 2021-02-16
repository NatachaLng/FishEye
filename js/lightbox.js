
var slideIndex = 1;

class Lightbox {

    /**
     * @param selector_id_list
     * @param db
     */

    constructor(selector_id_list) {
        this.selector_id_list = selector_id_list
    }

    openLightbox() {
        document.querySelector(this.selector_id_list).style.display = 'block';
    }

    closeLightbox() {
        document.querySelector(this.selector_id_list).style.display = 'none';
    }

    toSlide(n) {
        this.showSlide(slideIndex = n);
        return n
    }

    showSlide(n) {
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length) {
            slideIndex = 1;
        };

        if (n < 1) {
            slideIndex = slides.length;
        };

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        };
        slides[slideIndex - 1].style.display = 'block';
        return slideIndex
    }

    plusSlides(n) {
        this.showSlide(slideIndex += n);
    }
}



  




// Initialize here and run showSlide() to give your lightbox a default state.

    /*let slideIndex = 1;

    document.addEventListener("keydown", checkKey);

    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '27') {
            closeLightbox();
        }
        else if (e.keyCode == '37') {
            goPrevious();
        }
        else if (e.keyCode == '39') {
            goNext();
        }

    }*/





