class PhotographerInfos {
    selector_id_list = ".#photographer";
    db;

    /**
     * Constuctor transform class to unique object
     * @param selector_id_list
     * @param db
     * @param pageId
     */
    constructor(selector_id_list, db, pageId) {
        this.selector_id_list = selector_id_list;
        this.db = db;
    }

    /**
     * Init to load Datas and others event
     */
    init() {
        this.createInfos();
    }

    /**
     * Create infos with local database
     */
    createInfos()
            {
        for (let p of this.db.getDatas().photographers) {
            let photographer = new Photographer(
                p.chosenPicture,
                p.city,
                p.country,
                p.id,
                p.name,
                p.portrait,
                p.price,
                p.tagline,
                p.tags
            );
            let pageId = url.match(/[^=/]+$/)[0];
            if (photographer.id == pageId) {
                // Add to List
                document.querySelector(this.selector_id_list).innerHTML += photographer.getHeaderHTML();
                document.querySelector('.bottom__page').innerHTML += photographer.getDetailsHTML();
                document.querySelector('.modal__title').innerHTML += photographer.getTitleModalHTML();
            }
        }
    }
}
