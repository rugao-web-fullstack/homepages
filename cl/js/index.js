$(function () {
    $(".goodsfl li").mouseover(function () {
        $(this).children(".shouji").show();
    });
    $(".goodsfl li").mouseleave(function () {
        $(this).children(".shouji").hide();
    });
   /* $(".swiper-slide img").mouseover(function () {
        $(".swiper-button-next").show();
        $(".swiper-button-prev").show();
        mySwiper.stopAutoplay();
    });
    $(".swiper-slide img").mouseleave(function () {
        $(".swiper-button-next").hide();
        $(".swiper-button-prev").hide();
    });*/
});