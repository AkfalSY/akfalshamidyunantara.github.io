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

   //  Copy Email 
   const email = "akfaltara@upi.edu";

      function copyEmail(button) {
    const textSpan = button.querySelector(".copy-text");

    navigator.clipboard.writeText(email).then(() => {
      const originalText = textSpan.textContent;
      textSpan.textContent = "Copied!";

      // Tambahkan animasi (opsional)
      button.classList.add("copied");

      // Kembalikan ke semula setelah 1 detik
      setTimeout(() => {
        textSpan.textContent = originalText;
        button.classList.remove("copied");
      }, 1000);
    }).catch(err => {
      alert("Failed to copy: " + err);
    });
  }