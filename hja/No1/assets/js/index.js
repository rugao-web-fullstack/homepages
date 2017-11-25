$(function () {
    autoplay();
    changeActive('ul.tops li');
});

//--定义轮播图
function autoplay() {
    //---获取元素
    var bgs = $('.bg');
    var timer = null;
    var num = bgs.length;
    var i = 0;
    timer = setInterval(function () {
        if (i === 7) {
            //---最后一张
            $('.bg').eq(7).fadeIn().siblings('.bg').fadeOut();
            i = 0;
        } else {
            $('.bg').eq(i).fadeIn().siblings('.bg').fadeOut();
            i = i + 1;
        }

        console.log(i);
    }, 3000);
}

//--更改active
function changeActive(li) {
    $(li).on('mouseenter', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
}

//--更改tab
function changeTabs(title, box) {

}