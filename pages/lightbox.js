//Lightbox


/**
 * @property {HTMLElement} element
 * @property {string[]} gallery
 */

class Lightbox{
    static init () {
        const links = Array.from(document.querySelectorAll("a [href$='.jpg'], a [href$='.mp4']"))
        .forEach(link => link.addEventListener('click', e =>
        {
          e.preventDefault();
          new Lightbox(e.currentTarget.getAttribute('href'), gallery)
        }))
        const gallery = links.map(link => link.getAttribute("href"))
        console.log(links)
    }

    /**
     * 
     * @param {string} url 
     * @param {string[]} gallery
     */
    constructor(url, gallery) {
      this.element = this.buildDOM(url);
      this.loadImage(url);
      this.gallery = gallery;
      this.onKeyUp = this.onKeyUp.bind(this);
      document.body.appendChild(this.element);
      document.addEventListener('keyup', this.onKeyUp);
    }

    loadImage (url){
        const image = new Image();
        const container = this.element.querySelector('lightbox__container');
        const loader = document.createElement('div');
        loader.classList.add('lightbox__loader');
        container.appendChild('loader');
        image.onload = function(){
            container.removeChild(loader);
            container.appendChild(image);
        }
        image.src = url;

    }
    /**
     * 
     * @param {string} url
     * @return {HTMLElement} 
     */

     close (e){
        e.preventDefault();
        this.element.classList.add('fadeOut');
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element)
        },500);
        document.removeEventListener('keyup', this.onKeyUp)
     }

     onKeyUp (e){
         if (e.key == 'escape'){
             this.close(e);
         }
     }

    buildDOM (url){
        const dom=document.createElement('div');
        dom.classList.add('lightbox');
        dom.innerHTML = `<button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container">
          <img class="lightbox__img" src="../images/243/Event_BenevidesWedding.jpg" alt="">
          <h2>Wedding</h2>
        </div>`
        dom.querySelector('lightbox__close').addEventListener('click', this.close.bind(this))
        return dom
    }
}

/*<div class="lightbox">
          <button class="lightbox__close">Fermer</button>
          <button class="lightbox__next">Suivant</button>
          <button class="lightbox__prev">Précédent</button>
          <div class="lightbox__container">
            <img class="lightbox__img" src="../images/243/Event_BenevidesWedding.jpg" alt="">
            <h2>Wedding</h2>
          </div>
        </div>
*/

Lightbox.init();