
 
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








function showImages(projectId) {
  var allImages = document.getElementsByClassName('images');
  for (var i = 0; i < allImages.length; i++) {
      allImages[i].style.display = 'none'; // Hide all images
  }
  var selectedImages = document.getElementById(projectId);
  selectedImages.style.display = 'block'; // Show selected images
}
 /*---------------- slides end---------------------- */




 /*---------------- panel slide start---------------------- */

 document.addEventListener("DOMContentLoaded", function() {
  fetch('cv-panel.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('cvPanelContainer').innerHTML = html;
          // Now that the HTML is loaded, add the event listener to closeCvPanel
          document.getElementById('closeCvPanel').addEventListener('click', function() {
              document.querySelector('.cv-panel').classList.remove('active');
          });
      })
      .catch(error => {
          console.warn('Error loading the CV panel:', error);
      });

  // This assumes aboutMeLink exists in the initial HTML and not in cv-panel.html
  document.getElementById('aboutMeLink').addEventListener('click', function() {
      var cvPanel = document.querySelector('.cv-panel');
      // Ensure the cvPanel was successfully loaded
      if (cvPanel) {
          cvPanel.classList.toggle('active');
      } else {
          console.warn('CV panel is not loaded yet.');
      }
  });
});



 


 /*---------------- panel slide end---------------------- */

