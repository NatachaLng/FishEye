
var photographs;
var photographs;
let url = window.location.href







/*function showGallery() {
  let galery = document.getElementById("galery");
  let slider = document.querySelector(".slider-content");
  galery.innerHTML = "";
  slider.innerHTML = "";
  arrayLikes = [];
  console.log(photographerMedia);
  allMedias.forEach((media) => {
    if (media.prop.photographerId == pageId) {    
      if (media instanceof images){
        photographerMedia.push(media)
        galery.innerHTML += createImage(media);
        slider.innerHTML += createSlideImage(media);
        arrayLikes.push(media.prop.likes);
      }
      if (media instanceof videos){
        photographerMedia.push(media);
        galery.innerHTML += createVideo(media);
        slider.innerHTML += createSlideVideo(media);
        arrayLikes.push(media.prop.likes);
      }
    }
  });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  numberLikes = arrayLikes.reduce(reducer);
}*/



/*function getSlideNumber (id){
  for(var i = 0; i < photographerMedia.length; i++) {
    if(photographerMedia[i].prop.id === id) {
      return i+1;
    }
 }
}*/



let dbPhotographers = new Database("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json");

let galery = new Galery("#galery", dbPhotographers);

let slider = new Slider("#slider-content");

let lightbox = new Lightbox("#Lightbox");

dbPhotographers.load().then(
    function () {
      let header = new PhotographerHeader("#photograph__header", dbPhotographers);
      header.init();
      galery.init();
      slider.init();
    }
);