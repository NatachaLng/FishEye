let media

class Galery {

    /**
     *
     * @param selector_id_list
     */

    constructor(selector_id_list) {
        this.selector_id_list = selector_id_list
    }

    /**
     * get the datas from the MediaFactory
     * @return {Array}
     **/


    getDatas() {
        let mediaFactory = new MediaFactory("#galery", dbPhotographers)
        let media = mediaFactory.build();
        return media
    }

    /**
     * calculate the total number of likes
     * @return {number}
     */


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

    /**
     * calculate the total number of medias
     * @return {number}
     */

    getNumberOfMedias (){
        let medias = this.getDatas();
        return medias.length;
    }


    /**
     * create HTML and update media
     */

    init() {
        this.createHTML(this.getDatas())
        media = this.getDatas();
    }

    /**
     * empty HTML before creatio,
     */

    emptyHTML() {
        document.getElementById("galery").innerHTML = "";
        document.getElementById("slider-content").innerText = "";
    }

    /**
     * getHTML from the media factory
     * @param medias type {Array}
     */

    createHTML(medias) {
        console.log(medias)
        for (let i = 0; i < medias.length; i++) {
            // Add to List
            document.querySelector(this.selector_id_list).innerHTML += medias[i].getHTML();
            document.querySelector("#slider-content").innerHTML += medias[i].getSliderHTML();
        }
    }

    /**
     * Sort function
     * @param type
     * @returns {Array}
     */

    sortBy (type){
        this.emptyHTML();
        media = this.getDatas()
        switch (type){
            case "popularity":
                media.sort(function (a, b) {
                    return b.likes - a.likes;
                });
                break;
            case "title":
                media.sort(function (a, b) {
                    return a.alt.localeCompare(b.alt);
                });
                break;
            case "date":
                media.sort(function (a, b) {
                    let c = new Date(a.date);
                    let d = new Date(b.date);
                    return c - d;
                });
                break;
        }
        this.createHTML(media);
        return media
    }

    /**
     * Get the slide number
     * @param id
     * @returns {number}
     */

    getSlideNumber (id) {
        for (let i = 0; i < media.length; i++) {
            if (media[i].id === id) {
                return i + 1;
            }
        }
    }

    /**
     * Like/dislike function
     * @param id
     */

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

