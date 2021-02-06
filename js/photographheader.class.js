class PhotographerHeader {
    /**
     * Private property (pas supporté sinon possible de mettre un # devant)
     */
    selector_id_list = "#photographer";
    db;

    /**
     * Constuctor transform class to unique object
     * @param url
     */
    constructor(selector_id_list, db, pageId) {
        this.selector_id_list = selector_id_list;
        this.db = db;
        this.pageId = pageId
    }

    /**
     * Init to load Datas and others event
     */
    init() {
        this.createHeader();

        // @todo: Bind events
    }

    /**
     * Create Cards with local database
     */
    createHeader()
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
            pageId = url.match(/[^=/]+$/)[0];
            if (photographer.id == pageId) {
                // Add to List
                document.querySelector(this.selector_id_list).innerHTML += photographer.getHeaderHTML();
            }
        }
    }
}
