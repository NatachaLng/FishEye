class Galery {

    /**
     *
     * @param selector_id_list
     */
    constructor(selector_id_list) {
        this.selector_id_list = selector_id_list;
        this.media = []
    }

    /**
     * create HTML and update media
     */
    init() {
        this.createHTML(this.getDatas())
        this.media = this.getDatas();
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
     * clear HTML before creatio,
     */
    clear() {
        document.getElementById("galery").innerHTML = "";
        document.getElementById("slider-content").innerText = "";
    }

    /**
     * getHTML from the media factory
     * @param medias type {Array}
     */
    createHTML(medias) {
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
        this.clear();
        this.media = this.getDatas()
        let dropdowlist = document.querySelector(".dropdown")
        switch (type){
            case "popularity":
                this.media.sort(function (a, b) {
                    return b.likes - a.likes;
                });
                dropdowlist.innerHTML = `<a class="dropbtn dropOne" href="javascript:void(0);" id="sortByPopularity" aria-label="tri des médias par popularité"  onclick="galery.sortBy('popularity')">Popularité</a><button onclick="filter()" class="dropbtn triger" aria-haspopup="listbox" aria-expanded="true"><span class="triger__content" onclick="filter()" aria-label="afficher la liste des tris">></span></button>
            <div id="myDropdown" class="dropdown-content">
              <a class="dropTwo" aria-label="tri des médias par date" role="listbox" id="sortByDate" onclick="galery.sortBy('date')"><p class="droptext dropTwo" id="date">Date</p></a>
              <a class="dropThree" aria-label="tri des médias par titre" id="sortByTitle" onclick="galery.sortBy('title')"><p class="droptext dropThree" id="prix">Titre</p></a>
            </div>`
                break;
            case "title":
                this.media.sort(function (a, b) {
                    return a.alt.localeCompare(b.alt);
                });
                dropdowlist.innerHTML = `<a class="dropbtn dropOne" href="javascript:void(0);" id="sortTitle" aria-label="tri des médias par titre"  onclick="galery.sortBy('title')">Titre</a><button onclick="filter()" class="dropbtn triger" aria-haspopup="listbox" aria-expanded="true"><span class="triger__content" onclick="filter()" aria-label="afficher la liste des tris">></span></button>
            <div id="myDropdown" class="dropdown-content">
              <a class="dropTwo" aria-label="tri des médias par date" role="listbox" id="sortByDate" onclick="galery.sortBy('date')"><p class="droptext dropTwo" id="date">Date</p></a>
              <a class="dropThree" aria-label="tri des médias par popularité" id="sortByTitle" onclick="galery.sortBy('popularity')"><p class="droptext dropThree" id="prix">Popularité</p></a>
            </div>`
                break;
            case "date":
                this.media.sort(function (a, b) {
                    let c = new Date(a.date);
                    let d = new Date(b.date);
                    return c - d;
                });
                dropdowlist.innerHTML = `<a class="dropbtn dropOne" href="javascript:void(0);" id="sortByDate" aria-label="tri des médias par date"  onclick="galery.sortBy('date')">Date</a><button onclick="filter()" class="dropbtn triger" aria-haspopup="listbox" aria-expanded="true"><span class="triger__content" onclick="filter()" aria-label="afficher la liste des tris">></span></button>
            <div id="myDropdown" class="dropdown-content">
              <a class="dropTwo" aria-label="tri des médias par popularité" role="listbox" id="sortByPopularity" onclick="galery.sortBy('popularity')"><p class="droptext dropTwo" id="date">Popularité</p></a>
              <a class="dropThree" aria-label="tri des médias par titre" id="sortByTitle" onclick="galery.sortBy('title')"><p class="droptext dropThree" id="prix">Titre</p></a>
            </div>`
                break;
        }
        this.createHTML(this.media);
        return this.media
    }

    redirect(text, tag){

        Page.filterCards(text, tag)
    }

    /**
     * Get the slide number
     * @param id
     * @returns {number}
     */
    getSlideNumber (id) {
        for (let i = 0; i < this.media.length; i++) {
            if (this.media[i].id === id) {
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
        let numberLikes;
        let detailsLike = document.querySelector('.bottom__likes');
        let allLikes;
        if (userLike == 0) {
            userLike++;
            media.setAttribute('data-userlike', 1);
            numberLikes = parseInt(media.dataset.like) + 1;
            media.querySelector('.number__likes').innerHTML = numberLikes;
            media.setAttribute("data-like", numberLikes++);
            allLikes = parseInt(detailsLike.dataset.alllikes) + 1;
        } else {
            userLike--;
            media.setAttribute('data-userlike', 0);
            numberLikes = parseInt(media.dataset.like) - 1;
            media.querySelector('.number__likes').innerHTML = numberLikes;
            media.setAttribute("data-like", numberLikes--);
            allLikes = parseInt(detailsLike.dataset.alllikes) - 1;
        }
        detailsLike.setAttribute("data-alllikes", allLikes)
        detailsLike.innerHTML = allLikes;
    }
}

