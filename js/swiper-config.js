import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

if (
    window.matchMedia("(min-device-width: 320px) and (max-device-width: 480px)")
    .matches
) {
    var slider1 = new Swiper(".slider1", {
        slidesPerView: 1,
        spaceBetween: 18,
        direction: "horizontal",
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var slider2 = new Swiper(".slider2", {
        slidesPerView: 1,
        spaceBetween: 28,
        direction: "horizontal",
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
} else {
    var slider1 = new Swiper(".slider1", {
        slidesPerView: 4,
        spaceBetween: 18,
        direction: "horizontal",
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var slider2 = new Swiper(".slider2", {
        slidesPerView: 3,
        spaceBetween: 28,
        direction: "horizontal",
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}