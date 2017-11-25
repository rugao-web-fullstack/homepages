var sd = $(".sd");
	sd.on("mouseenter",function(){
		$(this).children(".hidee").slideDown();
		$(this).css({
			"backgroundColor":"white"
		})
	});
	sd.on("mouseleave",function(){
		$(this).children(".hidee").css({
			"display":"none"
		});
		$(this).css({
			"backgroundColor":"#F5F5F5"
		})
	});
	
$(".sd .city li span").on("click",function(){
	var cityname = $(this).text();
	$(".sd .city li span").css({
		"background":"none",
		"color":"#666666"
	})
	$(this).css({
		"background":"#F10180",
		"color":"white"
	});
	
	$(".sd span:eq(0)").text(cityname);
})
	
	
	
	
var temai = $(".temai");
	temai.on("mouseenter",function(){
		$(this).children(".hidee").slideDown();
		$(this).css({
			"backgroundColor":"white"
		})
	});
	temai.on("mouseleave",function(){
		$(this).children(".hidee").css({
			"display":"none"
		});
		$(this).css({
			"backgroundColor":"#F5F5F5"
		})
	});

var huiyuan = $(".huiyuan");
	huiyuan.on("mouseenter",function(){
		$(this).children(".hidee").slideDown();
		$(this).css({
			"backgroundColor":"white"
		})
	});
	huiyuan.on("mouseleave",function(){
		$(this).children(".hidee").css({
			"display":"none"
		});
		$(this).css({
			"backgroundColor":"#F5F5F5"
		})
	});
	
var kefu = $(".kefu");
	kefu.on("mouseenter",function(){
		$(this).children(".hidee").slideDown();
		$(this).css({
			"backgroundColor":"white"
		})
	});
	kefu.on("mouseleave",function(){
		$(this).children(".hidee").css({
			"display":"none"
		});
		$(this).css({
			"backgroundColor":"#F5F5F5"
		})
	});
	
var erweima = $(".erweima");
	erweima.on("mouseenter",function(){
		$(this).children(".hidee").slideDown();
		$(this).css({
			"backgroundColor":"white"
		})
	});
	erweima.on("mouseleave",function(){
		$(this).children(".hidee").css({
			"display":"none"
		});
		$(this).css({
			"backgroundColor":"#F5F5F5"
		})
	});
	
var gengduo = $(".gengduo");
	gengduo.on("mouseenter",function(){
		$(this).children(".hidee").slideDown();
		$(this).css({
			"backgroundColor":"white"
		})
	});
	gengduo.on("mouseleave",function(){
		$(this).children(".hidee").css({
			"display":"none"
		});
		$(this).css({
			"backgroundColor":"#F5F5F5"
		})
	});