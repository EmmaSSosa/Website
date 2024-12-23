// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the modal image and caption elements
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Define the IDs of images that should NOT trigger the modal
var excludeImageIds = [
  "Profile.png", 
  "Graduation.png", 
  "XCM5.png", 
  "ArtCollage.png",
  // Add other image IDs to exclude here
];

// Get all images
var images = document.getElementsByTagName('img');

// Loop through images and add event listeners only to images NOT in exclude list
for (var i = 0; i < images.length; i++) {
  if (!excludeImageIds.includes(images[i].src.split('/').pop())) { 
    images[i].onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      captionText.innerHTML = this.alt; 
    }
  }
}
