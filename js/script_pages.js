
var photographs;
var photographs;
let url = window.location.href



let numberLikes
let userLikes = 0;





function createSlideImage(images){
  let templateSlideImage = `
  <div class="slide">
  <img class="image-slide" src="../images/${images.prop.photographerId}/${images.prop.image}" alt='${images.prop.alt}'>
  <h4 class="galery__card--title galery__card--text slide__title">${images.prop.alt}</h4>
  </div>`
  return templateSlideImage
}

function createSlideVideo(videos){
  let templateSlideVideo = `
  <div class="slide">
  <video controls="true" class="image-slide">
  <source src="../images/${videos.prop.photographerId}/${videos.prop.video}" type="video/mp4" alt='${videos.prop.alt}' class="image-slide"><video>
  <h4 class="galery__card--title galery__card--text slide__title">${videos.prop.alt}</h4>
  </div>`
  return templateSlideVideo
}

function createBottomPages (photograph){
  let templateBottomPages = `
  <div class="bottom__flex">
<div class="bottom__likes">${numberLikes}</div><span class="bottom__heart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg></span>
<div class="bottom__price">${photograph.price}€/jour</div>
</div>
  `
  return templateBottomPages
}

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


  //like function

  function like(article) {
    let userLike = article.dataset.userlike;
      if (userLike==0) {
        userLike++;
        userLikes++;
        article.setAttribute("data-userlike", 1);
        article.dataset.like = parseInt(article.dataset.like) + 1;
        let nombreLike = article.dataset.like;
      article.querySelector(".number__likes").innerHTML = nombreLike;
      article.setAttribute("data-like", (nombreLike++))
      document.querySelector(".bottom__likes").innerHTML = numberLikes + userLikes;
      }
      else{
        userLike--;
        userLikes--;
        article.setAttribute("data-userlike", 0);
        article.dataset.like = parseInt(article.dataset.like) - 1;
        nombreLike = article.dataset.like;
      article.querySelector(".number__likes").innerHTML = nombreLike;
      article.setAttribute("data-like", (nombreLike--))
      document.querySelector(".bottom__likes").innerHTML = numberLikes + userLikes;
      }
    }


/*  function Article(){
    document.querySelectorAll(".like").forEach(btn => {
      function getArticle(object) {
        if (object.nodeName === "ARTICLE")
                return object;
            return getArticle(object.parentNode)
      }
    btn.addEventListener("click", () => like(getArticle(btn)))
  })
  }*/


let dbPhotographers = new Database("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json");

let galery = new Galery("#galery", dbPhotographers)


dbPhotographers.load().then(
    function () {
      let header = new PhotographerHeader("#photograph__header", dbPhotographers);
      header.init();
      galery.init();
    }
);