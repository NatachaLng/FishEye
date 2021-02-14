class Galery {

    constructor(selector_id_list) {
        this.selector_id_list = selector_id_list
    }

    getDatas() {
        let mediaFactory = new MediaFactory("#galery", dbPhotographers)
        let media = mediaFactory.build();
        return media
    }

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

    init() {
        this.createHTML(this.getDatas())
    }

    emptyHTML() {
        console.log("empty ok")
        document.getElementById("galery").innerHTML = "";
    }

    createHTML(medias) {
        console.log(medias)
        for (let i = 0; i < medias.length; i++) {
            // Add to List
            document.querySelector(this.selector_id_list).innerHTML += medias[i].getHTML();
        }
    }

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
            let numberLikes = media.dataset.like;
            numberLikes = parseInt(media.dataset.like) + 1;
            media.querySelector('.number__likes').innerHTML = numberLikes;
            media.setAttribute("data-like", numberLikes++);
            let detailsLike = document.querySelector('.bottom__likes');
            let allLikes = parseInt(detailsLike.dataset.alllikes) + 1;
            detailsLike.setAttribute("data-alllikes", allLikes)
            detailsLike.innerHTML = allLikes;
        } else {
            userLike--;
            media.setAttribute('data-userlike', 0);
            let numberLikes = media.dataset.like;
            numberLikes = parseInt(media.dataset.like) - 1;
            media.querySelector('.number__likes').innerHTML = numberLikes;
            media.setAttribute("data-like", numberLikes--);
            let detailsLike = document.querySelector('.bottom__likes');
            let allLikes = parseInt(detailsLike.dataset.alllikes) - 1;
            detailsLike.setAttribute("data-alllikes", allLikes)
            detailsLike.innerHTML = allLikes;
        }
    }
}
        /*else{
            userLike--;
            userLikes--;
            article.setAttribute("data-userlike", 0);
            article.dataset.like = parseInt(article.dataset.like) - 1;
            nombreLike = article.dataset.like;
            article.querySelector(".number__likes").innerHTML = nombreLike;
            article.setAttribute("data-like", (nombreLike--))
            document.querySelector(".bottom__likes").innerHTML = numberLikes + userLikes;
        }*/
