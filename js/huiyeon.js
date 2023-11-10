var swiper6 = new Swiper(".mainSwiper", {
  grabCursor: true,
  effect: "creative",
  speed: 2000,
  loop: true,
  autoplay:{
    delay: 2500, // 시간 설정
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -100, 0],
    },
  },
});


// service
const servItems = document.querySelector(".serv-items");
const servItem = Array.from(document.querySelectorAll(".serv-item"));
let windowWidth = window.innerWidth;
let activeItem = null;

function setActiveItem(item, index, width) {

  servItem.forEach(item => {
    resetActiveItem(item, width);
  });

  item.style.width = width > 1300 ? '40rem' : width <= 1299 && width > 600 ? '40rem' : '36rem';

  const servActive = item.querySelector(".serv-view-active");
  const servDeactive = item.querySelector(".serv-view-deactive");
  if(width > 1300) {
    if(index === 0){
      servItems.style.gridTemplateAreas =
        `'appleTV appleTV enter appleHome' 'appleCare school company refurbish'`;
    }
    if(index === 1){
      servItems.style.gridTemplateAreas =
        `'appleTV enter enter appleHome' 'appleCare school company refurbish'`;
    }
    if(index === 2){
      servItems.style.gridTemplateAreas =
        `'appleTV enter appleHome appleHome' 'appleCare school company refurbish'`;
    }
    if(index === 3){
      servItems.style.gridTemplateAreas =
        `'enter appleHome appleCare appleCare' 'appleTV school company refurbish'`;
    }
    if(index === 4){
      servItems.style.gridTemplateAreas =
        `'appleTV enter appleHome appleCare' 'school school company refurbish'`;
    }
    if(index === 5){
      servItems.style.gridTemplateAreas =
      `'appleTV enter appleHome appleCare' 'school company company refurbish'`;
    }
    if(index === 6){
      servItems.style.gridTemplateAreas =
      `'appleTV enter appleHome appleCare' 'school company refurbish refurbish'`;
    }
  } else if (width <= 1299 && width > 600) {
    if(index === 0){
      servItems.style.gridTemplateAreas =
        `'appleTV appleTV' 'enter appleHome'
        'appleCare school' 'company refurbish'`;
    }
    if(index === 1){
      servItems.style.gridTemplateAreas =
        `'enter enter' 'appleTV appleHome'
        'appleCare school' 'company refurbish'`;
    }
    if(index === 2){
      servItems.style.gridTemplateAreas =
        `'appleTV enter' 'appleHome appleHome'
        'appleCare school' 'company refurbish'`;
    }
    if(index === 3){
      servItems.style.gridTemplateAreas =
        `'appleTV enter' 'appleCare appleCare'
        'appleHome school' 'company refurbish'`;
    }
    if(index === 4){
      servItems.style.gridTemplateAreas =
        `'appleTV enter' 'appleHome appleCare'
        'school school' 'company refurbish'`;
    }
    if(index === 5){
      servItems.style.gridTemplateAreas =
        `'appleTV enter' 'appleHome appleCare'
        'company company' 'school refurbish'`;
    }
    if(index === 6){
      servItems.style.gridTemplateAreas =
        `'appleTV enter' 'appleHome appleCare'
        'school company' 'refurbish refurbish'`;
    }
  } else {
    if(index === 0){
      servItems.style.gridTemplateAreas =
        `'appleTV appleTV' 'enter appleHome'
        'appleCare school' 'company refurbish'`;
    }
    if(index === 1){
      servItems.style.gridTemplateAreas =
        `'enter enter' 'appleTV appleHome'
        'appleCare school' 'company refurbish'`;
    }
    if(index === 2){
      servItems.style.gridTemplateAreas =
        `'appleTV enter' 'appleHome appleHome'
        'appleCare school' 'company refurbish'`;
    }
    if(index === 3){
      servItems.style.gridTemplateAreas =
        `'appleTV enter' 'appleCare appleCare'
        'appleHome school' 'company refurbish'`;
    }
    if(index === 4){
      servItems.style.gridTemplateAreas =
        `'appleTV enter' 'appleHome appleCare'
        'school school' 'company refurbish'`;
    }
    if(index === 5){
      servItems.style.gridTemplateAreas =
        `'appleTV enter' 'appleHome appleCare'
        'company company' 'school refurbish'`;
    }
    if(index === 6){
      servItems.style.gridTemplateAreas =
        `'appleTV enter' 'appleHome appleCare'
        'school company' 'refurbish refurbish'`;
    }
  } 
  if (servDeactive && servActive) {
    servDeactive.style.display = 'none';
    servActive.style.display = 'block';
  }
};

function resetActiveItem(item, width) {
  item.style.width = width > 1300 ? '19.375rem' : width <= 1299 && width > 600 ? '19.375rem' : '17rem';
  if(width > 1300) {
    servItems.style.gridTemplateAreas =
      `'appleTV enter appleHome appleCare' '. school company refurbish'`;
  } else if (width <= 1299 && width > 600) {
    servItems.style.gridTemplateAreas =
      `'appleTV enter' 'appleHome appleCare' 'school company' 'refurbish .'`;
  } else {
    servItems.style.gridTemplateAreas =
      `'appleTV enter' 'appleHome appleCare' 'school company' 'refurbish .'`;
  }

  const activeServActive = item.querySelector(".serv-view-active");
  const activeServDeactive = item.querySelector(".serv-view-deactive");
  if (activeServActive && activeServDeactive) {
    activeServActive.style.display = 'none';
    activeServDeactive.style.display = 'block';
  }
};

function handleResize() {
  windowWidth = window.innerWidth;
  servItem.forEach((item, index) => {
    if (item === activeItem) {
      setActiveItem(item, index, windowWidth);
    } else {
      resetActiveItem(item, windowWidth);
    }
  });
  if (activeItem) {
    setActiveItem(activeItem, servItem.indexOf(activeItem), windowWidth);
  }
}

servItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item !== activeItem) {
      if (activeItem) {
        setActiveItem(activeItem, servItem.indexOf(activeItem), windowWidth);
      }
      activeItem = item;
      setActiveItem(item, index, windowWidth);
    } else {
      resetActiveItem(item, windowWidth);
      activeItem = null;
    }
  });
});

window.addEventListener('resize', () => {
  handleResize();
});

handleResize();
