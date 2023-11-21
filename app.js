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

  let marker=document.querySelector('.marker')
let item=document.querySelectorAll('.navbar-nav li a')

function indicator(e){
marker.style.left=e.offsetLeft+'px'
marker.style.width=e.offsetWidth+'px'
}
item.forEach(link =>{
    link.addEventListener('click',(e)=>{
        indicator(e.target)
    })
})