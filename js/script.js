let Page;
let Tag;

document.addEventListener("scroll", showDiv);

function showDiv(){
    if(window.pageYOffset > 120) {
        document.querySelector(".scroll").style.display = 'block';
    }
    else{
        document.querySelector(".scroll").style.display = 'none';
    }
}



let dbPhotographers = new Database("https://natachalng.github.io/FishEye/data/FishEyeDataFR.json");
dbPhotographers.load().then(
    function () {
        Page = new PhotographerList("#photographer", dbPhotographers);
        Tag = new TagList("#header__filters", dbPhotographers)
        Page.init();
        Tag.init();
    }
);


