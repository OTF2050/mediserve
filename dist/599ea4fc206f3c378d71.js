import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CSS/style.css';
import 'font-awesome/css/font-awesome.css'

 // JavaScript code to handle form submission
 document.getElementById("serviceRequestForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;

    // You can perform further validation or processing here before sending the request

    // Display a confirmation message or perform any desired actions
    alert("Your service request has been submitted. Thank you!");

    // Reset the form
    document.getElementById("serviceRequestForm").reset();
  });
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
// script.js




// script.js
const videos = document.querySelectorAll('.video');
const overlay = document.getElementById('overlay');
const overlayVideo = document.getElementById('overlay-video');
const closeOverlay = document.getElementById('close');

videos.forEach(video => {
  video.addEventListener('click', () => {
    const source = video.querySelector('source');
    overlayVideo.src = source.src;
    overlay.style.display = 'block';
  });
});

closeOverlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayVideo.pause();
});


const googleTranslateApi = require('google-translate-api-browser');

function translateToArabic(text) {
    return googleTranslateApi.translate(text, { to: 'ar' });
}

const translateButton = document.getElementById('translate-button');
const translatedContent = document.getElementById('translated-content');

translateButton.addEventListener('click', async () => {
    try {
        const translation = await translateToArabic('This is a sample web page.');
        translatedContent.textContent = translation.text;
    } catch (error) {
        console.error('Translation error:', error);
    }
});
