/*https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON

 p = document.getElementById("para1");
p_prime = p.cloneNode(true);

https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15

https://refactoring.guru/design-patterns/factory-method

https://www.alsacreations.com/article/lire/1161-json-ajax-jquery-jsonp-getjson.html

https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON

https://codepen.io/alown666/pen/gOwaJGW*/

let requestURL = 'https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType ='json';
request.send();
var photographer;
var photograph;
var media;

request.onload=function(){
    console.log(request.response);
     photographer= request.response;
     photograph=photographer['photographers'];
     media=photographer['media'];
    console.log("onload");
    createCards("");
}

function index(){

}

function createCards(tag){
    for (var i=0; i<photograph.length; i++){
        let photographCard = document.createElement('article');
        photographCard.className = 'card';
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
        
        photographImg.src=photograph[i].portrait;
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