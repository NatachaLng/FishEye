class Slider {

    /**
     *
     * @param selector_id_list
     */

    constructor(selector_id_list) {
        this.selector_id_list = selector_id_list
    }

    //get the datas from the MediaFactory

    getDatas() {
        let mediaFactory = new MediaFactory("#slider-content", dbPhotographers)
        let media = mediaFactory.build();
        return media
    }


    // init HTML

    init() {
        this.createHTML(this.getDatas())
    }


    //get HMTL

    createHTML(medias) {
        for (let i = 0; i < medias.length; i++) {
            // Add to List
            document.querySelector(this.selector_id_list).innerHTML += medias[i].getSliderHTML();
        }
    }

}