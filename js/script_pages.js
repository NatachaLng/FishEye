
let url = window.location.href
dbPhotographers = new Database("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json");
let galery = new Galery("#galery", dbPhotographers);
let lightbox = new Lightbox("#Lightbox");
let modal = new Modal("#bground")

dbPhotographers.load().then(
    function () {
      let infos = new PhotographerInfos("#photograph__header", dbPhotographers);
      infos.init();
      galery.init();
    }
);

document.addEventListener("keydown", checkKey);

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '27') {
        lightbox.closeLightbox();
    }
    else if (e.keyCode == '37') {
        lightbox.plusSlides(-1);
    }
    else if (e.keyCode == '39') {
        lightbox.plusSlides(1);
    }

}