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

    check(text, tag){
        let checkedTag = document.getElementsByClassName("active");
        if (checkedTag.length != 0){
            console.log ()
            //checkedTag[0].setAttribute('data-clic', 0)
            checkedTag[0].classList.remove('active');
            this.filterCards(text, tag)
        }
        else{
            this.filterCards(text, tag)
        }
    }

    filterCards(text, tag) {
        document.querySelector(this.selector_id_list).innerHTML = "";
            let photographer = this.getPhotographers();
            let Tag = document.getElementById(tag);
            let userClic = Tag.dataset.clic;
            Tag.classList.add("active");
            if (userClic == 0) {
                Tag.setAttribute("data-clic", 1)
                for (let i = 0; i < photographer.length; i++) {
                    let tags = photographer[i].tags;
                    let isMatch = (tags.indexOf(text) != -1)
                    if (isMatch) {
                        document.querySelector(this.selector_id_list).innerHTML += photographer[i].getCardHTML();
                    }
                }
            } else {
                Tag.setAttribute("data-clic", 0)
                Tag.classList.remove("active");
                for (let i = 0; i < photographer.length; i++) {
                    document.querySelector(this.selector_id_list).innerHTML += photographer[i].getCardHTML();
                }
            }
        }
}
