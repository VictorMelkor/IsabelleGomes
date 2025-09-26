const swiper = new Swiper(".dep-swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: false, // ou true se quiser o slide centralizado
    slidesPerView: 3,      // ou 'auto' se quiser ajuste automático
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});
