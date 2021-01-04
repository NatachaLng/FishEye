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
var photograph;
var media;

function load(body){
    photograph=body['photographers'];
    media=body['media'];
    createCards();
    createTaglist();
}

/*function index(){

}*/
let allTag = [];
function addTags(){
    for (let h=0; h<photograph.length; h++){
        let photographTag=photograph[h].tags;
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
        let labelTags = document.createElement("label");
        labelTags.setAttribute("for", allTag[k]);
        let checkboxTags = document.createElement("input");
        checkboxTags.type = 'checkbox';
        checkboxTags.className = 'checkbox'
        checkboxTags.value = allTag[k];
        checkboxTags.id = allTag[k];
        listTags.className = 'header__filter';
        listTags.textContent = '#' + allTag[k];
        let nav = document.getElementById('header__filter');
        labelTags.appendChild(listTags)
        listTags.appendChild(checkboxTags);
        nav.appendChild(labelTags);
    }
}

let tags=document.querySelectorAll('.checkbox').forEach(tags =>{
    if (tags.checked){
        console.log('checked');
        let card = document.getElementByClassName('card')
        card.style.display='none';
        let filterValue = tags.value;
        let filtered = element.classList.contains(filterValue);
        filtered.style.display="block"
    }
});

function createCards(tag){
    for (var i=0; i<photograph.length; i++){
        let photographCard = document.createElement('article');
        photographCard.className = 'card';
        photographCard.id=photograph[i].id;
        let photographImg = document.createElement('img');
        photographImg.className = 'card__image';
        let photographName = document.createElement('h3');
        photographName.className = 'card__name';
        let photographLocation = document.createElement('p');
        photographLocation.className = 'card__location';
        let photographTagline = document.createElement('p');
        photographTagline.className = 'card__tagline';
        let photographPrice = document.createElement('p');
        photographPrice.className = 'card__price';
        let photographTaglist = document.createElement('ul');
        photographTaglist.className = 'card__taglist';
        
        photographImg.src=photograph[i].chosenPicture;
        photographName.textContent = photograph[i].name;
        photographLocation.textContent = photograph[i].city + ', ' + photograph[i].country;
        photographTagline.textContent = photograph[i].tagline;
        photographPrice.textContent = photograph[i].price + '€/jour';
        
        let photographTag=photograph[i].tags;
        for (let j = 0; j < photographTag.length; j++){
            let tagList = document.createElement('li');
            tagList.className = 'tag';
            tagList.textContent = '#' + photographTag[j];
            photographTaglist.appendChild(tagList);
            photographCard.classList.add(photographTag[j]);
        }
    
        let main=document.getElementById("photographer");
        main.appendChild(photographCard);

        photographCard.appendChild(photographImg);
        photographCard.appendChild(photographName);
        photographCard.appendChild(photographLocation);
        photographCard.appendChild(photographTagline);
        photographCard.appendChild(photographPrice);
        photographCard.appendChild(photographTaglist);
    }
}

fetch("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json").then (data => data.json().then (json => load(json)));