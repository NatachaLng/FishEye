class tag {
    /**
     *
     * @param tags
     */
    constructor(tags) {
        this.tags = tags;
    }

    /**
     * Get Card HTML
     * @returns {string}
     */
    getTagHTML() {
        let a = `<a href="#" class="header__filter" aria-label="filtre par tag ${this.tags}" onclick="filterCards(${this.tags})">#${this.tags}</a>`;
        return a;
    }

  /*  function createTaglist (){
        addTags();
        for (let k = 0; k < allTag.length; k++){
            let listTags = document.createElement("a");
            listTags.href = '#';
            listTags.className = 'header__filter';
            listTags.setAttribute("data-clic", 0);
            listTags.setAttribute("aria-label", "filtre par tag " + allTag[k])
            listTags.textContent = '#' + allTag[k];
            listTags.addEventListener("click", () => {filterCards(listTags.innerHTML)});
            let nav = document.getElementById('header__filters');
            nav.appendChild(listTags);
        }
    }*/

}
