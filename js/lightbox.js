
let slideIndex = 1;

class Lightbox {

    /**
     * @param selector_id_list
     */

    constructor(selector_id_list) {
        this.selector_id_list = selector_id_list
    }

    /**
     * Open lightbox
     */

    openLightbox() {
        document.querySelector(this.selector_id_list).style.display = 'block';
    }

    /**
     * Close lightbox
     */

    closeLightbox() {
        document.querySelector(this.selector_id_list).style.display = 'none';
    }

    /**
     * Go to the correct slide
     * @param n
     * @returns {number}
     */

    toSlide(n) {
        this.showSlide(slideIndex = n);
        return n
    }

    /**
     * Show the correct slide
     * @param n
     * @returns {number}
     */

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

    /**
     * Change slide
     * @param n {number}
     */

    plusSlides(n) {
        this.showSlide(slideIndex += n);
    }
}

