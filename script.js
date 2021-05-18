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

let left = document.querySelector(".left");
let right = document.querySelector(".right");
let hamburgerMenu = document.querySelector(".secondary_menu")

window.addEventListener('scroll', () => {
    
    if(scrollY >= 125){
        left.style.cssText = "transform: translateX(0); opacity: 1;"
        right.style.cssText = "transform: translateX(0); opacity: 1;" 
        hamburgerMenu.style.cssText = "opacity: 1; pointer-events: all"
    } else if(scrollY < 125){
        hamburgerMenu.style.cssText = "opacity: 0; pointer-events: none"
    }
    console.log(scrollY);
})