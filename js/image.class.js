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
        let article = `<article class="galery__card" data-like="${this.likes}" data-userlike=0 onload="Article()">
    <a href="javascript:void(0);" alt="${this.alt}" aria-label="afficher ${this.alt}"
       class="lightbox__triger" onclick="openLightbox();toSlide(getSlideNumber(${images.prop.id}))"><img
            class="galery__card--image" src="../images/${this.photographerId}/${this.image}" alt='${this.alt}'></a>
    <div class="galery__card--details">
        <div><h4 class="galery__card--title galery__card--text">${this.alt}</h4></div>
        <div class="galery__card--details2"><p class='galery__card--price galery__card--text'>${this.price}€
            <div class="number__likes galery__card--text" aria-label="aimer la photo">${this.like}</div>
            <img class="like" src="../images/1024px-OOjs_UI_icon_heart.jpg" alt="liker la photo ${this.alt}">
        </div>
    </div>
</article>`;
        return article;
    }



}
