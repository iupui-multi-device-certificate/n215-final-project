import { homeView } from "./views/homeView.js";
import { events } from "./model.js";
import { eventsView } from "./views/partials/_eventsView.js";

import { blogs } from "./model.js";
import { blogView } from "./views/blogView.js";

//home page
const homePage = homeView(eventsView(events));
// const homePage = homeView(tours);

//blogs page
const blogPage = blogView(blogs);

// general stuff
const setPage = (pageID) => {
  /*
    NOTE: eval is a security risk and should be phased out
      https://www.w3schools.com/jsref/jsref_eval.asp
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
    Ideally, find a more generic routing (maybe hashtag-based) to remove the need to use eval. 
 */

  // console.log(homePage);
  // console.log(eventsComponent);
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
};

const navClickHandler = (e) => {
  let aID = e.currentTarget.id;

  console.log("you clicked: ", aID);

  let pageID = aID + "Page";
  setPage(pageID);
  setNavBar(pageID);
};

const initListeners = () => {
  //if time convert to vanilla javascript
  $("nav a").click(function (e) {
    navClickHandler(e);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  initListeners();
});
