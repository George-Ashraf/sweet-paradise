let bigimg=document.querySelector('.bigimg')
let smallimg=document.querySelectorAll('.smallimg')
for(let i=0 ;i<smallimg.length ;i++){
    smallimg[i].onclick= function(){
        let oldsrc=bigimg.src
        bigimg.src=smallimg[i].src
        smallimg[i].src=oldsrc
    }
}

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
});

wow = new WOW({
    boxClass: 'animate__animated'
  
  }).init();