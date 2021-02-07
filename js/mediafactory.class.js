
class MediaFactory {

    selector_id_list = "#gallery";
    db;

    /**
     *
     * @param selector_id_list
     * @param db
     */

    constructor(selector_id_list, db) {
        this.selector_id_list = selector_id_list;
        this.db = db;
    }

    /**
     * Create Cards with local database
     */



    build() {
        let pageId = url.match(/[^=/]+$/)[0];
        let photographerMedia = new Array();
        console.log (photographerMedia)
        for (let p of this.db.getDatas().media){
            if (media.image && media.id ==  pageId) {
                photographerMedia.push(new image)
            }
            if (media.video && media.id == pageId) {
                photographerMedia.push(new video)
            }
        }
        console.log(photographerMedia)
        return photographerMedia
    }

    init() {
        let photographerMedia = this.build();
        console.log(photographerMedia)
        for (let i = 0; i < photographerMedia.length; i++) {
            // Add to List
            document.querySelector(this.selector_id_list).innerHTML += photographerMedia[i].getHTML();
        }
    }
}