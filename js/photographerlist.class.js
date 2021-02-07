class PhotographerList {
    /**
     * Constuctor transform class to unique object
     * @param url
     */
    constructor(selector_id_list, db) {
        this.selector_id_list = selector_id_list;
        this.db = db;
    }

    /**
     * Init to load Datas and others event
     */
    init() {
        console.log('init()');
        this.getPhotographers();
        this.createCards();

        // @todo: onclick
    }

    /**
     * Create Cards with local database
     */
    getPhotographers() {
        console.log("Create cards");
        console.log(this.db);
        let photographers = new Array;
        for (let p of this.db.getDatas().photographers) {
            let allPhotographer = new Photographer(
                p.chosenPicture,
                p.city,
                p.country,
                p.id,
                p.name,
                p.portrait,
                p.price,
                p.tagline,
                p.tags)
            photographers.push(allPhotographer)
        }
        return photographers;
    }

    createCards() {
        // Add to List
        let photographer = this.getPhotographers();
        for (let i = 0; i < photographer.length; i++) {
            document.querySelector(this.selector_id_list).innerHTML += photographer[i].getCardHTML();
        }
    }

    filterCards(text) {
        console.log(text)
        document.querySelector(this.selector_id_list).innerHTML = "";
        let photographer = this.getPhotographers();
        console.log(photographer)
        for (let i = 0; i < photographer.length; i++) {
            let tags = photographer[i].tags;
            let isMatch = (tags.indexOf(text) != -1)
            if (isMatch) {
                document.querySelector(this.selector_id_list).innerHTML += photographer[i].getCardHTML();
            }
        }
        }
}
