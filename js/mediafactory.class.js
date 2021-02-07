
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
            console.log(p);
            console.log(pageId)
            if (p.image && p.photographerId ==  pageId) {
                photographerMedia.push(new image(p.id, p.photographerId, p.image, p.alt, p.tags, p.likes, p.date, p.price))
            }
            if (p.video && p.photographerId == pageId) {
                photographerMedia.push(new video(p.id, p.photographerId, p.video, p.alt, p.tags, p.likes, p.date, p.price))
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