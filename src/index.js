import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CSS/style.css';
import 'fontawesome-4.7/css/font-awesome.min.css'
 // JavaScript code to handle form submission
 

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");
var galleryItems = document.getElementsByClassName("gallery-item");

// Add click event listener to each gallery item
for (var i = 0; i < galleryItems.length; i++) {
  galleryItems[i].addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.getElementsByTagName("img")[0].src;
  });
}

// Close the modal when the close button is clicked
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});




// scripts.js

// Function to show or hide the "Back to Top" button based on scrolling
window.onscroll = function() {
showBackToTopBtn();
};

function showBackToTopBtn() {
const backToTopBtn = document.getElementById('backToTopBtn');
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block';
} else {
    backToTopBtn.style.display = 'none';
}
}


document.getElementById('whatsapp-btn').addEventListener('click', function() {
window.location.href = 'https://api.whatsapp.com/send?phone=+966 54 046 6679';
});





