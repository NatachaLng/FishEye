/*https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON

 p = document.getElementById("para1");
p_prime = p.cloneNode(true);

https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15

https://refactoring.guru/design-patterns/factory-method

https://www.alsacreations.com/article/lire/1161-json-ajax-jquery-jsonp-getjson.html

https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON

https://codepen.io/alown666/pen/gOwaJGW

https://etienner.github.io/les-filtres-en-java-script/

fetch("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json").then (data => data.json().then (console.log))

fetch

https://codepen.io/cferdinandi/pen/RwwVmyO*/

/*

générer liste de tag automatiquement 
set 
queryselector card hidden
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Set
*/


var photographer;
var photographs;
var media;

function load(body){
    photographs=body['photographers'];
    media=body['media'];
    createCards();
    createTaglist();
}

/*function index(){

}*/
let allTag = [];
function addTags(photographTag){
    for (let h=0; h<photographs.length; h++){
        photographTag=photographs[h].tags;
        for (let k = 0; k < photographTag.length; k++){
            if (allTag.indexOf(photographTag[k])==-1){
                allTag.push(photographTag[k]);
            } 
        }
    }
}   

function createTaglist (){
    addTags();
    for (let k = 0; k < allTag.length; k++){
        let listTags = document.createElement("li");
        listTags.className = 'header__filter';
        listTags.textContent = '#' + allTag[k];
        let labelTags = document.createElement("label");
        labelTags.setAttribute("for", allTag[k]);
        let checkboxTags = document.createElement("input");
        checkboxTags.type = 'checkbox';
        checkboxTags.className = 'checkbox'
        checkboxTags.value = allTag[k];
        checkboxTags.id = allTag[k];
        let nav = document.getElementById('header__filter');
        labelTags.appendChild(listTags)
        listTags.appendChild(checkboxTags);
        nav.appendChild(labelTags);
    }
}

/*let alltags=document.querySelectorAll('.checkbox').forEach(tags =>{
    if (tags.checked == true){
        console.log('checked');
        let card = document.getElementByClassName('card')
        card.style.display='none';
        let filterValue = tags.value;
        let filtered = element.classList.contains(filterValue);
        filtered.style.display="block"
    }
});*/

function createCards(photograph) {
    for (let i = 0; i < photographs.length; i++) {
        photograph = photographs[i];
            let article = `<article id="${photograph.id}" class="card">
            <img class="card__image" src="${photograph.chosenPicture}" alt="picture ${photograph.name}">
            <h3 class="card__name">${photograph.name}</h3>
            <p class="card__location">${photograph.city}, ${photograph.country}</p>
            <p class="card__tagline">${photograph.tagline}</p>
            <p class="card__price">${photograph.price}€/jour</p>
            <ul class="card__taglist" id="taglist_${photograph.id}">
                ${photograph.tags.map(tag => `<li class="tag">#${tag}</li>`).join('')}
            </ul>
        </article>`;
        document.getElementById('photographer').innerHTML += article;
    }
}

fetch("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json").then (data => data.json().then (json => load(json)));