class image {
    /**
     *
     * @param id
     * @param photographerId
     * @param image
     * @param alt
     * @param tags
     * @param likes
     * @param date
     * @param price
     */
    constructor(id, photographerId, image, alt, tags, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.image = image;
        this.alt = alt;
        this.tags = tags;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }
    /**
     * Get Card HTML
     * @returns {string}
     */
    getHTML() {
        return `<article class="galery__card" data-like="${this.likes}" data-userlike=0 id="${this.id}">
                <a href="javascript:void(0);" alt="${this.alt}" aria-label="afficher ${this.alt}" class="lightbox__triger" onclick="lightbox.openLightbox();lightbox.toSlide(galery.getSlideNumber(${this.id}))"><img class="galery__card--image" src="../images/${this.photographerId}/${this.image}" alt='${this.alt}'></a>
                <div class="galery__card--details">
                <div><h4 class="galery__card--title galery__card--text">${this.alt}</h4></div>
                <div class="galery__card--details2"><p class='galery__card--price galery__card--text'>${this.price}€
                <div class="number__likes galery__card--text" aria-label="aimer la photo">${this.likes}</div>
                <a href="javascript:void(0);" aria-label="liker la photo ${this.alt}" onclick="galery.like('${this.id}')"><img class="like" src="../images/1024px-OOjs_UI_icon_heart.jpg"></a>
                </div>
                </div>
                </article>`;
    }

    /**
     * Get Slider HTML
     * @returns {string}
     */
    getSliderHTML(){
        return `<div class="slide">
                <img class="image-slide" src="../images/${this.photographerId}/${this.image}" alt='${this.alt}'>
                <h4 class="galery__card--title galery__card--text slide__title">${this.alt}</h4>
                   </div>`
    }


    }

