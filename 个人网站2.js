// image filter
function workStill(){
    let pg1=document.querySelector("#official")
    pg1.style.display="none"
    let pg2=document.querySelector("#unofficial")
    pg2.style.display="none"
    let pg3=document.querySelector("#workStillImg")
    pg3.style.display="block"
}
function wallpaper(){
    let pg1=document.querySelector("#official")
    pg1.style.display="block"
    let pg2=document.querySelector("#unofficial")
    pg2.style.display="block"
    let pg3=document.querySelector("#workStillImg")
    pg3.style.display="none"

}
function official(){
    let pg1=document.querySelector("#official")
    pg1.style.display="block"
    let pg2=document.querySelector("#unofficial")
    pg2.style.display="none"
    let pg3=document.querySelector("#workStillImg")
    pg3.style.display="none"
}
function unofficial(){
    let pg1=document.querySelector("#unofficial")
    pg1.style.display="block"
    let pg2=document.querySelector("#official")
    pg2.style.display="none"
    let pg3=document.querySelector("#workStillImg")
    pg3.style.display="none"
}



// section reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

// navigation scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    document.getElementById("bar").style.background = "#736A62";
    document.getElementById("bar").style.opacity = "0.9";
} else {

    document.getElementById("bar").style.background = "none";
}
}
