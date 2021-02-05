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
            this.createTaglist();

            // @todo: onclick
        }

        createTaglist()
        {
            console.log("CreateTagList");
            console.log(this.db);
            for (let p of this.db.getDatas().photographers) {
                let tags = new tag(
                    p.tags
                );

                // Add to List
                document.querySelector(this.selector_id_list).innerHTML += tags.getTagHTML();
            }
        }
    }