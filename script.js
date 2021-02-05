var photographer;
var photographs;
var media;

function load(body){
    photographs=body['photographers'];
    media=body['media'];
}


// creation of the tag list
/*function createTaglist (){
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
}*/





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
    let html = '<html><head> <script src="js/script_pages.js"></script> <link rel="stylesheet" type="text/css" href="pages/stylesheets/style_pages.css"></head>    <body></body></html>';
    newPage.document.write(html);
}
}

//fetch("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json").then (data => data.json().then (json => load(json)));

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes






let dbPhotographers = new Database("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json");
dbPhotographers.load().then(
    function () {
        let page = new PhotographerList("#photographer", dbPhotographers);
        let tag = new TagList("#header__filters", dbPhotographers)
        page.init();
        tag.init();
    }
);


