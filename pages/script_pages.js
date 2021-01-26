

var photographer;
var photographs;
var medias;
let url = window.location.href
let pageId = url.match(/[^=/]+$/)[0];

console.log(pageId)

function load(body){
    photographs=body['photographers'];
    medias=body['media'];
    mediasCreation();
    showGallery();
    titleModal();
    Article();
    showPhotographer();
}

let photographerMedia = [];
let allMedias = []; 
let arrayLikes = [];
let numberLikes


function showPhotographer(text) {
  let header = document.getElementById('photograph__header');
  header.innerHTML= " ";
  photographs.forEach((photograph) => {
        let id = photograph.id;
        let isMatch = (id == pageId);
        if (isMatch) {    
              document.getElementById('photograph__header').innerHTML += populateHeader(photograph);
              let bottomPage = document.querySelector('.bottom__page');
              bottomPage.innerHTML += createBottomPages(photograph);
      }
  });
}

//filter function

function filter() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//Galery 

function Images(prop) {
  this.prop = prop;
}

function Videos(prop) {
  this.prop = prop;
}

function mediasCreation (){
  for (let i = 0; i < medias.length; i++) {
  media = medias[i];
    if (media.image){
      allMedias.push(new Images(media));
    }
    if (media.video){
      allMedias.push(new Videos(media));
    }
  }
}



function createImage(images){
  let templateImage = `<article class="galery__card" data-like="${images.prop.likes}" data-userlike=0 onload="Article()">
  <a href="javascript:void(0);" alt="${images.prop.alt}" aria-label="afficher ${images.prop.alt}" class="lightbox__triger" onclick="openLightbox();toSlide(getSlideNumber(${images.prop.id}))"><img class="galery__card--image" src="../images/${images.prop.photographerId}/${images.prop.image}" alt='${images.prop.alt}'></a>
  <div class="galery__card--details">
  <div><h4 class="galery__card--title galery__card--text">${images.prop.alt}</h4></div>
  <div class="galery__card--details2"><p class='galery__card--price galery__card--text'>${images.prop.price}€ <div class="number__likes galery__card--text" aria-label="aimer la photo">${images.prop.likes}</div><img class="like" src="../images/1024px-OOjs_UI_icon_heart.jpg" alt="liker la photo ${images.prop.alt}">
  </div>
  </div>
  </article>`;
    return templateImage;
}

function createSlideImage(images){
  let templateSlideImage = `
  <div class="slide">
  <img class="image-slide" src="../images/${images.prop.photographerId}/${images.prop.image}" alt='${images.prop.alt}'>
  <h4 class="galery__card--title galery__card--text slide__title">${images.prop.alt}</h4>
  </div>`
  return templateSlideImage
}

function createVideo(videos){
  let templateVideo = `<article class="galery__card" data-like="${videos.prop.likes}" data-userlike=0 onload="Article()">
  <a href ="javascript:void(0);" aria-label="afficher ${videos.prop.alt}" class="lightbox__triger"><video class="galery__card--video" onclick="openLightbox();toSlide(getSlideNumber(${videos.prop.id}))">
    <source src="../images/${videos.prop.photographerId}/${videos.prop.video}" type="video/mp4" alt='${videos.prop.alt}'>
  </video></a>
  <div class="galery__card--details">
  <div><h4 class="galery__card--title galery__card--text">${videos.prop.alt}</h4></div>
  <div class="galery__card--details2"><p class='galery__card--price galery__card--text'>${videos.prop.price}€<div class="number__likes galery__card--text" aria-label="aimer la vidéo">${videos.prop.likes}</div><img class="like" src="../images/1024px-OOjs_UI_icon_heart.jpg" alt="liker la photo ${videos.prop.alt}"></div>
  </div>
</article>`;
    return templateVideo;
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
<div class="bottom__likes">${numberLikes}<span class="bottom__heart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg></span></div>
<div class="bottom__price">${photograph.price}€/jour</div>
</div>
  `
  return templateBottomPages
}

function showGallery() {
  let galery = document.getElementById("galery");
  let slider = document.querySelector(".slider-content");
  galery.innerHTML = "";
  slider.innerHTML = "";
  photographerMedia = [];
  console.log(photographerMedia);
  allMedias.forEach((media) => {
    if (media.prop.photographerId == pageId) {    
      if (media instanceof Images){
        photographerMedia.push(media)
        galery.innerHTML += createImage(media);
        slider.innerHTML += createSlideImage(media);
        arrayLikes.push(media.prop.likes);
      }
      if (media instanceof Videos){
        photographerMedia.push(media);
        galery.innerHTML += createVideo(media);
        slider.innerHTML += createSlideVideo(media);
        arrayLikes.push(media.prop.likes);
      }
    }
  });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  numberLikes = arrayLikes.reduce(reducer);
}



function getSlideNumber (id){
  for(var i = 0; i < photographerMedia.length; i++) {
    if(photographerMedia[i].prop.id === id) {
      return i+1;
    }
 }
}

// header of the page with photograph's description
console.log(photographerMedia)
console.log(photographerMedia.length)
function populateHeader(photograph){
  let article = `<div class="flex__img"><img class="card__image" src="../${photograph.chosenPicture}" alt="picture ${photograph.name}"></div>
  <div class="flex__contact"><button class="contact__btn" onclick="launchModal()" aria-label="Formulaire de contact de ${photograph.name}">Contactez moi</button></div>
  <div class="flex__details"><h3 class="card__name">${photograph.name}</h3>
  <p class="card__location">${photograph.city}, ${photograph.country}</p>
  <p class="card__tagline">${photograph.tagline}</p>
  <p class="card__price">${photograph.price}€/jour</p>
  <ul class="card__taglist" id="taglist_${photograph.id}">
  ${photograph.tags.map(tag => `<li class="tag">#${tag}</li>`).join('')}
  </ul>
  <div class="card__number">Nombre total de clichés : </div>
  </div>`;
              return article;
}

//Sort by 

function sortByPrice (media) {
  allMedias.sort(function(a, b){
  return a.prop.price - b.prop.price;
});
  showGallery();
  Article();
}

function sortByPopularity () {
  allMedias.sort(function(a, b){
  return b.prop.likes - a.prop.likes;
});
  showGallery();
  Article();
}

function sortByDate () {
  allMedias.sort(function(a, b){
  let c = new Date(a.prop.date);
  let d = new Date(b.prop.date);
  return c - d; 
});
  showGallery();
  Article();
}

  //like function



  function like(article) {
    let userLike = article.dataset.userlike;
      if (userLike<1) {
        userLike++;
        article.setAttribute("data-userlike", 1);
        console.log(userLike);
        article.dataset.like = parseInt(article.dataset.like) + 1;
        let nombreLike = article.dataset.like;
      article.querySelector(".number__likes").innerHTML = nombreLike;
      article.setAttribute("data-like", (nombreLike++))
      }
    }


  function Article(){
    document.querySelectorAll(".like").forEach(btn => {
      function getArticle(object) {
        if (object.nodeName === "ARTICLE")
                return object;
            return getArticle(object.parentNode)
      }
    btn.addEventListener("click", () => like(getArticle(btn)))
  })
  }  


//modal 
const modalbg = document.querySelector(".bground");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//name 
function templateModal(photograph){
  let templateTitle = `Contactez-moi <br> ${photograph.name}`;
  return templateTitle
}

function titleModal() {
  let modalTitle = document.getElementById('modal__title');
  modalTitle.innerHTML= "";
  photographs.forEach((photograph) => {
        let id = photograph.id;;
        if (id == pageId) {    
              modalTitle.innerHTML += templateModal(photograph);
      }
  });
}

// Form elements
let firstName = document.getElementById("first");
let msgFirst = document.getElementById("msgFirst");
let msgLast = document.getElementById("msgLast");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let message = document.getElementById("message");
let msgMessage = document.getElementById("msgMsg");

//validate first name
function validateFirstName(){
    if ((firstName.value.length < 2) || (!firstName.value.match(/^([a-zA-Z]+)$/))){ //double check from HTML
      msgFirst.style.display = "block";
    return false;
      }
      msgFirst.style.display = "none";
    return true;
  }

//validate last name
function validateLastName(){
    if ((lastName.value.length < 2) || (!lastName.value.match(/^([a-zA-Z]+)$/))){ //double check from HTML
      msgLast.style.display = "block";
    return false;
      }
      msgLast.style.display = "none";
    return true;
  }
  
  //validation email 
  function validateEmail(){
    if (!email.value.match(mailformat)){ //double check from HTML
    return false;
      }
    return true;
  }

  //validate message
function validateMessage(){
    if (message.value.length < 2){ //double check from HTML
      msgMessage.style.display = "block";
    return false;
      }
      msgMessage.style.display = "none";
    return true;
  }

  function validate(){
    formValid = true;
    formValid=(formValid && validateFirstName());
    console.log(firstName.value);
    formValid=(formValid && validateLastName());
    console.log(lastName.value);
    formValid=(formValid && validateEmail());
    console.log(email.value); 
    formValid=(formValid && validateMessage());
    console.log(message.value);
    return formValid; // return true as formValid=true
  }

 /* function confirmationMessage(){
    if ((validate()==true)){
      let formSent = document.getElementById("form__sent");
    formSent.style.display="block";
    }
  }
//display confirmation

let formSent = document.getElementById("form__sent"); //validation message

/*if(window.location.href.indexOf("?") > 1){ //if the url contain a ? (because of the get method of the datas in the form)
  formSent.style.display = "block"; //then we display the validation message
  }
else{
  formSent.style.display="none"; //otherwise we don't 
}*/


fetch("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json").then (data => data.json().then (json => load(json)));