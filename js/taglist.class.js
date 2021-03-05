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
            this.allTaglist();
            this.cleanTagList();
            this.createTagList();
        }

        /**
        * Get all tags
        * @return {Array}
        */
        allTaglist()
        {
            let allTags = new Array();
            for (let p of this.db.getDatas().media) {
                let mediaTags = new tag(
                    p.tags[0])
                    allTags.push(mediaTags);
            }
            return allTags;
        }

        /**
        * Clean the tag list to get unique tags
        * @return {Array}
        */
        cleanTagList(){
           let allTags = this.allTaglist();
            const uniqueTag = Array.from(new Set(allTags.map(a => a.tags)))
                .map(tags => {
                    return allTags.find(a => a.tags === tags)
                })
           return uniqueTag;
        }

        /**
        * Create the tag list from the clean list
        */
        createTagList(){
            let tagList = this.cleanTagList();
            for (let i = 0; i < tagList.length; i++){
                document.querySelector(this.selector_id_list).innerHTML += tagList[i].getTagHTML();
            }
        }
    }