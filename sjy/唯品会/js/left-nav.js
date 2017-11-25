var li = $(".left-nav ul li");
li.on("click",function(){
	$(this).css({
		"background":"#F10180"
	});
	$(this).children("a").css({
		"color":"white"
	});
	$(this).siblings().css({
		"background":"white"	
	});
	$(this).siblings().children("a").css({
		"color":"#666666"
	});
	
});

$(window).scroll(function(){
	
	var docScrollTop = $(window).scrollTop();
	if(docScrollTop>1000){
		
		$('.left-nav').css({
			"display":"block"
		});
	}
//	if(docScrollTop>1000&&docScrollTop<2770){
//		$("left-nav ul li:eq(0) li").css({
//			"background":"#F10180"
//		});
//		$("left-nav ul li:eq(0) li a").css({
//			"color":"white"
//		});
//		$("left-nav ul li:eq(0) li").siblings().css({
//			"background":"white"
//		});
//		$("left-nav ul li:eq(0) li").siblings().children("a").css({
//			"color":"#F10180"
//		})
//	}
//	if(docScrollTop>2778&&docScrollTop<4130){
//		$("left-nav ul li:eq(1) li").css({
//			"background":"#F10180"
//		});
//		$("left-nav ul li:eq(1) li a").css({
//			"color":"white"
//		});
//		$("left-nav ul li:eq(1) li").siblings().css({
//			"background":"white"
//		});
//		$("left-nav ul li:eq(1) li").siblings().children("a").css({
//			"color":"#F10180"
//		})
//	}
	else{
		$('.left-nav').css({
			"display":"none"
		});
	}
});


