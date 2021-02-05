class Photographer {
    /**
     *
     * @param chosenPicture
     * @param city
     * @param country
     * @param id
     * @param name
     * @param portrait
     * @param price
     * @param tagline
     * @param tags
     */
    constructor(chosenPicture, city, country, id, name, portrait, price, tagline, tags) {
        this.chosenPicture = chosenPicture;
        this.city = city;
        this.country = country;
        this.id = id;
        this.name = name;
        this.portrait = portrait;
        this.price = price;
        this.tagline = tagline;
        this.tags = tags;
    }

    /**
     * Get Card HTML
     * @returns {string}
     */
    getCardHTML() {
        let article = `<article id="photographer-${this.id}" class="card">
                            <a href="pages/photographe.html?id=${this.id}" aria-label="aller vers la page de ${this.name}">
                                <img class="card__image" src="${this.chosenPicture}" alt="">
                                <h3 class="card__name">${this.name}</h3>
                            </a>
                            <p class="card__location">${this.city}, ${this.country}</p>
                            <p class="card__tagline">${this.tagline}</p>
                            <p class="card__price">${this.price}€/jour</p>
                            <ul class="card__taglist" id="taglist_${this.id}">
                                ${this.tags.map(tag => `<li class="tag">#${tag}</li>`).join('')}
                            </ul>
                        </article>`;
        return article;
    }

    getHeaderHTML(){
        let article = `<div class="flex__img"><img class="card__image" src="../${this.chosenPicture}" alt="picture ${this.name}"></div>
  <div class="flex__contact"><button class="contact__btn" onclick="launchModal()" aria-label="Formulaire de contact de ${this.name}">Contactez moi</button></div>
  <div class="flex__details"><h3 class="card__name">${this.name}</h3>
  <p class="card__location">${this.city}, ${this.country}</p>
  <p class="card__tagline">${this.tagline}</p>
  <p class="card__price">${this.price}€/jour</p>
  <ul class="card__taglist" id="taglist_${this.id}">
  ${this.tags.map(tag => `<li class="tag">#${tag}</li>`).join('')}
  </ul>
  <div class="card__number">Nombre total de clichés : </div>
  </div>`;
        return article
    }

}
