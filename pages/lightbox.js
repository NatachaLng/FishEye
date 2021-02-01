
// Initialize here and run showSlide() to give your lightbox a default state.

let slideIndex = 1;

// You are providing the functionality for your clickable content, which is 
// your previews, dots, controls and the close button.

function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
};

document.addEventListener("keydown", checkKey);

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '27') {
      closeLightbox();
    }
    else if (e.keyCode == '37') {
      goPrevious();
    }
    else if (e.keyCode == '39') {
      goNext();
    }

}

// Note that you are assigning new values here to our slidIndex.

class Lightbox {
	constructor(slides) {
    slides = document.getElementsByClassName('slide');
  	this.slideIndex = 0;
    this.slides = slides;
  }
  
  goNext() {
  	this.slideIndex += 1;
    this.showSlide();
  }
  
  goPrevious() {
    this.slideIndex -= 1;
    this.showSlide();
  }
  toSlide(n) {
    this.showSlide(slideIndex = n);
}
  showSlide(n) {
  if (n > slides.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  slides[slideIndex - 1].style.display = 'block';
}


}



// This is your logic for the light box. It will decide which slide to show 
// and which dot is active.
