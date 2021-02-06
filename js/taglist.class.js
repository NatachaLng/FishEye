class TagList {

    constructor(selector_id_list, db) {
        this.selector_id_list = selector_id_list;
        this.db = db;
    }

        /**
         * Init to load Datas and others event
         */
        init()
        {
            console.log('init()');
            this.allTaglist();
            this.cleanTagList();
            this.createTagList();

            // @todo: onclick
        }


        allTaglist()
        {
            let allTags = new Array();
            for (let p of this.db.getDatas().media) {
                let mediaTags = new tag(
                    p.tags[0])
                    allTags.push(mediaTags);
                // Add to List
                //document.querySelector(this.selector_id_list).innerHTML += mediaTags.getTagHTML();
            }
            return allTags;
        }

        cleanTagList(){
           let allTags = this.allTaglist();
            const uniqueTag = Array.from(new Set(allTags.map(a => a.tags)))
                .map(tags => {
                    return allTags.find(a => a.tags === tags)
                })
           return uniqueTag;
        }

        createTagList(){

        }
    }