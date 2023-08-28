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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSS/style.css */ \"./src/CSS/style.css\");\n/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CSS_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ \"./node_modules/font-awesome/css/font-awesome.css\");\n/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n // JavaScript code to handle form submission\r\n document.getElementById(\"serviceRequestForm\").addEventListener(\"submit\", function(event) {\r\n    event.preventDefault(); // Prevent form submission\r\n\r\n    // Get form values\r\n    var name = document.getElementById(\"name\").value;\r\n    var email = document.getElementById(\"email\").value;\r\n    var service = document.getElementById(\"service\").value;\r\n\r\n    // You can perform further validation or processing here before sending the request\r\n\r\n    // Display a confirmation message or perform any desired actions\r\n    alert(\"Your service request has been submitted. Thank you!\");\r\n\r\n    // Reset the form\r\n    document.getElementById(\"serviceRequestForm\").reset();\r\n  });\r\n  var modal = document.getElementById(\"myModal\");\r\n  var modalImg = document.getElementById(\"modalImage\");\r\n  var galleryItems = document.getElementsByClassName(\"gallery-item\");\r\n  \r\n  // Add click event listener to each gallery item\r\n  for (var i = 0; i < galleryItems.length; i++) {\r\n    galleryItems[i].addEventListener(\"click\", function() {\r\n      modal.style.display = \"block\";\r\n      modalImg.src = this.getElementsByTagName(\"img\")[0].src;\r\n    });\r\n  }\r\n  \r\n  // Close the modal when the close button is clicked\r\n  var closeBtn = document.getElementsByClassName(\"close\")[0];\r\n  closeBtn.addEventListener(\"click\", function() {\r\n    modal.style.display = \"none\";\r\n  });\r\n  \r\n\r\n// Close the modal when the close button is clicked\r\nvar closeBtn = document.getElementsByClassName(\"close\")[0];\r\ncloseBtn.addEventListener(\"click\", function() {\r\n  modal.style.display = \"none\";\r\n});\r\n\r\n// scripts.js\r\n\r\n// Function to show or hide the \"Back to Top\" button based on scrolling\r\nwindow.onscroll = function() {\r\n  showBackToTopBtn();\r\n};\r\n\r\nfunction showBackToTopBtn() {\r\n  const backToTopBtn = document.getElementById('backToTopBtn');\r\n  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\r\n      backToTopBtn.style.display = 'block';\r\n  } else {\r\n      backToTopBtn.style.display = 'none';\r\n  }\r\n}\r\n\r\n// Function to scroll to the top when the \"Back to Top\" button is clicked\r\ndocument.getElementById('backToTopBtn').addEventListener('click', function() {\r\n  document.body.scrollTop = 0; // For Safari\r\n  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera\r\n});\r\n\r\n// script.js\r\nconst images = document.querySelectorAll('.image');\r\n\r\nimages.forEach(image => {\r\n  image.addEventListener('click', () => {\r\n    // Handle the click event here, such as opening a modal or enlarging the image.\r\n    // You can use libraries like Lightbox or create your own custom functionality.\r\n    // For example, you can change the source of a modal's image to the clicked image's source.\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://mediserve/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("216d0bb18cdb0e2bec50")
/******/ })();
/******/ 
/******/ }
);