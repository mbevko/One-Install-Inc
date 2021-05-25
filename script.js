

//contact page
/*
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let hamburgerMenu = document.querySelector(".secondary_menu")

const contactAnimation = () => {
  left.style.cssText = "transform: translateX(0); opacity: 1;"
  right.style.cssText = "transform: translateX(0); opacity: 1;" 
}

window.onload(contactAnimation())

window.addEventListener('scroll', () => {
    
    if(scrollY >= 125){
        hamburgerMenu.style.cssText = "opacity: 1; pointer-events: all"
    } else if(scrollY < 125){
        hamburgerMenu.style.cssText = "opacity: 0; pointer-events: none"
    }
    console.log(scrollY);
})
*/


//image carousel

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

let mobileNav = document.querySelector(".navi");
let menuBtn = document.querySelector(".secondary_menu");

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle("navi_closed")
})