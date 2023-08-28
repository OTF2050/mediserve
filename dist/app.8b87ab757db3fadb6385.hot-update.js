"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemediserve"]("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSS/style.css */ \"./src/CSS/style.css\");\n/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CSS_style_css__WEBPACK_IMPORTED_MODULE_2__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fontawesome'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\n\r\n // JavaScript code to handle form submission\r\n document.getElementById(\"serviceRequestForm\").addEventListener(\"submit\", function(event) {\r\n    event.preventDefault(); // Prevent form submission\r\n\r\n    // Get form values\r\n    var name = document.getElementById(\"name\").value;\r\n    var email = document.getElementById(\"email\").value;\r\n    var service = document.getElementById(\"service\").value;\r\n\r\n    // You can perform further validation or processing here before sending the request\r\n\r\n    // Display a confirmation message or perform any desired actions\r\n    alert(\"Your service request has been submitted. Thank you!\");\r\n\r\n    // Reset the form\r\n    document.getElementById(\"serviceRequestForm\").reset();\r\n  });\r\n  var modal = document.getElementById(\"myModal\");\r\n  var modalImg = document.getElementById(\"modalImage\");\r\n  var galleryItems = document.getElementsByClassName(\"gallery-item\");\r\n  \r\n  // Add click event listener to each gallery item\r\n  for (var i = 0; i < galleryItems.length; i++) {\r\n    galleryItems[i].addEventListener(\"click\", function() {\r\n      modal.style.display = \"block\";\r\n      modalImg.src = this.getElementsByTagName(\"img\")[0].src;\r\n    });\r\n  }\r\n  \r\n  // Close the modal when the close button is clicked\r\n  var closeBtn = document.getElementsByClassName(\"close\")[0];\r\n  closeBtn.addEventListener(\"click\", function() {\r\n    modal.style.display = \"none\";\r\n  });\r\n  \r\n\r\n// Close the modal when the close button is clicked\r\nvar closeBtn = document.getElementsByClassName(\"close\")[0];\r\ncloseBtn.addEventListener(\"click\", function() {\r\n  modal.style.display = \"none\";\r\n});\r\n\r\n// scripts.js\r\n\r\n// Function to show or hide the \"Back to Top\" button based on scrolling\r\nwindow.onscroll = function() {\r\n  showBackToTopBtn();\r\n};\r\n\r\nfunction showBackToTopBtn() {\r\n  const backToTopBtn = document.getElementById('backToTopBtn');\r\n  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\r\n      backToTopBtn.style.display = 'block';\r\n  } else {\r\n      backToTopBtn.style.display = 'none';\r\n  }\r\n}\r\n// script.js\r\n\r\n\r\n\r\n\r\n// script.js\r\nconst videos = document.querySelectorAll('.video');\r\nconst overlay = document.getElementById('overlay');\r\nconst overlayVideo = document.getElementById('overlay-video');\r\nconst closeOverlay = document.getElementById('close');\r\n\r\nvideos.forEach(video => {\r\n  video.addEventListener('click', () => {\r\n    const source = video.querySelector('source');\r\n    overlayVideo.src = source.src;\r\n    overlay.style.display = 'block';\r\n  });\r\n});\r\n\r\ncloseOverlay.addEventListener('click', () => {\r\n  overlay.style.display = 'none';\r\n  overlayVideo.pause();\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://mediserve/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d1c010796e2ea0c0434f")
/******/ })();
/******/ 
/******/ }
);