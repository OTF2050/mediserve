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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSS/style.css */ \"./src/CSS/style.css\");\n/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CSS_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fontawesome_4_7_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fontawesome-4.7/css/font-awesome.min.css */ \"./node_modules/fontawesome-4.7/css/font-awesome.min.css\");\n/* harmony import */ var fontawesome_4_7_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fontawesome_4_7_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n // JavaScript code to handle form submission\r\n \r\n\r\n window.onload = ()=> {\r\n  var modal = document.getElementById(\"myModal\");\r\n  var modalImg = document.getElementById(\"modalImage\");\r\n  var galleryItems = document.getElementsByClassName(\"gallery-item\");\r\n  \r\n  // Add click event listener to each gallery item\r\n  for (var i = 0; i < galleryItems.length; i++) {\r\n    galleryItems[i].addEventListener(\"click\", function() {\r\n      modal.style.display = \"block\";\r\n      modalImg.src = this.getElementsByTagName(\"img\")[0].src;\r\n    });\r\n  }\r\n  \r\n  // Close the modal when the close button is clicked\r\n  var closeBtn = document.getElementsByClassName(\"close\")[0];\r\n  closeBtn.addEventListener(\"click\", function() {\r\n    modal.style.display = \"none\";\r\n  });\r\n  \r\n  \r\n  \r\n  \r\n  // scripts.js\r\n  \r\n  // Function to show or hide the \"Back to Top\" button based on scrolling\r\n  window.onscroll = function() {\r\n  showBackToTopBtn();\r\n  };\r\n  \r\n  function showBackToTopBtn() {\r\n  const backToTopBtn = document.getElementById('backToTopBtn');\r\n  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\r\n      backToTopBtn.style.display = 'block';\r\n  } else {\r\n      backToTopBtn.style.display = 'none';\r\n  }\r\n  }\r\n  \r\n  \r\n   const whatsapp = document.getElementById('whatsapp-btn');\r\n   whatsapp.addEventListener('click', function() {\r\n  window.location.href = 'https://api.whatsapp.com/send?phone=+966 54 046 6679';\r\n  });\r\n \r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://mediserve/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7ef3f55692a2de960a3e")
/******/ })();
/******/ 
/******/ }
);