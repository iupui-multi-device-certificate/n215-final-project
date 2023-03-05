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

//gallery detail
//could be combined with the blog click handler??
//detailClickHandler(e, view)
const galleryItemClickHandler = (e) => {
  let galleryItemID = e.currentTarget.id;
  // console.log("galleryItemID: ", galleryItemID);

  //if use === get undefined because galleryItem.id is a number
  //ideally should convert so they're on same data type & then use ===
  const getGalleryItem = (galleryItemID) =>
    galleryItems.find((galleryItem) => galleryItemID == galleryItem.id);

  const requestedGalleryItem = getGalleryItem(galleryItemID);

  const galleryItemPage = galleryDetailView(requestedGalleryItem);

  $("#app").html(galleryItemPage);
};

//blogs page
const blogPage = blogView(blogs);

//blog detail
const blogClickHandler = (e) => {
  let blogID = e.currentTarget.id;
  // console.log("blogID: ", blogID);

  //if use === get undefined because blog.id is a number
  //ideally should convert so they're on same data type & then use ===
  const getBlog = (blogID) => blogs.find((blog) => blogID == blog.id);

  const requestedBlog = getBlog(blogID);

  const blogPage = blogDetailView(requestedBlog);

  $("#app").html(blogPage);
};

//contact page
const contactPage = contactView;

// general stuff
const setPage = (pageID) => {
  /*
    NOTE: eval is a security risk and should be phased out
      https://www.w3schools.com/jsref/jsref_eval.asp
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
    Ideally, find a more generic routing (maybe hashtag-based) to remove the need to use eval. 
 */

  $("#app").html(eval(pageID));
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
    blogClickHandler(e);
  });

  $(document).on("click", ".gallery-item-link", function (e) {
    galleryItemClickHandler(e);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  initListeners();
});
