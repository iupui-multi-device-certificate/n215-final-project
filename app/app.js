import { homeView } from "./views/homeView.js";
import { events } from "./model.js";
import { eventsView } from "./views/partials/_eventsView.js";

import { aboutView } from "./views/aboutView.js";

import { galleryItems } from "./data/galleryItems.js";
import { galleryView } from "./views/galleryView.js";

import { galleryDetailView } from "./views/galleryDetailView.js";

import { blogs } from "./model.js";
import { blogView } from "./views/blogView.js";

import { blogDetailView } from "./views/blogDetailView.js";

import { contactView } from "./views/contactView.js";

//home page
const homePage = homeView(eventsView(events));

//about page
const aboutPage = aboutView;

//gallery page
const galleryPage = galleryView(galleryItems);

//blogs page
const blogPage = blogView(blogs);

//contact page
const contactPage = contactView;

// general stuff

//click handler to get detail of item, e.g. blog & gallery items
const itemClickHandler = (e, view, items) => {
  let itemID = e.currentTarget.id;
  const getItem = (itemID) => items.find((item) => itemID == item.id);
  const requestedItem = getItem(itemID);
  const itemPage = view(requestedItem);

  $("#app").html(itemPage);
};

const setPage = (pageID) => {
  /*
    NOTE: eval is a security risk and should be phased out
      https://www.w3schools.com/jsref/jsref_eval.asp
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
    Ideally, find a more generic routing (maybe hashtag-based) to remove the need to use eval. 
 */

  $("#app").html(eval(pageID));
};

const initHome = () => {
  $("#app").html(homePage);
};

const setNavBar = (pageID) => {
  //make use of built-in conditional
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  // add/remove visible, depending on test conditional, i less than 10
  // div.classList.toggle("visible", i < 10);
  document
    .getElementById("navBar")
    .classList.toggle("navbar--home", pageID === "homePage");

  if (pageID === "homePage") {
    document.getElementById("navLogoImage").src =
      "./images/logo/logo-white.png";
  } else {
    document.getElementById("navLogoImage").src =
      "./images/logo/logo-black.png";
  }
};

const navClickHandler = (e) => {
  let aID = e.currentTarget.id;

  let pageID = aID + "Page";
  setPage(pageID);
  setNavBar(pageID);
};

const initListeners = () => {
  //if time convert to vanilla javascript
  $("nav a").click(function (e) {
    navClickHandler(e);
  });

  $(document).on("click", ".blog-link", function (e) {
    itemClickHandler(e, blogDetailView, blogs);
  });

  $(document).on("click", ".gallery-item-link", function (e) {
    itemClickHandler(e, galleryDetailView, galleryItems);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  initListeners();
  initHome();
});
