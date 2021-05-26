//Mobile Menu Functionality

let mobileNav = document.querySelector(".navi");
let menuBtn = document.querySelector(".secondary_menu");

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle("navi_closed")
});


//contact page
if(document.querySelector("form")){
  let left = document.querySelector(".contact_info");
  let right = document.querySelector("form");


  const contactAnimation = () => {
    left.style.cssText = "transform: translateX(0); opacity: 1;"
    right.style.cssText = "transform: translateX(0); opacity: 1;" 
  };

  window.onload(contactAnimation())
} 






//testimonial carousel

/*
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let images = document.querySelectorAll(".testimonial_carousel .testimonial");
let cycleBtns = document.querySelectorAll(".cycle_btn");


let counter = 0;

cycleBtns.forEach(button => {
  button.addEventListener('click', () =>{
    if(button.classList.contains("previous")){
      counter += 1000
    }else if(button.classList.contains("next")){
      counter -= 1000
      }
    images.forEach(item => {
        item.style.cssText = `transform: translateX(${counter}px);`
      });
  console.log(counter)
  });
});
*/