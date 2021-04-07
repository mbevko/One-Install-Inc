const nav = document.querySelector(".nav_two");


function stickyNavigation() { 
const navTop = nav.offsetTop;
  
  if(window.scrollY > 0){
    nav.style.transform = "translate3d(0, 0, 0)";
  } else if (window.scrollY <= 0){
    nav.style.transform = "translate3d(0, -105%, 0)";
  }
}


window.addEventListener('scroll', stickyNavigation);
