$(function () {
    $(".goodsfl .li").mouseover(function () {
        $(this).children(".shouji").show();
    });
    $("div.goodsfl .li").mouseleave(function () {
        $(this).children(".shouji").hide();
    });
    $(".sec").mouseover(function () {
            $(".zhifu").show(200);
    })
    $(".ng-toolbar-item.sec").mouseleave(function () {
        $(".zhifu").hide(200);
    })
    $(".totop").click(function () {
        $("html,body").animate({scrollTop:0}, 500);
    })
});