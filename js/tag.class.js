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

}
