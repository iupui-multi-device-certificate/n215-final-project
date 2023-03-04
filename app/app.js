import { homeView } from "./views/homeView.js";
import { events } from "./model.js";

//home page
const homePage = homeView();

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



const navClickHandler = (e) => {
  let aID = e.currentTarget.id;

  console.log("you clicked: ", aID);  

  let pageID = aID + "Page";
  setPage(pageID);
  // setNavBar(pageID);
};

const initListeners = () => {
  document.querySelector("nav a").addEventListener("click", (e) =>  {
    navClickHandler(e);
    // console.log(e.currentTarget.id);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initListeners();

  
});
