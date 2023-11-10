'use strict'
  if (window.innerWidth >= 1300) {
    {
      const storeElement = document.querySelector('.store');
      const productElement = document.querySelector('.product');
      const accessoryElement = document.querySelector('.accessory');
      const subscribeElement = document.querySelector('.subscribe');
      const supportElement = document.querySelector('.support');
      const searchElement = document.querySelector('.search');
      const cartElement = document.querySelector('.shoppingbag');

      
      storeElement.style.display = 'block';
      productElement.style.display = 'block';
      accessoryElement.style.display = 'block';
      subscribeElement.style.display = 'block';
      supportElement.style.display = 'block';



      const menuStoreElement = document.querySelector('.menu__store');
      const menuProductElement = document.querySelector('.menu__product');
      const menuAccessoryElement = document.querySelector('.menu__accessory');
      const menuSubscribeElement = document.querySelector('.menu__subscribe');
      const menuSupportElement = document.querySelector('.menu__support');
      const menuSearchElement = document.querySelector('.menu__search');
      const menuCartElement = document.querySelector('.menu__cart');
      
      // li에 마우스를 올렸을 때
      storeElement.addEventListener('mouseenter', () => {
        menuStoreElement.style.display = 'block';
        menuSearchElement.style.display = 'none';
      });
      productElement.addEventListener('mouseenter', () => {
        menuProductElement.style.display = 'block';
        menuSearchElement.style.display = 'none';
      });
      accessoryElement.addEventListener('mouseenter', () => {
        menuAccessoryElement.style.display = 'block';
        menuSearchElement.style.display = 'none';
      });
      subscribeElement.addEventListener('mouseenter', () => {
        menuSubscribeElement.style.display = 'block';
        menuSearchElement.style.display = 'none';
      });
      supportElement.addEventListener('mouseenter', () => {
        menuSupportElement.style.display = 'block';
        menuSearchElement.style.display = 'none';
      });

      searchElement.addEventListener('mouseenter', () => {
        menuSearchElement.style.display = 'block';
      });

      cartElement.addEventListener('mouseenter', () => {
        menuCartElement.style.display = 'block';
      });


      
      // li에 마우스를 뗐을 때
      storeElement.addEventListener('mouseleave', () => {
        menuStoreElement.style.display = 'none';
      });
      productElement.addEventListener('mouseleave', () => {
        menuProductElement.style.display = 'none';
      });
      accessoryElement.addEventListener('mouseleave', () => {
        menuAccessoryElement.style.display = 'none';
      });
      subscribeElement.addEventListener('mouseleave', () => {
        menuSubscribeElement.style.display = 'none';
      });
      supportElement.addEventListener('mouseleave', () => {
        menuSupportElement.style.display = 'none';
      });
      searchElement.addEventListener('mouseleave', () => {
        menuSearchElement.style.display = 'none';
      });

      cartElement.addEventListener('mouseleave', () => {
        menuCartElement.style.display = 'none';
      });



      // 안쪽 메뉴에 마우스를 올렸을 때
      menuStoreElement.addEventListener('mouseenter', () => {
        menuStoreElement.style.display = 'block';
      });
      menuProductElement.addEventListener('mouseenter', () => {
        menuProductElement.style.display = 'block';
      });
      menuAccessoryElement.addEventListener('mouseenter', () => {
        menuAccessoryElement.style.display = 'block';
      });
      menuSubscribeElement.addEventListener('mouseenter', () => {
        menuSubscribeElement.style.display = 'block';
      });
      menuSupportElement.addEventListener('mouseenter', () => {
        menuSupportElement.style.display = 'block';
      });
      menuSearchElement.addEventListener('mouseenter', () => {
        menuSearchElement.style.display = 'block';
      });
      menuCartElement.addEventListener('mouseenter', () => {
        menuCartElement.style.display = 'block';
      });
      
      // 안쪽메뉴에서 마우스를 뗐을 때
      menuStoreElement.addEventListener('mouseleave', () => {
        menuStoreElement.style.display = 'none';
      });
      menuProductElement.addEventListener('mouseleave', () => {
        menuProductElement.style.display = 'none';
      });
      menuAccessoryElement.addEventListener('mouseleave', () => {
        menuAccessoryElement.style.display = 'none';
      });
      menuSubscribeElement.addEventListener('mouseleave', () => {
        menuSubscribeElement.style.display = 'none';
      });
      menuSupportElement.addEventListener('mouseleave', () => {
        menuSupportElement.style.display = 'none';
      });
      menuSearchElement.addEventListener('mouseleave', () => {
        menuSearchElement.style.display = 'none';
      });
      menuCartElement.addEventListener('mouseleave', () => {
        menuCartElement.style.display = 'none';
      });


    }
    {
      // 제품 안쪽 제품 카테고리 찾기
      const macElement = document.querySelector('.mac');
      const ipadElement = document.querySelector('.ipad');
      const iphoneElement = document.querySelector('.iphone');
      const watchElement = document.querySelector('.watch');
      const airpodsElement = document.querySelector('.airpods');
      const tvElement = document.querySelector('.tv');
      


      //보이게하고 안보이게 할 부분 
      const productInnerMacElement = document.querySelector('.product_inner_mac');
      const productInnerIpadElement = document.querySelector('.product_inner_ipad');
      const productInnerIphoneElement = document.querySelector('.product_inner_iphone');
      const productInnerWatchElement = document.querySelector('.product_inner_watch');
      const productInnerAirpodsElement = document.querySelector('.product_inner_airpods');
      const productInnerTvElement = document.querySelector('.product_inner_tv');


      // 보이게
      macElement.addEventListener('mouseenter', () => {
        productInnerMacElement.style.display = 'block';
      });
      ipadElement.addEventListener('mouseenter', () => {
        productInnerIpadElement.style.display = 'block';
      });
      iphoneElement.addEventListener('mouseenter', () => {
        productInnerIphoneElement.style.display = 'block';
      });
      watchElement.addEventListener('mouseenter', () => {
        productInnerWatchElement.style.display = 'block';
      });
      airpodsElement.addEventListener('mouseenter', () => {
        productInnerAirpodsElement.style.display = 'block';
      });
      tvElement.addEventListener('mouseenter', () => {
        productInnerTvElement.style.display = 'block';
      });

      //안보이게 
      macElement.addEventListener('mouseleave', () => {
        productInnerMacElement.style.display = 'none';
      });
      ipadElement.addEventListener('mouseleave', () => {
        productInnerIpadElement.style.display = 'none';
      });
      iphoneElement.addEventListener('mouseleave', () => {
        productInnerIphoneElement.style.display = 'none';
      });
      watchElement.addEventListener('mouseleave', () => {
        productInnerWatchElement.style.display = 'none';
      });
      airpodsElement.addEventListener('mouseleave', () => {
        productInnerAirpodsElement.style.display = 'none';
      });
      tvElement.addEventListener('mouseleave', () => {
        productInnerTvElement.style.display = 'none';
      });


      productInnerMacElement.addEventListener('mouseenter', () => {
        productInnerMacElement.style.display = 'block';
      });
      productInnerIpadElement.addEventListener('mouseenter', () => {
        productInnerIpadElement.style.display = 'block';
      });
      productInnerIphoneElement.addEventListener('mouseenter', () => {
        productInnerIphoneElement.style.display = 'block';
      });
      productInnerWatchElement.addEventListener('mouseenter', () => {
        productInnerWatchElement.style.display = 'block';
      });
      productInnerAirpodsElement.addEventListener('mouseenter', () => {
        productInnerAirpodsElement.style.display = 'block';
      });
      productInnerTvElement.addEventListener('mouseenter', () => {
        productInnerTvElement.style.display = 'block';
      });

      //안보이게 
      productInnerMacElement.addEventListener('mouseleave', () => {
        productInnerMacElement.style.display = 'none';
      });
      productInnerIpadElement.addEventListener('mouseleave', () => {
        productInnerIpadElement.style.display = 'none';
      });
      productInnerIphoneElement.addEventListener('mouseleave', () => {
        productInnerIphoneElement.style.display = 'none';
      });
      productInnerWatchElement.addEventListener('mouseleave', () => {
        productInnerWatchElement.style.display = 'none';
      });
      productInnerAirpodsElement.addEventListener('mouseleave', () => {
        productInnerAirpodsElement.style.display = 'none';
      });
      productInnerTvElement.addEventListener('mouseleave', () => {
        productInnerTvElement.style.display = 'none';
      });


    }
    {
      // 제품에 마우스 올리면 기본으로 보이게 할 부분 = 맥
      // 디스플레이 블록과 논 설정 그리고 css호버효과를 스크립트로!
      const productElement = document.querySelector('.product');
      const macElement = document.querySelector('.mac');
      const productInnerMacElement = document.querySelector('.product_inner_mac');

      productElement.addEventListener('mouseenter', () => {
        productInnerMacElement.style.display = 'block';
      });
      productElement.addEventListener('mouseleave', () => {
        productInnerMacElement.style.display = 'none';
      });

      productElement.addEventListener('mouseenter', () => {
        macElement.style.textDecoration = 'underline 3px';
        macElement.style.color = '#000';
      });
      
      productElement.addEventListener('mouseleave', () => {
        macElement.style.textDecoration = 'none';
        macElement.style.color = ''; // 빈 문자열로 설정하면 초기 스타일로 돌아갑니다.
      });

      macElement.addEventListener('mouseenter', () => {
        macElement.style.textDecoration = 'underline 3px';
        macElement.style.color = '#000';
      });
      macElement.addEventListener('mouseleave', () => {
        macElement.style.textDecoration = 'none';
        macElement.style.color = ''; // 빈 문자열로 설정하면 초기 스타일로 돌아갑니다.
      });
    }
  }

  else if (window.innerWidth >= 600 && window.innerWidth <= 1299) {
  
    {
      const hammenuElement = document.querySelector('.hammenu');
      const menuElement = document.querySelector('.menu');
      const closemenuElement = document.querySelector('.close_menu');
      const innermenuElement = document.querySelector('.menu_inner');
      const backmenuElement = document.querySelector('.back_menu');
      const menuulElement = document.querySelector('.menu ul');
      const searchElement = document.querySelector('.search');
      const cartElement = document.querySelector('.shoppingbag');

      
      
      const menuSearchElement = document.querySelector('.menu__search');
      const menuCartElement = document.querySelector('.menu__cart');

      menuElement.style.display = 'none';
      closemenuElement.style.display = 'none';
      backmenuElement.style.display = 'none';
      menuSearchElement.style.display = 'none';
      menuCartElement.style.display = 'none';
      
      hammenuElement.addEventListener('click', () => {
        menuElement.style.display = 'block';
        hammenuElement.style.display = 'none';
        closemenuElement.style.display = 'block';
        innermenuElement.style.display = 'block';
        backmenuElement.style.display = 'none';
      });
      menuulElement.addEventListener('click', () => {
        backmenuElement.style.display = 'block';
      });
      backmenuElement.addEventListener('click', () => {
        menuElement.style.display = 'block';
        backmenuElement.style.display = 'none';
      });
  // 서치 처음에만 잘되고 메뉴라도 함 구경하고 나면 자꾸 
      searchElement.addEventListener('click', () => {
        innermenuElement.style.display = 'none';
        menuElement.style.display = 'none';
        menuSearchElement.style.display = 'block';
        closemenuElement.style.display = 'block';
        hammenuElement.style.display = 'none';
        menuCartElement.style.display = 'none';
      });
      cartElement.addEventListener('click', () => {
        innermenuElement.style.display = 'none';
        menuElement.style.display = 'none';
        menuSearchElement.style.display = 'none';
        closemenuElement.style.display = 'block';
        hammenuElement.style.display = 'none';
        menuCartElement.style.display = 'block';
      });
      closemenuElement.addEventListener('click', () => {
        menuElement.style.display = 'none';
        closemenuElement.style.display = 'none';
        hammenuElement.style.display = 'block';
        innermenuElement.style.display = 'none';
        backmenuElement.style.display = 'none';
        menuSearchElement.style.display = 'none';
        menuCartElement.style.display = 'none';
      });

    }
    {
      const menuElement = document.querySelector('.menu');

      const storeElement = document.querySelector('.store');
      const productElement = document.querySelector('.product');
      const accessoryElement = document.querySelector('.accessory');
      const subscribeElement = document.querySelector('.subscribe');
      const supportElement = document.querySelector('.support');

      const menuStoreElement = document.querySelector('.menu__store');
      const menuProductElement = document.querySelector('.menu__product2');
      const menuAccessoryElement = document.querySelector('.menu__accessory');
      const menuSubscribeElement = document.querySelector('.menu__subscribe');
      const menuSupportElement = document.querySelector('.menu__support');
    
      
      storeElement.addEventListener('click', () => {
        menuStoreElement.style.display = 'block';
        menuElement.style.display = 'none';
        menuProductElement.style.display = 'none';
        menuAccessoryElement.style.display = 'none';
        menuSubscribeElement.style.display = 'none';
        menuSupportElement.style.display = 'none';
      });

      productElement.addEventListener('click', () => {
        menuProductElement.style.display = 'block';
        menuElement.style.display = 'none';
        menuStoreElement.style.display = 'none';
        menuAccessoryElement.style.display = 'none';
        menuSubscribeElement.style.display = 'none';
        menuSupportElement.style.display = 'none';
      });

      accessoryElement.addEventListener('click', () => {
        menuAccessoryElement.style.display = 'block';
        menuElement.style.display = 'none';
        menuStoreElement.style.display = 'none';
        menuProductElement.style.display = 'none';
        menuSubscribeElement.style.display = 'none';
        menuSupportElement.style.display = 'none';
      });
      subscribeElement.addEventListener('click', () => {
        menuSubscribeElement.style.display = 'block';
        menuElement.style.display = 'none';
        menuStoreElement.style.display = 'none';
        menuProductElement.style.display = 'none';
        menuAccessoryElement.style.display = 'none';
        menuSupportElement.style.display = 'none';
      });
      supportElement.addEventListener('click', () => {
        menuSupportElement.style.display = 'block';
        menuElement.style.display = 'none';
        menuStoreElement.style.display = 'none';
        menuProductElement.style.display = 'none';
        menuAccessoryElement.style.display = 'none';
        menuSubscribeElement.style.display = 'none';
      });
    }
    {
      const macClick = document.querySelector('.macClick');
      const ipadClick = document.querySelector('.ipadClick');
      const iphoneClick = document.querySelector('.iphoneClick');
      const watchClick = document.querySelector('.watchClick');
      const airpodsClick = document.querySelector('.airpodsClick');
      const tvClick = document.querySelector('.tvClick');

      const macEl = document.querySelector('.hidden_click_mac');
      const ipadEl = document.querySelector('.hidden_click_ipad');
      const iphoneEl = document.querySelector('.hidden_click_iphone');
      const watchEl = document.querySelector('.hidden_click_watch');
      const airpodsEl = document.querySelector('.hidden_click_airpods');
      const tvEl = document.querySelector('.hidden_click_tv');

      const macCategoryOn = document.querySelector('.on_category_mac');
      const ipadCategoryOn = document.querySelector('.on_category_ipad');
      const iphoneCategoryOn = document.querySelector('.on_category_iphone');
      const watchCategoryOn = document.querySelector('.on_category_watch');
      const airpodsCategoryOn = document.querySelector('.on_category_airpods');
      const tvCategoryOn = document.querySelector('.on_category_tv');

      const macDropEl = document.querySelector('.mac span:nth-of-type(2)');
      const ipadDropEl = document.querySelector('.ipad span:nth-of-type(2)');
      const iphoneDropEl = document.querySelector('.iphone span:nth-of-type(2)');
      const watchDropEl = document.querySelector('.watch span:nth-of-type(2)');
      const airpodsDropEl = document.querySelector('.airpods span:nth-of-type(2)');
      const tvDropEl = document.querySelector('.tv span:nth-of-type(2)');

      const closemenuElement = document.querySelector('.close_menu');

      const backmenuElement = document.querySelector('.back_menu');

      // macClick.addEventListener('click', () => {
      //   arrowDropEl.style.transform = 'rotate(180deg)';
      // });

      // 초기 스타일 가리기
      macCategoryOn.style.display = 'none';
      ipadCategoryOn.style.display = 'none';
      iphoneCategoryOn.style.display = 'none';
      watchCategoryOn.style.display = 'none';
      airpodsCategoryOn.style.display = 'none';
      tvCategoryOn.style.display = 'none';



      backmenuElement.addEventListener('click', () => {
        macDropEl.style.transform = 'rotate(360deg)';
        ipadDropEl.style.transform = 'rotate(360deg)';
        iphoneDropEl.style.transform = 'rotate(360deg)';
        watchDropEl.style.transform = 'rotate(360deg)';
        airpodsDropEl.style.transform = 'rotate(360deg)';
        tvDropEl.style.transform = 'rotate(360deg)';
      });

      closemenuElement.addEventListener('click', () => {
        macDropEl.style.transform = 'rotate(360deg)';
        ipadDropEl.style.transform = 'rotate(360deg)';
        iphoneDropEl.style.transform = 'rotate(360deg)';
        watchDropEl.style.transform = 'rotate(360deg)';
        airpodsDropEl.style.transform = 'rotate(360deg)';
        tvDropEl.style.transform = 'rotate(360deg)';
      });


      macClick.addEventListener('click', () => {
        if (macCategoryOn.style.display === 'none' || macCategoryOn.style.display === '') {
            macCategoryOn.style.display = 'block';
            ipadEl.style.display = 'none';
            iphoneEl.style.display = 'none';
            watchEl.style.display = 'none';
            airpodsEl.style.display = 'none';
            tvEl.style.display = 'none';
            macDropEl.style.transform = 'rotate(180deg)';

          } else {
            macCategoryOn.style.display = 'none';
            ipadEl.style.display = 'block';
            iphoneEl.style.display = 'block';
            watchEl.style.display = 'block';
            airpodsEl.style.display = 'block';
            tvEl.style.display = 'block';
            macDropEl.style.transform = 'rotate(360deg)';
        }
      });

      ipadClick.addEventListener('click', () => {
        if (ipadCategoryOn.style.display === 'none' || ipadCategoryOn.style.display === '') {
          ipadCategoryOn.style.display = 'block';
          macEl.style.display = 'none';
          iphoneEl.style.display = 'none';
          watchEl.style.display = 'none';
          airpodsEl.style.display = 'none';
          tvEl.style.display = 'none';
          ipadDropEl.style.transform = 'rotate(180deg)';
          
        } else {
          ipadCategoryOn.style.display = 'none';
          macEl.style.display = 'block';
          iphoneEl.style.display = 'block';
          watchEl.style.display = 'block';
          airpodsEl.style.display = 'block';
          tvEl.style.display = 'block';
          ipadDropEl.style.transform = 'rotate(360deg)';
        }
      });

      iphoneClick.addEventListener('click', () => {
        if (iphoneCategoryOn.style.display === 'none' || iphoneCategoryOn.style.display === '') {
          iphoneCategoryOn.style.display = 'block';
          macEl.style.display = 'none';
          ipadEl.style.display = 'none';
          watchEl.style.display = 'none';
          airpodsEl.style.display = 'none';
          tvEl.style.display = 'none';
          iphoneDropEl.style.transform = 'rotate(180deg)';
        } else {
          iphoneCategoryOn.style.display = 'none';
          macEl.style.display = 'block';
          ipadEl.style.display = 'block';
          watchEl.style.display = 'block';
          airpodsEl.style.display = 'block';
          tvEl.style.display = 'block';
          iphoneDropEl.style.transform = 'rotate(360deg)';
        }
      });
      watchClick.addEventListener('click', () => {
        if (watchCategoryOn.style.display === 'none' || watchCategoryOn.style.display === '') {
          watchCategoryOn.style.display = 'block';
          macEl.style.display = 'none';
          ipadEl.style.display = 'none';
          iphoneEl.style.display = 'none';
          airpodsEl.style.display = 'none';
          tvEl.style.display = 'none';
          watchDropEl.style.transform = 'rotate(180deg)';

        } else {
          watchCategoryOn.style.display = 'none';
          macEl.style.display = 'block';
          ipadEl.style.display = 'block';
          iphoneEl.style.display = 'block';
          airpodsEl.style.display = 'block';
          tvEl.style.display = 'block';
          watchDropEl.style.transform = 'rotate(360deg)';

        }
      });
      airpodsClick.addEventListener('click', () => {
        if (airpodsCategoryOn.style.display === 'none' || airpodsCategoryOn.style.display === '') {
          airpodsCategoryOn.style.display = 'block';
          macEl.style.display = 'none';
          ipadEl.style.display = 'none';
          iphoneEl.style.display = 'none';
          watchEl.style.display = 'none';
          tvEl.style.display = 'none';
          airpodsDropEl.style.transform = 'rotate(180deg)';

        } else {
          airpodsCategoryOn.style.display = 'none';
          macEl.style.display = 'block';
          ipadEl.style.display = 'block';
          iphoneEl.style.display = 'block';
          watchEl.style.display = 'block';
          tvEl.style.display = 'block';
          airpodsDropEl.style.transform = 'rotate(360deg)';

        }
      });
      tvClick.addEventListener('click', () => {
        if (tvCategoryOn.style.display === 'none' || tvCategoryOn.style.display === '') {
          tvCategoryOn.style.display = 'block';
          macEl.style.display = 'none';
          ipadEl.style.display = 'none';
          iphoneEl.style.display = 'none';
          watchEl.style.display = 'none';
          airpodsEl.style.display = 'none';
          tvDropEl.style.transform = 'rotate(180deg)';
        } else {
          tvCategoryOn.style.display = 'none';
          macEl.style.display = 'block';
          ipadEl.style.display = 'block';
          iphoneEl.style.display = 'block';
          watchEl.style.display = 'block';
          airpodsEl.style.display = 'block';
          tvDropEl.style.transform = 'rotate(360deg)';
        }
      });

      {
        const backmenuElement = document.querySelector('.back_menu');
        const closemenuElement = document.querySelector('.close_menu');

        const categoryElements = document.querySelectorAll('.on_category_mac, .on_category_ipad, .on_category_iphone, .on_category_watch, .on_category_airpods, .on_category_tv');
        const hiddenClickElements = document.querySelectorAll('.hidden_click_mac, .hidden_click_ipad, .hidden_click_iphone, .hidden_click_watch, .hidden_click_airpods, .hidden_click_tv');
    
        // 슬라이드 다운 초기화 함수
        function resetSlides() {
            categoryElements.forEach(category => {
                category.style.display = 'none';
            });
    
            hiddenClickElements.forEach(clickElement => {
                clickElement.style.display = 'block';
            });
        }
        backmenuElement.addEventListener('click', () => {
          resetSlides(); // 슬라이드 다운 초기화
      });
      
      }
      {
        const closemenuElement = document.querySelector('.close_menu');

        const categoryElements = document.querySelectorAll('.on_category_mac, .on_category_ipad, .on_category_iphone, .on_category_watch, .on_category_airpods, .on_category_tv');
        const hiddenClickElements = document.querySelectorAll('.hidden_click_mac, .hidden_click_ipad, .hidden_click_iphone, .hidden_click_watch, .hidden_click_airpods, .hidden_click_tv');
    
        // 슬라이드 다운 초기화 함수
        function resetSlides() {
            categoryElements.forEach(category => {
                category.style.display = 'none';
            });
    
            hiddenClickElements.forEach(clickElement => {
                clickElement.style.display = 'block';
            });
        }
        closemenuElement.addEventListener('click', () => {
          resetSlides(); // 슬라이드 다운 초기화
      });
      
      }

    }
  }

  else if (window.innerWidth <= 599) {
    {
      const hammenuElement = document.querySelector('.hammenu');
      const menuElement = document.querySelector('.menu');
      const closemenuElement = document.querySelector('.close_menu');
      const innermenuElement = document.querySelector('.menu_inner');
      const backmenuElement = document.querySelector('.back_menu');
      const menuulElement = document.querySelector('.menu ul');
      const searchElement = document.querySelector('.search');
      const cartElement = document.querySelector('.shoppingbag');

      
      
      const menuSearchElement = document.querySelector('.menu__search');
      const menuCartElement = document.querySelector('.menu__cart');

      menuElement.style.display = 'none';
      closemenuElement.style.display = 'none';
      backmenuElement.style.display = 'none';
      menuSearchElement.style.display = 'none';
      menuCartElement.style.display = 'none';


      hammenuElement.addEventListener('click', () => {
        menuElement.style.display = 'block';
        hammenuElement.style.display = 'none';
        closemenuElement.style.display = 'block';
        innermenuElement.style.display = 'block';
        backmenuElement.style.display = 'none';

      });



      menuulElement.addEventListener('click', () => {
        backmenuElement.style.display = 'block';
      });
      
      backmenuElement.addEventListener('click', () => {
        menuElement.style.display = 'block';
        backmenuElement.style.display = 'none';
      });

  // 서치 처음에만 잘되고 메뉴라도 함 구경하고 나면 자꾸 
      searchElement.addEventListener('click', () => {
        innermenuElement.style.display = 'none';
        menuElement.style.display = 'none';
        menuSearchElement.style.display = 'block';
        closemenuElement.style.display = 'block';
        hammenuElement.style.display = 'none';
        menuCartElement.style.display = 'none';
      });

      cartElement.addEventListener('click', () => {
        innermenuElement.style.display = 'none';
        menuElement.style.display = 'none';
        menuSearchElement.style.display = 'none';
        closemenuElement.style.display = 'block';
        hammenuElement.style.display = 'none';
        menuCartElement.style.display = 'block';
      });


      closemenuElement.addEventListener('click', () => {
        menuElement.style.display = 'none';
        closemenuElement.style.display = 'none';
        hammenuElement.style.display = 'block';
        innermenuElement.style.display = 'none';
        backmenuElement.style.display = 'none';
        menuSearchElement.style.display = 'none';
        menuCartElement.style.display = 'none';
      });


    }
    {
      const menuElement = document.querySelector('.menu');

      const storeElement = document.querySelector('.store');
      const productElement = document.querySelector('.product');
      const accessoryElement = document.querySelector('.accessory');
      const subscribeElement = document.querySelector('.subscribe');
      const supportElement = document.querySelector('.support');

      const menuStoreElement = document.querySelector('.menu__store');
      const menuProductElement = document.querySelector('.menu__product2');
      const menuAccessoryElement = document.querySelector('.menu__accessory');
      const menuSubscribeElement = document.querySelector('.menu__subscribe');
      const menuSupportElement = document.querySelector('.menu__support');
      
      
      storeElement.addEventListener('click', () => {
        menuStoreElement.style.display = 'block';
        menuElement.style.display = 'none';
        menuProductElement.style.display = 'none';
        menuAccessoryElement.style.display = 'none';
        menuSubscribeElement.style.display = 'none';
        menuSupportElement.style.display = 'none';
      });

      productElement.addEventListener('click', () => {
        menuProductElement.style.display = 'block';
        menuElement.style.display = 'none';
        menuStoreElement.style.display = 'none';
        menuAccessoryElement.style.display = 'none';
        menuSubscribeElement.style.display = 'none';
        menuSupportElement.style.display = 'none';
      });

      accessoryElement.addEventListener('click', () => {
        menuAccessoryElement.style.display = 'block';
        menuElement.style.display = 'none';
        menuStoreElement.style.display = 'none';
        menuProductElement.style.display = 'none';
        menuSubscribeElement.style.display = 'none';
        menuSupportElement.style.display = 'none';
      });
      subscribeElement.addEventListener('click', () => {
        menuSubscribeElement.style.display = 'block';
        menuElement.style.display = 'none';
        menuStoreElement.style.display = 'none';
        menuProductElement.style.display = 'none';
        menuAccessoryElement.style.display = 'none';
        menuSupportElement.style.display = 'none';
      });
      supportElement.addEventListener('click', () => {
        menuSupportElement.style.display = 'block';
        menuElement.style.display = 'none';
        menuStoreElement.style.display = 'none';
        menuProductElement.style.display = 'none';
        menuAccessoryElement.style.display = 'none';
        menuSubscribeElement.style.display = 'none';
      });
    }
    {
      const macClick = document.querySelector('.macClick');
      const ipadClick = document.querySelector('.ipadClick');
      const iphoneClick = document.querySelector('.iphoneClick');
      const watchClick = document.querySelector('.watchClick');
      const airpodsClick = document.querySelector('.airpodsClick');
      const tvClick = document.querySelector('.tvClick');

      const macEl = document.querySelector('.hidden_click_mac');
      const ipadEl = document.querySelector('.hidden_click_ipad');
      const iphoneEl = document.querySelector('.hidden_click_iphone');
      const watchEl = document.querySelector('.hidden_click_watch');
      const airpodsEl = document.querySelector('.hidden_click_airpods');
      const tvEl = document.querySelector('.hidden_click_tv');

      const macCategoryOn = document.querySelector('.on_category_mac');
      const ipadCategoryOn = document.querySelector('.on_category_ipad');
      const iphoneCategoryOn = document.querySelector('.on_category_iphone');
      const watchCategoryOn = document.querySelector('.on_category_watch');
      const airpodsCategoryOn = document.querySelector('.on_category_airpods');
      const tvCategoryOn = document.querySelector('.on_category_tv');

      const fillEl = document.querySelector('.empty__space__fill');



      const macDropEl = document.querySelector('.mac span:nth-of-type(2)');
      const ipadDropEl = document.querySelector('.ipad span:nth-of-type(2)');
      const iphoneDropEl = document.querySelector('.iphone span:nth-of-type(2)');
      const watchDropEl = document.querySelector('.watch span:nth-of-type(2)');
      const airpodsDropEl = document.querySelector('.airpods span:nth-of-type(2)');
      const tvDropEl = document.querySelector('.tv span:nth-of-type(2)');


      const closemenuElement = document.querySelector('.close_menu');

      const backmenuElement = document.querySelector('.back_menu');

      backmenuElement.addEventListener('click', () => {
        macDropEl.style.transform = 'rotate(360deg)';
        ipadDropEl.style.transform = 'rotate(360deg)';
        iphoneDropEl.style.transform = 'rotate(360deg)';
        watchDropEl.style.transform = 'rotate(360deg)';
        airpodsDropEl.style.transform = 'rotate(360deg)';
        tvDropEl.style.transform = 'rotate(360deg)';
      });

      closemenuElement.addEventListener('click', () => {
        macDropEl.style.transform = 'rotate(360deg)';
        ipadDropEl.style.transform = 'rotate(360deg)';
        iphoneDropEl.style.transform = 'rotate(360deg)';
        watchDropEl.style.transform = 'rotate(360deg)';
        airpodsDropEl.style.transform = 'rotate(360deg)';
        tvDropEl.style.transform = 'rotate(360deg)';
      });



      // 초기 스타일 가리기
      macCategoryOn.style.display = 'none';
      ipadCategoryOn.style.display = 'none';
      iphoneCategoryOn.style.display = 'none';
      watchCategoryOn.style.display = 'none';
      airpodsCategoryOn.style.display = 'none';
      tvCategoryOn.style.display = 'none';

      macClick.addEventListener('click', () => {
        if (macCategoryOn.style.display === 'none' || macCategoryOn.style.display === '') {
            macCategoryOn.style.display = 'block';
            ipadEl.style.display = 'none';
            iphoneEl.style.display = 'none';
            watchEl.style.display = 'none';
            airpodsEl.style.display = 'none';
            tvEl.style.display = 'none';
            macDropEl.style.transform = 'rotate(180deg)';
        } else {
            macCategoryOn.style.display = 'none';
            ipadEl.style.display = 'block';
            iphoneEl.style.display = 'block';
            watchEl.style.display = 'block';
            airpodsEl.style.display = 'block';
            tvEl.style.display = 'block';
            macDropEl.style.transform = 'rotate(360deg)';
        }
      });

      ipadClick.addEventListener('click', () => {
        if (ipadCategoryOn.style.display === 'none' || ipadCategoryOn.style.display === '') {
          ipadCategoryOn.style.display = 'block';
          macEl.style.display = 'none';
          iphoneEl.style.display = 'none';
          watchEl.style.display = 'none';
          airpodsEl.style.display = 'none';
          tvEl.style.display = 'none';
          ipadDropEl.style.transform = 'rotate(180deg)';
        } else {
          ipadCategoryOn.style.display = 'none';
          macEl.style.display = 'block';
          iphoneEl.style.display = 'block';
          watchEl.style.display = 'block';
          airpodsEl.style.display = 'block';
          tvEl.style.display = 'block';
          ipadDropEl.style.transform = 'rotate(360deg)';
        }
      });

      iphoneClick.addEventListener('click', () => {
        if (iphoneCategoryOn.style.display === 'none' || iphoneCategoryOn.style.display === '') {
          iphoneCategoryOn.style.display = 'block';
          macEl.style.display = 'none';
          ipadEl.style.display = 'none';
          watchEl.style.display = 'none';
          airpodsEl.style.display = 'none';
          tvEl.style.display = 'none';
          iphoneDropEl.style.transform = 'rotate(180deg)';

        } else {
          iphoneCategoryOn.style.display = 'none';
          macEl.style.display = 'block';
          ipadEl.style.display = 'block';
          watchEl.style.display = 'block';
          airpodsEl.style.display = 'block';
          tvEl.style.display = 'block';
          iphoneDropEl.style.transform = 'rotate(360deg)';

        }
      });
      watchClick.addEventListener('click', () => {
        if (watchCategoryOn.style.display === 'none' || watchCategoryOn.style.display === '') {
          watchCategoryOn.style.display = 'block';
          macEl.style.display = 'none';
          ipadEl.style.display = 'none';
          iphoneEl.style.display = 'none';
          airpodsEl.style.display = 'none';
          tvEl.style.display = 'none';
          watchDropEl.style.transform = 'rotate(180deg)';

        } else {
          watchCategoryOn.style.display = 'none';
          macEl.style.display = 'block';
          ipadEl.style.display = 'block';
          iphoneEl.style.display = 'block';
          airpodsEl.style.display = 'block';
          tvEl.style.display = 'block';
          watchDropEl.style.transform = 'rotate(360deg)';

        }
      });
      airpodsClick.addEventListener('click', () => {
        if (airpodsCategoryOn.style.display === 'none' || airpodsCategoryOn.style.display === '') {
          airpodsCategoryOn.style.display = 'block';
          macEl.style.display = 'none';
          ipadEl.style.display = 'none';
          iphoneEl.style.display = 'none';
          watchEl.style.display = 'none';
          tvEl.style.display = 'none';
          airpodsDropEl.style.transform = 'rotate(180deg)';

        } else {
          airpodsCategoryOn.style.display = 'none';
          macEl.style.display = 'block';
          ipadEl.style.display = 'block';
          iphoneEl.style.display = 'block';
          watchEl.style.display = 'block';
          tvEl.style.display = 'block';
          airpodsDropEl.style.transform = 'rotate(360deg)';

        }
      });
      tvClick.addEventListener('click', () => {
        if (tvCategoryOn.style.display === 'none' || tvCategoryOn.style.display === '') {
          tvCategoryOn.style.display = 'block';
          macEl.style.display = 'none';
          ipadEl.style.display = 'none';
          iphoneEl.style.display = 'none';
          watchEl.style.display = 'none';
          airpodsEl.style.display = 'none';
          fillEl.style.display = 'none';
          tvDropEl.style.transform = 'rotate(180deg)';

        } else {
          tvCategoryOn.style.display = 'none';
          macEl.style.display = 'block';
          ipadEl.style.display = 'block';
          iphoneEl.style.display = 'block';
          watchEl.style.display = 'block';
          airpodsEl.style.display = 'block';
          fillEl.style.display = 'block';
          tvDropEl.style.transform = 'rotate(360deg)';


        }
      });

    }
    {
      const backmenuElement = document.querySelector('.back_menu');
      const categoryElements = document.querySelectorAll('.on_category_mac, .on_category_ipad, .on_category_iphone, .on_category_watch, .on_category_airpods, .on_category_tv');
      const hiddenClickElements = document.querySelectorAll('.hidden_click_mac, .hidden_click_ipad, .hidden_click_iphone, .hidden_click_watch, .hidden_click_airpods, .hidden_click_tv');

      // 슬라이드 다운 초기화 함수
      function resetSlides() {
          categoryElements.forEach(category => {
              category.style.display = 'none';
          });

          hiddenClickElements.forEach(clickElement => {
              clickElement.style.display = 'block';
          });
      }
      backmenuElement.addEventListener('click', () => {
        resetSlides(); // 슬라이드 다운 초기화
    });
    }
    {
      const closemenuElement = document.querySelector('.close_menu');

      const categoryElements = document.querySelectorAll('.on_category_mac, .on_category_ipad, .on_category_iphone, .on_category_watch, .on_category_airpods, .on_category_tv');
      const hiddenClickElements = document.querySelectorAll('.hidden_click_mac, .hidden_click_ipad, .hidden_click_iphone, .hidden_click_watch, .hidden_click_airpods, .hidden_click_tv');

      // 슬라이드 다운 초기화 함수
      function resetSlides() {
          categoryElements.forEach(category => {
              category.style.display = 'none';
          });

          hiddenClickElements.forEach(clickElement => {
              clickElement.style.display = 'block';
          });
      }
      closemenuElement.addEventListener('click', () => {
        resetSlides(); // 슬라이드 다운 초기화
    });
    
    }
  }

var reloadOnce = true;
var prevWidth = window.innerWidth;

window.addEventListener('resize', function() {
  // 현재 너비가 1299 이하이고, 새로고침을 아직 실행하지 않았다면
  if (window.innerWidth <= 1299 && reloadOnce && prevWidth > 1299) {
    location.reload(); // 페이지 새로고침
    reloadOnce = false; // 새로고침 플래그를 false로 설정하여 추가 새로고침 방지
  }

  // 현재 너비가 1300 이상일 때
  if (window.innerWidth > 1300) {
    location.reload(); // 페이지 새로고침
    reloadOnce = false; // 새로고침 플래그를 false로 설정하여 추가 새로고침 방지
  }
  
  if (window.innerWidth <= 599) {
    location.reload(); // 페이지 새로고침
    reloadOnce = false; // 새로고침 플래그를 false로 설정하여 추가 새로고침 방지
  }
});