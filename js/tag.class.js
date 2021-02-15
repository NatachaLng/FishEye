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
        let a = `<a href="#" class="header__filter" aria-label="filtre par tag ${this.tags}" id="${this.tags}" onclick="Page.filterCards('${this.tags}','${this.tags}')" data-clic = 0>#${this.tags}</a>`;
        return a;
    }

}
