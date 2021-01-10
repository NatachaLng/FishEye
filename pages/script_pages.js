/*https://stackoverflow.com/questions/61207082/generate-pages-based-from-a-json-file
*/

var photographer;
var photographs;
var medias;
let url = window.location.href
let pageId = url.match(/[^=/]+$/)[0];

console.log(pageId)

function load(body){
    photographs=body['photographers'];
    medias=body['media'];
    showPhotographer();
    mediasCreation();
    showGallery();
}

function populateHeader(photograph){
  let article = `<div class="flex__img"><img class="card__image" src="../${photograph.chosenPicture}" alt="picture ${photograph.name}"></div>
  <div class="flex__contact"><button class="contact__btn" onclick="launchModal()">Contactez moi</button></div>
  <div class="flex__details"><h3 class="card__name">${photograph.name}</h3>
  <p class="card__location">${photograph.city}, ${photograph.country}</p>
  <p class="card__tagline">${photograph.tagline}</p>
  <p class="card__price">${photograph.price}€/jour</p>
  <ul class="card__taglist" id="taglist_${photograph.id}">
  ${photograph.tags.map(tag => `<li class="tag">#${tag}</li>`).join('')}
  </ul>
  </div>`;
              return article;
}

function showPhotographer(text) {
  let header = document.getElementById('photograph__header');
  header.innerHTML= " ";
  photographs.forEach((photograph) => {
        let id = photograph.id;
        let isMatch = (id == pageId);
        if (isMatch) {    
              document.getElementById('photograph__header').innerHTML += populateHeader(photograph);
      }
  });
}

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

  //like function
  window.onload = function(){
	let likeBtn = document.querySelectorAll('.like__btn');
	let numberLike = parseInt(document.querySelectorAll('.number__likes').textContent); 
	if(likeBtn){
		likeBtn.onclick = function(){
			numberLike += 1;
			document.getElementById('number__likes').textContent = numberLike; 
			return false;
		}
	}
}

//Galery 
let images 
let videos 

function Images(prop) {
  this.prop = prop;
}

function Videos(prop) {
  this.prop = prop;
}

let media 

function mediasCreation (){
  for (let i = 0; i < medias.length; i++) {
  media = medias[i];
    if (media.image){
      images = new Images(media)
      console.log(images);
    }
    if (media.video){
      videos = new Videos(media)
    }
  }
}


function createImage(){
  let templateImage = `<article class="galery__card">
  <a href="" class="lightbox__triger><img class="galery__card--image" src="../images/${images.prop.photographerId}/${images.prop.image}"></a>
  <div class="galery__card--details">
  <div><h4 class="galery__card--title galery__card--text">${images.prop.name}</h4></div>
  <div class="galery__card--details2"><p class='galery__card--price galery__card--text'>${images.prop.price}€ <div class="number__likes galery__card--text" class="number__likes" aria-label="likes">${images.prop.likes}</div><i class="fas fa-heart galery__card--text like__btn"></i></p></div>
  </div>`;
    return templateImage;
}

function createVideo(){
  let templateVideo = `<article class="galery__card">
  <video class="galery__card--video">
    <source src="../images/${videos.prop.photographerId}/${videos.prop.video}" type="video/mp4">
  </video> 
  <div class="galery__card--details">
  <div><h4 class="galery__card--title galery__card--text">Chevaux</h4></div>
  <div class="galery__card--details2"><p class='galery__card--price galery__card--text'>${videos.prop.price}€<div class="number__likes galery__card--text" class="number__likes">${videos.prop.likes}</div><i class="fas fa-heart galery__card--text like__btn"></i></p></div>
  </div>
</article>`;
    return templateVideo;
}

function showGallery() {
  let galery = document.getElementsByClassName("galery");
  galery.innerHTML = "";
  images.forEach((images) => {
        let photographerId = images.prop.photographerId;
        let isMatch = (photographerId.indexOf(pageId) != -1);
        if (isMatch) {    
              galery.innerHTML += createImage(media);
      }
      videos.forEach((videos) => {
        let photographerId = videos.prop.photographerId;
        let isMatch = (photographerId.indexOf(pageId) != -1);
        if (isMatch) {    
              galery.innerHTML += createVideo(media);
      }
  });
});
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