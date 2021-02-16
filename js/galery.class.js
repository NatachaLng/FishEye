class Galery {

    /**
     *
     * @param selector_id_list
     */

    constructor(selector_id_list) {
        this.selector_id_list = selector_id_list
    }

    //get the datas from the MediaFactory

    getDatas() {
        let mediaFactory = new MediaFactory("#galery", dbPhotographers)
        let media = mediaFactory.build();
        return media
    }

    // Calculate number of likes

    getNumberOfLikes (){
        let totalLikes = new Array();
        let medias = this.getDatas();
        for (let i = 0; i < medias.length; i++) {
            totalLikes.push(medias[i].likes);
        }
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let numberLikes = totalLikes.reduce(reducer);
        return numberLikes
    }

    // Calculate number of medias

    getNumberOfMedias (){
        let medias = this.getDatas();
        return medias.length;
    }

    getSlideNumber (id) {
        let medias = this.getDatas();
        for (let i = 0; i < medias.length; i++) {
            if (medias[i].id === id) {
                return i + 1;
            }
        }
    }

    // init HTML

    init() {
        this.createHTML(this.getDatas())
    }

    // empty HTML

    emptyHTML() {
        console.log("empty ok")
        document.getElementById("galery").innerHTML = "";
        document.getElementById("slider-content").innerText = "";
    }

    //get HMTL

    createHTML(medias) {
        console.log(medias)
        for (let i = 0; i < medias.length; i++) {
            // Add to List
            document.querySelector(this.selector_id_list).innerHTML += medias[i].getHTML();
            document.querySelector("#slider-content").innerHTML += medias[i].getSliderHTML();
        }
    }

    //Sort by function

    sortByPrice() {
        this.emptyHTML();
        let media = this.getDatas();
        media.sort(function (a, b) {
            return a.price - b.price;
        });
        this.createHTML(media);
    }

    sortByPopularity() {
        this.emptyHTML();
        let media = this.getDatas();
        media.sort(function (a, b) {
            return b.likes - a.likes;
        });
        this.createHTML(media);
    }

    sortByDate() {
        this.emptyHTML();
        let media = this.getDatas();
        media.sort(function (a, b) {
            let c = new Date(a.date);
            let d = new Date(b.date);
            return c - d;
        });
        this.createHTML(media);
    }


    like(id) {
        let media = document.getElementById(id);
        let userLike = media.dataset.userlike;
        if (userLike == 0) {
            userLike++;
            media.setAttribute('data-userlike', 1);
            let numberLikes = parseInt(media.dataset.like) + 1;
            media.querySelector('.number__likes').innerHTML = numberLikes;
            media.setAttribute("data-like", numberLikes++);
            let detailsLike = document.querySelector('.bottom__likes');
            let allLikes = parseInt(detailsLike.dataset.alllikes) + 1;
            detailsLike.setAttribute("data-alllikes", allLikes)
            detailsLike.innerHTML = allLikes;
        } else {
            userLike--;
            media.setAttribute('data-userlike', 0);
            let numberLikes = parseInt(media.dataset.like) - 1;
            media.querySelector('.number__likes').innerHTML = numberLikes;
            media.setAttribute("data-like", numberLikes--);
            let detailsLike = document.querySelector('.bottom__likes');
            let allLikes = parseInt(detailsLike.dataset.alllikes) - 1;
            detailsLike.setAttribute("data-alllikes", allLikes)
            detailsLike.innerHTML = allLikes;
        }
    }
}

