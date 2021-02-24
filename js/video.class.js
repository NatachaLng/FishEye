class video {

    /**
     *
     * @param id
     * @param photographerId
     * @param video
     * @param alt
     * @param tags
     * @param likes
     * @param date
     * @param price
     */
    constructor(id, photographerId, video, alt, tags, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.video = video;
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
                <a href ="javascript:void(0);" aria-label="afficher ${this.alt}" class="lightbox__triger"><video class="galery__card--video" onclick="lightbox.openLightbox();lightbox.toSlide(galery.getSlideNumber(${this.id}))">
                <source src="../images/${this.photographerId}/${this.video}" type="video/mp4" alt='${this.alt}'>
                </video></a>
                <div class="galery__card--details">
                <div><h4 class="galery__card--title galery__card--text">${this.alt}</h4></div>
                <div class="galery__card--details2"><p class='galery__card--price galery__card--text'>${this.price}€<div class="number__likes galery__card--text" aria-label="aimer la vidéo">${this.likes}</div><img class="like" src="../images/1024px-OOjs_UI_icon_heart.jpg" alt="liker la photo ${this.alt}" onclick="galery.like('${this.id}')"></div>
                </div>
                </article>`;
    }

    /**
     * Get Slider HTML
     * @return {string}
     */
    getSliderHTML(){
        return `<div class="slide">
                <video controls="true" class="image-slide">
                <source src="../images/${this.photographerId}/${this.video}" type="video/mp4" alt='${this.alt}' class="image-slide"><video>
                <h4 class="galery__card--title galery__card--text slide__title">${this.alt}</h4>
                </div>`
    }

}
