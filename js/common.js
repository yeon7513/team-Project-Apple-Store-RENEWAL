window.onload = function(){
  const fullPage = window.innerWidth >= 1300
  
  if(fullPage){
    const section = document.querySelectorAll('section');
    const sec_length = section.length;
    section.forEach(function(item, index){
      item.addEventListener('mousewheel', function(event){
        event.preventDefault();
        let delta = 0;
  
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;
  
        let moveTop = window.scrollY;
        let selector = section[index];
  
        if (delta < 0){
          if (selector !== sec_length-1){
            try{
              moveTop = window.pageYOffset + selector.nextElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }
  
        else{
          if (selector !== 0){
            try{
              moveTop = window.pageYOffset + selector.previousElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }
  
        window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
      });
    });
  }
}

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', _.throttle(function(){

  if (window.scrollY > 200){
    gsap.to(toTop, .7, {
      y : 0
    });
  } else {
    gsap.to(toTop, .7, {
      y : 200
    });
  }
}, 300));

/* to top */
toTop.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo : 0 
  });
});