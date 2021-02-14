class Galery {

        constructor(selector_id_list) {
            this.selector_id_list = selector_id_list
        }

        getDatas(){
            let mediaFactory = new MediaFactory("#galery", dbPhotographers)
            let media = mediaFactory.build();
            return media
        }

        init() {
            this.createHTML(this.getDatas())
        }

        emptyHTML(){
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

        sortByPrice(){
            this.emptyHTML();
            let media = this.getDatas();
            media.sort(function(a, b){
                return a.price - b.price;
            });
            this.createHTML(media);
        }

        sortByPopularity(){
            this.emptyHTML();
            let media = this.getDatas();
            media.sort(function(a, b){
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
}