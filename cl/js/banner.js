$(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:{
            delay:2500,
            disableOnInteration:false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar'
    });


});
