function toggleMenu() {
    document.querySelector('.left-panel').classList.toggle('active');
}
 

/*---------------- Clickablel image starts---------------------- */
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the main and secondary images
    const mainImage = document.getElementById("mainImage");
    const secondaryImage = document.getElementById("secondaryImage");
  
    // Hide the secondary image initially
    secondaryImage.style.display = "none";
  
    // Add click event listener to the main image
    mainImage.addEventListener("click", function (event) {
        const clickX = event.clientX - this.getBoundingClientRect().left;
        const clickY = event.clientY - this.getBoundingClientRect().top;
  
        // Check if the click is in the top-left quadrant of the image
        if (clickX < this.offsetWidth / 3 && clickY < this.offsetHeight / 3) {
            // Show the secondary image
            secondaryImage.style.display = "block";
            // Change the source of the secondary image
            secondaryImage.src = "image/StrangersDP.png";
        }
  
        // Check if the click is in the bottom-left quadrant of the image
        if (clickX < this.offsetWidth / 3 && clickY > (2 * this.offsetHeight) / 3) {
            // Perform actions for the bottom-left side
            // For example, you can change the source of the secondary image to another image
            secondaryImage.style.display = "block";
            secondaryImage.src = "image//strangersMS.jpg";
        }
  
        // Check if the click is in the bottom-right quadrant of the image
        if (clickX > (2 * this.offsetWidth) / 3 && clickY > (2 * this.offsetHeight) / 3) {
            // Perform actions for the bottom-right side
            // For example, you can change the source of the secondary image to another image
            secondaryImage.style.display = "block";
            secondaryImage.src = "image/strangersRM.png";
        }
        // Add more conditions for other parts of the image as needed
    });
  
    // You can add more event listeners for other parts of the main image
  });
  


/*---------------- Clickablel image ends---------------------- */

  // Add mouseover event listener to change the cursor
  mainImage.addEventListener("mouseover", function (event) {
    const hoverX = event.clientX - this.getBoundingClientRect().left;
    const hoverY = event.clientY - this.getBoundingClientRect().top;

    // Check if the mouse is in the top-left quadrant of the image
    if (hoverX < this.offsetWidth / 3 && hoverY < this.offsetHeight / 3) {
        // Change the cursor to pointer
        this.style.cursor = "pointer";
    }

    // Check if the mouse is in the bottom-left quadrant of the image
    if (hoverX < this.offsetWidth / 3 && hoverY > (2 * this.offsetHeight) / 3) {
        // Change the cursor to pointer
        this.style.cursor = "pointer";
    }

    // Check if the mouse is in the bottom-right quadrant of the image
    if (hoverX > (2 * this.offsetWidth) / 3 && hoverY > (2 * this.offsetHeight) / 3) {
        // Change the cursor to pointer
        this.style.cursor = "pointer";
    }
    // Add more conditions for other parts of the image as needed
});



  // Add mouseover event listener to add 'clickable' class when over clickable parts
  mainImage.addEventListener("mouseover", function (event) {
    const hoverX = event.clientX - this.getBoundingClientRect().left;
    const hoverY = event.clientY - this.getBoundingClientRect().top;

    // Check if the mouse is in the top-left quadrant of the image
    if (hoverX < this.offsetWidth / 3 && hoverY < this.offsetHeight / 3) {
        // Add the 'clickable' class
        this.classList.add("clickable");
    }

    // Check if the mouse is in the bottom-left quadrant of the image
    if (hoverX < this.offsetWidth / 3 && hoverY > (2 * this.offsetHeight) / 3) {
        // Add the 'clickable' class
        this.classList.add("clickable");
    }

    // Check if the mouse is in the bottom-right quadrant of the image
    if (hoverX > (2 * this.offsetWidth) / 3 && hoverY > (2 * this.offsetHeight) / 3) {
        // Add the 'clickable' class
        this.classList.add("clickable");
    }
    // Add more conditions for other parts of the image as needed
});


