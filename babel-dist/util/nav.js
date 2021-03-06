"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNav = void 0;

var createNav = function createNav() {
  var nav = document.createElement("nav");
  nav.classList = "navbar navbar-expand-lg navbar-dark bg-dark";
  var navA = document.createElement("a");
  navA.classList = "navbar-brand";
  navA.innerText = "Lab WEBPACK";
  nav.appendChild(navA);
  var divNav = document.createElement("div");
  divNav.id = "navbarNav";
  divNav.classList = "collapse navbar-collapse";
  var ulCollapse = document.createElement("ul");
  ulCollapse.classList = "navbar-nav";
  var li1 = document.createElement("li");
  li1.classList = "nav-item active";
  var a1 = document.createElement("a");
  a1.classList = "nav-link";
  a1.href = "../home/index.html";
  a1.innerText = "Inicio";
  li1.appendChild(a1);
  var li2 = document.createElement("li");
  li2.classList = "nav-item ";
  var a2 = document.createElement("a");
  a2.classList = "nav-link";
  a2.href = "../extra/anim.html";
  a2.innerText = "Extra";
  li2.appendChild(a2);
  ulCollapse.appendChild(li1);
  ulCollapse.appendChild(li2);
  divNav.appendChild(ulCollapse);
  nav.appendChild(divNav);
  return nav;
};

exports.createNav = createNav;