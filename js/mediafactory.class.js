
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
        for (let p of this.db.getDatas().media){
            if (p.image && p.photographerId ==  pageId) {
                photographerMedia.push(new image(p.id, p.photographerId, p.image, p.alt, p.tags, p.likes, p.date, p.price))
            }
            if (p.video && p.photographerId == pageId) {
                photographerMedia.push(new video(p.id, p.photographerId, p.video, p.alt, p.tags, p.likes, p.date, p.price))
            }
        }
        return photographerMedia
    }

    init() {
        let photographerMedia = this.build();
        console.log(photographerMedia)
        for (let i = 0; i < photographerMedia.length; i++) {
            // Add to List
            document.querySelector(this.selector_id_list).innerHTML += photographerMedia[i].getHTML();
        }
        //document.querySelector("#sortByDate").addEventListener(this.sortByDate())
    }
/*
    sortByDate() {
        let photographerMedia = this.build();
        photographerMedia.sort(function(a, b){
            let c = new Date(a.date);
            let d = new Date(b.date);
            return c - d;
            });
            this.init();
        }*/
    }