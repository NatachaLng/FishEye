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
}



function createCards(photograph){
    let listTag = [];
    for (var i=0; i<photographs.length; i++){
        photograph = photographs[i];
        let photographCard = document.createElement('article');
        photographCard.className = 'card';
        photographCard.id=photograph.id;
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
    
        
        photographImg.src=photograph.chosenPicture;
        photographName.textContent = photograph.name;
        photographLocation.textContent = photograph.city + ', ' + photograph.country;
        photographTagline.textContent = photograph.tagline;
        photographPrice.textContent = photograph.price + '€/jour';
        
        let photographTag=photograph.tags;
        for (let j = 0; j < photographTag.length; j++){
            listTag.push(photograph.tags[j]);
            let tagList = document.createElement('li');
            tagList.className = 'tag';
            tagList.textContent = '#' + photographTag[j];
            photographTaglist.appendChild(tagList);
            photographCard.classList.add(photographTag[j]);
        }

        let cleanList = Array.from(new Set(listTag));
        console.log(cleanList);
        

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