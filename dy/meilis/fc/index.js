$(function () {
	/* 导航栏 */
	var timer = null;
	$('.navTop>ul>li:eq(2), .shop-cart').mouseenter(function (ev) {
		clearTimeout(timer);
		$('.shop-cart').stop().show().siblings('div').stop().hide();

	}).mouseleave(function () {
		timer = setTimeout(function () {
			$('.shop-cart').stop().hide();
		}, 200);
	});
	$('.navTop>ul>li:eq(3), .custom-serv').mouseenter(function (ev) {
		clearTimeout(timer);
		$('.custom-serv').stop().show().siblings('div').stop().hide();

	}).mouseleave(function () {
		timer = setTimeout(function () {
			$('.custom-serv').stop().hide();
		}, 200);
	});
	$('.navTop>ul>li:eq(4), .myshop').mouseenter(function (ev) {
		clearTimeout(timer);
		$('.myshop').stop().show().siblings('div').stop().hide();

	}).mouseleave(function () {
		timer = setTimeout(function () {
			$('.myshop').stop().hide();
		}, 200);
	});

	/* 搜索栏 */
	$('.select-box>span, .select-box>ol').hover(function () {
		$('.select-box>ol').stop().slideDown();
	}, function () {
		$('.select-box>ol').stop().slideUp();
	});
	$('.select-box>ol>li').click(function () {
		$('.select-box>span').html('搜' + $(this).children().html());
	});

	/* 轮播图 */
	/* 轮播图下标 */
	for (var i = 0; i < $('.slide-img>ul>li').length; i++) {
		var $olis = $('<li></li>');
		$('.slide-img>ol').append($olis);
	}
	$('.slide-img>ol>li').eq(0).attr("class", "active");

	/* 记录背景颜色 */
	var arrColor = ['#f07', '#f06ae9', '#7e7aff', '#ffcad2', '#62b1db', '#177bb1'];

	var timer = null;
	var timer2 = null;
	var $ulis = $('.slide-img>ul>li');
	var num = 0;
	$('.slide-cont').css('background', arrColor[num]);
	timer = setInterval(function () {
		if (num > $ulis.length - 1) {
			num = 0;
		}
		num++;
		console.log('定时器计时显示图片：' + num);
		$('.slide-img>ol').css('zIndex', '200');
		$ulis.eq(num).animate({ "opacity": 1 }, 2000, "linear").siblings().animate({ "opacity": 0 });
		$('.slide-img>ol>li').eq(num).attr("class", "active").siblings().attr('class', '');
		$('.slide-cont').css('background', arrColor[num]);
		$ulis.eq(num).css('zIndex', '100').siblings().css('zIndex', '90');
	}, 5000);
	/* 悬停下标显示图片 */
	for (let i = 0; i < $('.slide-img>ol>li').length; i++) {
		$('.slide-img>ol>li').eq(i).hover(function () {
			console.log('图片下标：' + i);
			clearInterval(timer);
			clearInterval(timer2);
			$(this).attr('class', 'active').siblings().attr('class', '');
			$('.slide-img>ul>li').eq(i).animate({ "opacity": 1 }, 1000, "linear").siblings().animate({ "opacity": 0 });
			$('.slide-cont').css('background', arrColor[i]);
		}, function () {
			timer2 = setInterval(function () {
				if (i > $ulis.length - 1) {
					i = 0;
				}
				i++;
				console.log('鼠标离开下标：' + i);
				$('.slide-img>ol').css('zIndex', '200');
				$ulis.eq(i).animate({ "opacity": 1 }, 2000, "linear").siblings().animate({ "opacity": 0 });
				$('.slide-img>ol>li').eq(i).attr("class", "active").siblings().attr('class', '');
				$('.slide-cont').css('background', arrColor[i]);
				$ulis.eq(i).css('zIndex', '100').siblings().css('zIndex', '90');
			}, 5000);
		});
	}
	for (var j = 0; j < $('.slide-img>ol>li').length; j++) {
		/* 悬停暂停图片 */
		$('.slide-img>ul>li').eq(j).hover(function () {
			console.log('现在暂停在：' + j);
			clearInterval(timer);
			clearInterval(timer2);
		}, function () {
			console.log('鼠标离开了');
			timer2 = setInterval(function () {
				if (j > $ulis.length - 1) {
					j = 0;
				}
				j++;
				console.log('现在显示的图片是：' + j);
				$('.slide-img>ol').css('zIndex', '200');
				$ulis.eq(j).animate({ "opacity": 1 }, 2000, "linear").siblings().animate({ "opacity": 0 });
				$('.slide-img>ol>li').eq(j).attr("class", "active").siblings().attr('class', '');
				$('.slide-cont').css('background', arrColor[j]);
				$ulis.eq(j).css('zIndex', '100').siblings().css('zIndex', '90');
			}, 5000);
		});
	}

	/* 限时疯抢 */
	$('.prcMain').hover(function () {
		$(this).children('img').stop().animate({"right": '70px'}, 200, 'linear');
	}, function () {
		$(this).children('img').stop().animate({"right": '65px'}, 200, 'linear');
	});
	$('.prcOther>div').hover(function () {
		$(this).children('img').stop().animate({"right": '25px'}, 200, 'linear');
	}, function () {
		$(this).children('img').stop().animate({"right": '20px'}, 200, 'linear');
	});

	/* 红人穿搭 */
	
	/* 快抢发新日 */
	/* 轮播图部分 */
	var timerNew = null;
	timerNew = setInterval(function () {

	}, 2000);
	
});