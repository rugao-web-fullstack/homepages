// 轮播图
var swiper = new Swiper('.swiper-container', {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    effect : 'fade',
    fade: {
        crossFade: false,
        pagination : '.swiper-pagination',
        paginationType : 'fraction'
    }
});
//轮播图的箭头显示
$(".banner").on("mouseenter", function () {
    $(".swiper-button-prev").css("display", "block");
    $(".swiper-button-next").css("display", "block");
});
$(".banner").on("mouseleave", function () {
    $(".swiper-button-prev").css("display", "none");
    $(".swiper-button-next").css("display", "none");
});
$(window).scroll(function(){
    var docScrollTop = $(window).scrollTop();
    var navH = $(".main").offset().top;
    var hotH = $(".main .box:nth-last-child(2) .love").offset().top;
    if(docScrollTop > hotH){
        $(".left").css({
            "position":"static"
        });
        $(".middle").css({
            "position": "static"
        });
        $(".right").css({
            "position":"static"
        });
    }
//搜索框固定
    if (docScrollTop > 50) {
        $('.logo').css({
            'position': 'fixed',
            'top': -10,
            "zIndex": 50
        });
        $('.text').css({
            "visibility": "hidden"
        });
        $('.top_shop').css({
            "visibility": "hidden"
        });
    } else {
        $('.logo').css({
            'position':'relative',
            'top': -36
        });
        $('.text').css({
            "visibility": "visible"
        });
        $('.top_shop').css({
            "visibility": "visible"
        });
    }
//固定左右侧边栏
    if(docScrollTop >= navH && docScrollTop <= hotH){
        $(".left").css({
            "position": "fixed",
            "top": 70,
            "zIndex": 15
        });
        $(".right").css({
            "position":"fixed",
            "top":70,
            "right": 36,
            "zIndex": 15
        });
        $(".middle").css({
            "position": "relative",
            "left": 98
        });
    } else {
        $(".left").css({
            "position":"static"
        });
        $(".middle").css({
            "position": "static"
        });
        $(".right").css({
            "position":"static"
        });
    }
});
//热门品牌轮播
$(".rm").on("mouseenter", function () {
    var index = 0;
    $(".btn-left").css("display", "block");
    $(".btn-right").css("display", "block");
    $(".btn-right").on("click", function () {
        index++;
        if (index >= 3) {
            index = 0;
            $(".rm ul").css({"left": 0});
        } else {
            $(".rm ul").animate({left:-index*190},700);
        }
    });
    $(".btn-left").on("click", function () {
        if (index == 0) {
            $(".rm ul").css({"left": -380});
            index = 2;
        } else {
            index--;
            $(".rm ul").animate({left: -index*190},700);
        }
    });
});
$(".rm").on("mouseleave", function () {
    $(".btn-left").css("display", "none");
    $(".btn-right").css("display", "none");
});