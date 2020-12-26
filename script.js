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
var medias;

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
        let photograph__card = document.createElement('article');
        photograph__card.className = 'card';
        let photograph__img = document.createElement('img');
        photograph__img.className = 'card__image';
        let photograph__name = document.createElement('h3');
        photograph__name.className = 'card__name';
        let photograph__location = document.createElement('p');
        photograph__location.className = 'card__location';
        let photograph__tagline = document.createElement('p');
        photograph__tagline.className = 'card__tagline';
        let photograph__price = document.createElement('p');
        photograph__price.className = 'card__price';
        let photograph__taglist = document.createElement('ul');
        photograph__taglist.className = 'card__taglist';
        
        //photograph__img.src="images/Sample Photos"+
        photograph__name.textContent = photograph[i].name;
        photograph__location.textContent = photograph[i].city + ', ' + photograph[i].country;
        photograph__tagline.textContent = photograph[i].tagline;
        photograph__price.textContent = photograph[i].price + '€/jour';
        
        let photograph__tag=photograph[i].tags;
        for (let j = 0; j < photograph__tag.length; j++){
            let tagList = document.createElement('li');
            tagList.className = 'tag';
            tagList.textContent = '#' + photograph__tag[j];
            photograph__taglist.appendChild(tagList);
        }

        let photographerList = document.createElement("article");
        let main=document.getElementById("main");
        main.appendChild(photographerList);

        photograph__card.appendChild(photograph__img);
        photograph__card.appendChild(photograph__name);
        photograph__card.appendChild(photograph__location);
        photograph__card.appendChild(photograph__tagline);
        photograph__card.appendChild(photograph__price);
        photograph__card.appendChild(photograph__taglist);

        photographerList.appendChild(photograph__card);
    }
}