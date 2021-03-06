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
        this.getPhotographers();
        this.createCards();
    }

    /**
     * Get all photographers from local database
     * @return {Array}
     */
    getPhotographers() {
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

    /**
     * Create Cards from getPhotographers()
     */
    createCards() {
        let photographer = this.getPhotographers();
        let url = window.location.href
        if (url == "https://natachalng.github.io/NatachaLang_6_21122020/index.html" || url == "https://natachalng.github.io/NatachaLang_6_21122020/") {
            let photographer = this.getPhotographers();
            for (let i = 0; i < photographer.length; i++) {
                document.querySelector(this.selector_id_list).innerHTML += photographer[i].getCardHTML();
            }
        }
        else {
            let tag = url.match(/[^=/]+$/)[0];
            if (tag == "index.html") {
                let photographer = this.getPhotographers();
                for (let i = 0; i < photographer.length; i++) {
                    document.querySelector(this.selector_id_list).innerHTML += photographer[i].getCardHTML();
                }
            }
                else{
                    for (let i = 0; i < photographer.length; i++) {
                        let tags = photographer[i].tags;
                        let isMatch = (tags.indexOf(tag) != -1)
                        if (isMatch) {
                            document.querySelector("#photographer").innerHTML += photographer[i].getCardHTML();
            }

                }
            }
        }
    }

    /**
     * Check if the Tag has been checked
     * @param text
     * @param tag
     */
    check(text, tag){
        let checkedTag = document.getElementsByClassName("active");
        if (checkedTag.length != 0){
            checkedTag[0].classList.remove('active');
            this.filterCards(text, tag)
        }
        else{
            this.filterCards(text, tag)
        }
    }

    /**
     * filter cards
     * @param text
     * @param tag
     */
    filterCards(text, tag) {
        document.getElementById("photographer").innerHTML = "";
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
                        document.querySelector("#photographer").innerHTML += photographer[i].getCardHTML();
                    }
                }
            } else {
                Tag.setAttribute("data-clic", 0)
                Tag.classList.remove("active");
                for (let i = 0; i < photographer.length; i++) {
                    document.querySelector("#photographer").innerHTML += photographer[i].getCardHTML();
                }
            }
        }
}
