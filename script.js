 /*---------------- slides---------------------- */

 var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("dot");
     if (n > slides.length) {slideIndex = 1}    
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex-1].style.display = "block";  
     dots[slideIndex-1].className += " active";
 }

 // Prevent clicks on slideshow images from doing anything
function preventClicksOnImages() {
  document.querySelectorAll('.slideshow-container img').forEach(img => {
      img.addEventListener('click', function(event) {
          event.preventDefault(); // Stop the browser from following the link.
          event.stopPropagation(); // Stop the click from bubbling up to higher elements.
      });
  });
}

// Call the function to apply the event listeners
preventClicksOnImages();





 /*---------------- slides end---------------------- */










function showImages(projectId) {
  var allImages = document.getElementsByClassName('images');
  for (var i = 0; i < allImages.length; i++) {
      allImages[i].style.display = 'none'; // Hide all images
  }
  var selectedImages = document.getElementById(projectId);
  selectedImages.style.display = 'block'; // Show selected images
}



 /* cursor start */
var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', moveCursor)

function moveCursor(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}


//To get all the paragraph elements
var text = Array.from(document.querySelectorAll('p'));

text.forEach(text => {
  text.addEventListener('mousemove', function() {
    cursor.classList.add('hover-cursor');
  })
//To remove the class when it doesn't hover the text
  text.addEventListener('mouseleave', function () {
    cursor.classList.remove('hover-cursor');
  })
})
//The color of the circle is now cyan when you hover on text!

 /* cursor end */