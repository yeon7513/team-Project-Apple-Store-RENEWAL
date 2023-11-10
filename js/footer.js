'use strict'

const zoom1El = document.querySelector('.zoom1');
const zoom2El = document.querySelector('.zoom2');
const zoom3El = document.querySelector('.zoom3');
const zoom4El = document.querySelector('.zoom4');
const zoom5El = document.querySelector('.zoom5');

const open1El = document.querySelector('.open1');
const open2El = document.querySelector('.open2');
const open3El = document.querySelector('.open3');
const open4El = document.querySelector('.open4');
const open5El = document.querySelector('.open5');

const addSpan1El = document.querySelector('.footer__text1 span');
const addSpanIn1El = document.querySelector('.footer__text1 span span');
const addSpan2El = document.querySelector('.footer__text2 span');
const addSpanIn2El = document.querySelector('.footer__text2 span span');
const addSpan3El = document.querySelector('.footer__text3 span');
const addSpanIn3El = document.querySelector('.footer__text3 span span');
const addSpan4El = document.querySelector('.footer__text4 span');
const addSpanIn4El = document.querySelector('.footer__text4 span span');
const addSpan5El = document.querySelector('.footer__text5 span');
const addSpanIn5El = document.querySelector('.footer__text5 span span');
const addSpan6El = document.querySelector('.footer__text6 span');
const addSpanIn6El = document.querySelector('.footer__text6 span span');
const addSpan7El = document.querySelector('.footer__text7 span');
const addSpanIn7El = document.querySelector('.footer__text7 span span');
const addSpan8El = document.querySelector('.footer__text8 span');
const addSpanIn8El = document.querySelector('.footer__text8 span span');
const addSpan9El = document.querySelector('.footer__text9 span');
const addSpanIn9El = document.querySelector('.footer__text9 span span');



// 더보기 버튼 누르면 상세 내용 펼쳐지는것
let isOpen1 = false;
let isOpen2 = false;
let isOpen3 = false;
let isOpen4 = false;
let isOpen5 = false;

zoom1El.addEventListener('click', () => {
  isOpen1 = !isOpen1;
  open1El.style.display = isOpen1 ? 'block' : 'none';
  open1El.style.color = '#464646';
  open1El.style.fontWeight = '600';
});
zoom2El.addEventListener('click', () => {
  isOpen2 = !isOpen2;
  open2El.style.display = isOpen2 ? 'block' : 'none';
  open2El.style.color = '#464646';
  open2El.style.fontWeight = '600';
});
zoom3El.addEventListener('click', () => {
  isOpen3 = !isOpen3;
  open3El.style.display = isOpen3 ? 'block' : 'none';
  open3El.style.color = '#464646';
  open3El.style.fontWeight = '600';
});
zoom4El.addEventListener('click', () => {
  isOpen4 = !isOpen4;
  open4El.style.display = isOpen4 ? 'block' : 'none';
  open4El.style.color = '#464646';
  open4El.style.fontWeight = '600';
});
zoom5El.addEventListener('click', () => {
  isOpen5 = !isOpen5;
  open5El.style.display = isOpen5 ? 'block' : 'none';
  open5El.style.color = '#464646';
  open5El.style.fontWeight = '600';
});



const openElements = [open1El, open2El, open3El, open4El, open5El];

const isOpen = [false, false, false, false, false];

function collapseAllExcept(index) {
  openElements.forEach((el, i) => {
    if (i !== index) {
      isOpen[i] = false;
      el.style.display = 'none';
    }
  });
}

zoom1El.addEventListener('click', () => {
  isOpen[0] = !isOpen[0];
  open1El.style.display = isOpen[0] ? 'block' : 'none';
  open1El.style.color = '#464646';
  open1El.style.fontWeight = '600';
  open1El.style.backgroundColor = '#f5f5f7';
  open1El.style.padding = '14px';
  open1El.style.marginBottom = '30px';
  open1El.style.marginTop = '10px';
  collapseAllExcept(0);
});

zoom2El.addEventListener('click', () => {
  isOpen[1] = !isOpen[1];
  open2El.style.display = isOpen[1] ? 'block' : 'none';
  open2El.style.color = '#464646';
  open2El.style.fontWeight = '600';
  open2El.style.backgroundColor = '#f5f5f7';
  open2El.style.padding = '14px';
  open2El.style.marginBottom = '30px';
  open2El.style.marginTop = '10px';
  collapseAllExcept(1);
});

zoom3El.addEventListener('click', () => {
  isOpen[2] = !isOpen[2];
  open3El.style.display = isOpen[2] ? 'block' : 'none';
  open3El.style.color = '#464646';
  open3El.style.fontWeight = '600';
  open3El.style.backgroundColor = '#f5f5f7';
  open3El.style.padding = '14px';
  open3El.style.marginBottom = '30px';
  open3El.style.marginTop = '10px';
  collapseAllExcept(2);
});

zoom4El.addEventListener('click', () => {
  isOpen[3] = !isOpen[3];
  open4El.style.display = isOpen[3] ? 'block' : 'none';
  open4El.style.color = '#464646';
  open4El.style.fontWeight = '600';
  open4El.style.backgroundColor = '#f5f5f7';
  open4El.style.padding = '14px';
  open4El.style.marginBottom = '30px';
  open4El.style.marginTop = '10px';
  collapseAllExcept(3);
});

zoom5El.addEventListener('click', () => {
  isOpen[4] = !isOpen[4];
  open5El.style.display = isOpen[4] ? 'block' : 'none';
  open5El.style.color = '#464646';
  open5El.style.fontWeight = '600';
  open5El.style.backgroundColor = '#f5f5f7';
  open5El.style.padding = '14px';
  open5El.style.marginBottom = '30px';
  open5El.style.marginTop = '10px';
  collapseAllExcept(4);
});



// 팝업 열리게 하는거
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

// 팝업닫게하는거 + @ 
function footerClosePopup() {
  document.getElementById("popup").style.display = "none";

  // +더보기 버튼 눌러서 펼쳐둔채로 닫기 버튼 누르면 펼쳐져있는거 초기상태로 되돌리는거
  if (isOpen1) {
    isOpen1 = !isOpen1;
    open1El.style.display = 'none';
    open1El.style.color = '#464646';
    open1El.style.fontWeight = '600';
  }

  if (isOpen2) {
    isOpen2 = !isOpen2;
    open2El.style.display = 'none';
    open2El.style.color = '#464646';
    open2El.style.fontWeight = '600';
  }

  if (isOpen3) {
    isOpen3 = !isOpen3;
    open3El.style.display = 'none';
    open3El.style.color = '#464646';
    open3El.style.fontWeight = '600';
  }

  if (isOpen4) {
    isOpen4 = !isOpen4;
    open4El.style.display = 'none';
    open4El.style.color = '#464646';
    open4El.style.fontWeight = '600';
  }

  if (isOpen5) {
    isOpen5 = !isOpen5;
    open5El.style.display = 'none';
    open5El.style.color = '#464646';
    open5El.style.fontWeight = '600';
  }
}




// 카테고리 부분

const categoryTitle1 = document.querySelector('.footer__category_inner1');
const categoryTitle2 = document.querySelector('.footer__category_inner2');
const categoryTitle3 = document.querySelector('.footer__category_inner3');
const categoryTitle4 = document.querySelector('.footer__category_inner4');
const categoryTitle5 = document.querySelector('.footer__category_inner5');
const categoryTitle6 = document.querySelector('.footer__category_inner6');
const categoryTitle7 = document.querySelector('.footer__category_inner7');
const categoryTitle8 = document.querySelector('.footer__category_inner8');
const categoryTitle9 = document.querySelector('.footer__category_inner9');

const categoryInner1 = document.querySelector('.category__show1');
const categoryInner2 = document.querySelector('.category__show2');
const categoryInner3 = document.querySelector('.category__show3');
const categoryInner4 = document.querySelector('.category__show4');
const categoryInner5 = document.querySelector('.category__show5');
const categoryInner6 = document.querySelector('.category__show6');
const categoryInner7 = document.querySelector('.category__show7');
const categoryInner8 = document.querySelector('.category__show8');
const categoryInner9 = document.querySelector('.category__show9');

const arrowDown1 = document.querySelector('.arrow_down1');
const arrowDown2 = document.querySelector('.arrow_down2');
const arrowDown3 = document.querySelector('.arrow_down3');
const arrowDown4 = document.querySelector('.arrow_down4');
const arrowDown5 = document.querySelector('.arrow_down5');
const arrowDown6 = document.querySelector('.arrow_down6');
const arrowDown7 = document.querySelector('.arrow_down7');
const arrowDown8 = document.querySelector('.arrow_down8');
const arrowDown9 = document.querySelector('.arrow_down9');

// 현재 요소의 초기 표시 상태를 확인하고 설정합니다.
let isDisplayed = false;
categoryInner1.style.display = 'none';
categoryInner2.style.display = 'none';
categoryInner3.style.display = 'none';
categoryInner4.style.display = 'none';
categoryInner5.style.display = 'none';
categoryInner6.style.display = 'none';
categoryInner7.style.display = 'none';
categoryInner8.style.display = 'none';
categoryInner9.style.display = 'none';


categoryTitle1.addEventListener('click', () => {
  if (isDisplayed) {
    categoryInner1.style.display = 'none';
    arrowDown1.style.transform = 'rotate(360deg)';
    isDisplayed = false;
  } else {
    categoryInner1.style.display = 'block';
    arrowDown1.style.transform = 'rotate(180deg)';
    isDisplayed = true;
  }
});
categoryTitle2.addEventListener('click', () => {
  if (isDisplayed) {
    categoryInner2.style.display = 'none';
    arrowDown2.style.transform = 'rotate(360deg)';
    isDisplayed = false;
  } else {
    categoryInner2.style.display = 'block';
    arrowDown2.style.transform = 'rotate(180deg)';
    isDisplayed = true;
  }
});
categoryTitle3.addEventListener('click', () => {
  if (isDisplayed) {
    categoryInner3.style.display = 'none';
    arrowDown3.style.transform = 'rotate(360deg)';
    isDisplayed = false;
  } else {
    categoryInner3.style.display = 'block';
    arrowDown3.style.transform = 'rotate(180deg)';
    isDisplayed = true;
  }
});
categoryTitle4.addEventListener('click', () => {
  if (isDisplayed) {
    categoryInner4.style.display = 'none';
    arrowDown4.style.transform = 'rotate(360deg)';
    isDisplayed = false;
  } else {
    categoryInner4.style.display = 'block';
    arrowDown4.style.transform = 'rotate(180deg)';
    isDisplayed = true;
  }
});
categoryTitle5.addEventListener('click', () => {
  if (isDisplayed) {
    categoryInner5.style.display = 'none';
    arrowDown5.style.transform = 'rotate(360deg)';
    isDisplayed = false;
  } else {
    categoryInner5.style.display = 'block';
    arrowDown5.style.transform = 'rotate(180deg)';
    isDisplayed = true;
  }
});
categoryTitle6.addEventListener('click', () => {
  if (isDisplayed) {
    categoryInner6.style.display = 'none';
    arrowDown6.style.transform = 'rotate(360deg)';
    isDisplayed = false;
  } else {
    categoryInner6.style.display = 'block';
    arrowDown6.style.transform = 'rotate(180deg)';
    isDisplayed = true;
  }
});
categoryTitle7.addEventListener('click', () => {
  if (isDisplayed) {
    categoryInner7.style.display = 'none';
    arrowDown7.style.transform = 'rotate(360deg)';
    isDisplayed = false;
  } else {
    categoryInner7.style.display = 'block';
    arrowDown7.style.transform = 'rotate(180deg)';
    isDisplayed = true;
  }
});
categoryTitle8.addEventListener('click', () => {
  if (isDisplayed) {
    categoryInner8.style.display = 'none';
    arrowDown8.style.transform = 'rotate(360deg)';
    isDisplayed = false;
  } else {
    categoryInner8.style.display = 'block';
    arrowDown8.style.transform = 'rotate(180deg)';
    isDisplayed = true;
  }
});
categoryTitle9.addEventListener('click', () => {
  if (isDisplayed) {
    categoryInner9.style.display = 'none';
    arrowDown9.style.transform = 'rotate(360deg)';
    isDisplayed = false;
  } else {
    categoryInner9.style.display = 'block';
    arrowDown9.style.transform = 'rotate(180deg)';
    isDisplayed = true;
  }
});
