var photographer;
var photographs;
var media;

function load(body){
    photographs=body['photographers'];
    media=body['media'];
    createCards();
    createTaglist();
}
/*
window.addEventListener('scroll', function() {
if(window.pageYOffset > 20) {
    document.getElementsByClassName("scroll").style.display = 'block';
    }
});*/

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
        listTags.setAttribute("data-clic", 0);
        listTags.setAttribute("aria-label", "filtre par tag " + allTag[k])
        listTags.textContent = '#' + allTag[k];
        listTags.addEventListener("click", () => {filterCards(listTags.innerHTML)});
        let nav = document.getElementById('header__filters');
        nav.appendChild(listTags);
    }
}





function filterCards(text) {
    text = text.substring(1, text.length);
    cardContainer.innerHTML = "";
    photographs.forEach((photograph) => {
          let tags = photograph.tags;
          let isMatch = (tags.indexOf(text) != -1);
          if (isMatch) {    
                document.getElementById('photographer').innerHTML += showPhotographer(photograph);
        }
    });
   
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

//fetch("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json").then (data => data.json().then (json => load(json)));

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes



class TagList {
    #tags;

    constructor() {
    }
}


let dbPhotographers = new Database("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json");
dbPhotographers.load().then(
    function () {
        let page = new PhotographerList("#photographer", dbPhotographers);
        page.init();
    }
);


