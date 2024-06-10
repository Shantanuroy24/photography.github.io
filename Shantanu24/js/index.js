function showSlidebar(){
    const slider=document.querySelector(".slider")
    slider.style.display="flex"
}
function hideSlidebar(){
    const slider=document.querySelector(".slider")
    slider.style.display="none"
}


// /* =========<!--==================== Number-counting =================-->======== */



let valueDisplays=document.querySelectorAll(".num")
let interval=4000
valueDisplays.forEach(valueDisplay=>{
    let startValue=0
    let endValue=parseInt(valueDisplay.getAttribute("data-val"))
   let duration=Math.floor(interval / endValue)
   let counter=setInterval(function(){
    startValue += 1
    valueDisplay.textContent=startValue
    if(startValue==endValue){
        clearInterval(counter)
    }
   },duration)

})


const swiperBar = new Swiper('.home__swiper', {
    
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect:'creative',
    creativeEffect:{
        prev:{
            tranlate:[-100,0,-500],
            rotate:[0,0,15],
            opacity:0
        },
        next:{
            tranlate:[100,0,-500],
            rotate:[0,0,-15],
            opacity:0
        },
    },
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },

  });


  const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
