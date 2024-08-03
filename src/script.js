// let menuOpened = false;
// const mobilemenu = document.getElementById("navbar-hamburger");
// const mobileMenuButton = document.getElementById("mobile-menu");
// mobileMenuButton.addEventListener("click",()=>{
//     if (menuOpened) {
//         mobilemenu.classList.add("hidden")
//         menuOpened = false;
//     }else{
//         mobilemenu.classList.remove("hidden")
//         menuOpened = true;
//     }
// })


        var swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          grabCursor: true,
         centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 50,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
     

// code for gsap
