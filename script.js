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

function createCards(photograph){
    for (let i=0; i<photographs.length; i++){
      photograph=photographs[i];
        return `<article id="${photograph.id}">
              <img class="card__image" src="${photograph.chosenPicture}" alt="picture ${photograph.name}">
              <h3 class="card__name">${photograph.name}</h3>
              <p class="card__location">${photograph.city}, ${photograph.country}</p>
              <p class="card__tagline">${photograph.tagline}</p>
              <p class="card__price">${photograph.price}€/jour</p>
              <ul class="card__taglist">
              </ul>
      </article>`;   
      }
           let photographTag=photograph.tags;
          for (let j = 0; j < photographTag.length; j++){
              let tagList = document.createElement('li');
              tagList.className = 'tag';
              tagList.textContent = '#' + photographTag[j];
              let photographTaglist=document.getElementByClassName('card__taglist');       
               photographTaglist.appendChild(tagList);
          }
  }
  
  document.querySelector('#photographer').innerHTML += createCards();

/*function createCards(tag){
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
}*/

fetch("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json").then (data => data.json().then (json => load(json)));