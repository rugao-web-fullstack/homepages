$(".main-nav .main-nav-det li").on("click",function(){
	$(this).addClass("show");
	$(this).siblings().removeClass("show");
});		
$(window).scroll(function(){
		var docScrollTop = $(window).scrollTop();
		if(docScrollTop>70){
			$('.main-nav').css({
				'position':'fixed',
				'top':0,
				"zIndex":50
			});
		}else{
			$('.main-nav').css({
				'position':'static' //---静态定位
			});
		}
});

