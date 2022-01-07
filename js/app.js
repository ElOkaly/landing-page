/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const startingTime = performance.now(); //
let sections = document.querySelectorAll('section'); // selecting all sections from the html
let menu = document.getElementById('navbar__list'); // selecting the navigation menu contatiner to be filled by the list items
// build the nav
document.body.onload = navbar();// starting by getting the menu bar items
// Build menu
function navbar () {
  //style changed from block to inline to be on one line
sections.forEach((item) => {// looping over the sections
    let sectionName = item.getAttribute('data-nav');// get name of section holded in html
  let sectionId =item.getAttribute('id'); // send the id of the section
//  alert (sectionName + sectionId );
  menuItem = document.createElement('li');// create listitems
  menu.appendChild(menuItem);//
  menuItem.textContent=sectionName; // setting the listitem to section name
   menuItem.classList.add ('menu__link'); //applying the style
   menuItem.setAttribute('href', sectionId);//creating a link to section it in the list item
   menuItem.addEventListener('click',linkClick);// checking if the list item is clicked
   document.addEventListener("scroll",scrollTo);// event listner to check the active class of the section while scrolling .
   // Scroll to anchor ID using click event
   function linkClick (){
    selectorId = item.id;// taking each id carried in each section
   let scroller = document.getElementById(selectorId);//get the id from the section
   scroller.scrollIntoView({behavior:"smooth"});// using the id of the section to bring the section in the top of the page
    
  };
    // Add class 'active' to section when near top of viewport
 function scrollTo(){
   let sectionId=item.getAttribute("id");      //get the id  placed on each list item for the menubar
   sections.forEach((sectionId) => {          // loop for sectionsid to check for them 1 by 1
    if (sectionId.getBoundingClientRect().top  > -5 && sectionId.getBoundingClientRect().bottom < 1000){// if rule to check if the top of the section is appearing in the top of the page
          // to add the active class when appears in the top of the page
      sectionId.classList.add("your-active-class");
      

 }

 else { // if the section is not on top of the page just removes the active class
   //remove the active class from section when it is not in the top of the page
   sectionId.classList.remove("your-active-class");
  }
});
};
// When the user scrolls down  from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  let lastScrollTop = 0;// setting top value to 0
  let st = window.pageYOffset || document.documentElement.scrollTop; // page.offset to see how far the scroller from the top of the page
   if (st > lastScrollTop){// checking if am far away from top
     mybutton.style.display = "block";// showing the scroll top button
      menu.style.display="None"; // hiding the navigation bar menu
      }
      else { // when reach the top of the page again
     menu.style.display = "block"; //show menu again in the top of the page
     mybutton.style.display="none";
      }
};

// adding a button to scroll to top
var mybutton = document.createElement("mybutton");   // Create a <button> element
mybutton.innerHTML = "Top";                          // Insert text
document.body.appendChild(mybutton);                // Append <button> to <body>
mybutton.classList.add("myBtn");                    // adding the styles to the button element
mybutton.addEventListener('click',topFunction);     //waiting for the user to click on the button
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // to work with safari
  document.documentElement.scrollTop = 0; // to get top of document in other browsers
};

//adding a function to check if user stopped scrolling down
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function() {

   // Clear our timeout throughout the scroll
   window.clearTimeout(isScrolling);

   // Set a timeout to run after scrolling ends
   isScrolling = setTimeout(function() {

      // Run the callback
      menu.style.display = "block"; //show menu again in the top of the page

   }, 1000);//the count down timer 

}, false);

//check the performance of the page to get time load
const endingTime = performance.now();// the second variable to check the performance
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');// substaracting the starting time form the ending time to get the time needed to load the page
})};/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


