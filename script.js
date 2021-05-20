
//home page
const nav = document.querySelector(".nav_two");
const stickyNavigation = () => { 
const navTop = nav.offsetTop;
  
  if(window.scrollY > 0){
    nav.style.transform = "translate3d(0, 0, 0)";
  } else if (window.scrollY <= 0){
    nav.style.transform = "translate3d(0, -105%, 0)";
  }
}
let scrollObject = document.querySelector(".scroll_logo");
  
window.addEventListener('scroll', () => {
  stickyNavigation()
});

//contact page
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

//image carousel


let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let images = document.querySelectorAll(".testimonial_carousel .testimonial");
let cycleBtns = document.querySelectorAll(".cycle_btn");

let counter = 1;

cycleBtns.forEach(button => {
  button.addEventListener('click', () =>{
    if(button.classList.contains("previous")){
      counter--
    }else if(button.classList.contains("next")){
      counter++
    }
    switch(counter){
      case 0 :
        counter = 3
        one.style.display = "none"
        two.style.display = "none"
        three.style.display = "block"
        break;
      case 1 :
        one.style.display = "block"
        two.style.display = "none"
        three.style.display = "none"
        break;
      case 2 :
        one.style.display = "none"
        two.style.display = "block"
        three.style.display = "none"
        break;
      case 3 : 
        one.style.display = "none"
        two.style.display = "none"
        three.style.display = "block"
        break;
      case 4 : 
        one.style.display = "block"
        two.style.display = "none"
        three.style.display = "none"
        counter = 1;
    }
  })
});
