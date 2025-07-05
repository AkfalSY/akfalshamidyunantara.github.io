 var swiper = new Swiper(".projectSwiper", {
      breakpoints: {
         0: {
            slidesPerView: 1
         },
         620: {
            slidesPerView: 3 
         },
      },
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

 var swiper = new Swiper(".serviceSwiper", {
      breakpoints: {
         0: {
            slidesPerView: 1
         },
         620: {
            slidesPerView: 3 
         },
      },
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    }); 