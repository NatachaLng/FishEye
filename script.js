var photographer;
var photographs;
var media;

function load(body){
    photographs=body['photographers'];
    media=body['media'];
    createCards();
    createTaglist();
}


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

// creation of the tag list
function createTaglist (){
    addTags();
    for (let k = 0; k < allTag.length; k++){
        let listTags = document.createElement("a");
        listTags.href = '#';
        listTags.className = 'header__filter';
        listTags.setAttribute("aria-label", "tag")
        listTags.textContent = '#' + allTag[k];
        listTags.addEventListener("click", () => {filterCards(listTags.innerHTML)});
        let nav = document.getElementById('header__filters');
        nav.appendChild(listTags);
    }
}

const checkboxes = document.querySelectorAll("input[type='checkbox']");
const cardContainer = document.getElementById("photographer");
let checkboxValues = [ ]; 


//template of the photographer
function showPhotographer(photograph){
    let article = `<article id="${photograph.id}" class="card">
    <a href="pages/photographe.html?id=${photograph.id}" aria-label="${photograph.name}">
                    <img class="card__image" src="${photograph.chosenPicture}" alt="">
                    <h3 class="card__name">${photograph.name}</h3>
                    </a>
                    <p class="card__location">${photograph.city}, ${photograph.country}</p>
                    <p class="card__tagline">${photograph.tagline}</p>
                    <p class="card__price">${photograph.price}€/jour</p>
                    <ul class="card__taglist" id="taglist_${photograph.id}">
                        ${photograph.tags.map(tag => `<li class="tag" onclick="filterCards(innerHTML)">#${tag}</li>`).join('')}
                    </ul>
                </article>`;
                return article;
}

function filterCards(text) {
    text = text.substring(1, text.length);
    console.log("check :" + text);
    cardContainer.innerHTML = "";
    photographs.forEach((photograph) => {
          let tags = photograph.tags;
          let isMatch = (tags.indexOf(text) != -1) || (text === 'tous');
          if (isMatch) {    
                document.getElementById('photographer').innerHTML += showPhotographer(photograph);
        }
    });
}

// creation of the cards
let article 
function createCards() {
    for (let i = 0; i < photographs.length; i++) {
        document.getElementById('photographer').innerHTML += showPhotographer(photographs[i]);
    }
}

function pagePhotographer (){
    for (let i = 0; i < photographs.length; i++) {
    photograph = photographs[i];
    let newPage = window.open();
    let currentURL = window.location.href;
    let url = new URL(currentURL);
    url.searchParams.append('id', photographs[i].id);
    let html = '<html><head> <script src="pages/script_pages.js"></script> <link rel="stylesheet" type="text/css" href="pages/stylesheets/style_pages.css"></head>    <body></body></html>';
    newPage.document.write(html);
}
}

fetch("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json").then (data => data.json().then (json => load(json)));