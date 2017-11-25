var zh = $(".zhanghu");
var yincang = $(".zh")
zh.on("mouseenter",function(){
	$(this).css({
		"background":"#F10180"
	});
	yincang.css({
		"right":"34px"
	});
});
zh.on("mouseleave",function(){
	$(this).css({
		"background":"none"
	});
	yincang.css({
		"right":"-200px"
	});
});


var yhq = $(".youhuiquan");
yhq.on("mouseenter",function(){
	$(this).css({
		"background":"#F10180"
		
	});
	$(this).children("div").css({
		"right":"34px"
	});
});
yhq.on("mouseleave",function(){
	$(this).css({
		"background":"none"
	});
	$(this).children("div").css({
		"right":"-200px"
	});
});
