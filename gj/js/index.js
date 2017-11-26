//banner 轮播图
function move(bg, li) {
    var timer = null;
    var i = 0;
    //  自动淡入淡出
    timer = setInterval(function () {
        $(bg).eq(i).fadeIn('slow').siblings().fadeOut('slow');
        if (i < $(bg).length) {
            i++;
        } else {
            i = 0;
        }
    }, 4000);

    //鼠标移入切换
    $(li).on('mouseover', function () {
        $(bg).eq($(this).index()).fadeIn('slow').siblings().fadeOut('slow');
    });
}

// 导航栏显示
function show(do1, do2) {
    $(do1).on('mouseenter', function () {
        $(this).children(do2).show();
    });
    $(do1).on('mouseleave', function () {
        $(this).children(do2).hide();
    })
}
