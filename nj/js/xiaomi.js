$("#head_car").hover(function() {
	$(this).css("background", "#FBFEE9");
	$(".head_car_text").css("color", "#ff6700");
	$("#car_content").css({
		"width": "300px"
	}).animate({
		height: "100px"
	}, 400).finish();
}, function() {
	$(this).css("background", "#424242");
	$(".head_car_text").css("color", "#b0b0b0");
	$("#car_content").css({
		"width": "300px"
	}).animate({
		height: "0px"
	}, 400);
})

$(".menu_li").hover(function() {
	$("#menu_content_bg").css("border", "1px solid #D0D0D0");
	$(this).css("color", "#ff6700");
	$("#" + $(this).attr("control")).show();
	$("#menu_content_bg").height(230);
}, function() {
	$("#" + $(this).attr("control")).hide();
	$(this).css("color", " #424242");
	$("#menu_content_bg").height(0);
	$("#menu_content_bg").css("border", "0px solid #D0D0D0");
})
//border
$("#find_input").focus(function() {
	$("#find_wrap").css("border", "1px solid #ff6700");
	$("#find_but").css("border-left", "1px solid #ff6700");
})
$("#find_input").blur(function() {
	$("#find_wrap").css("border", "1px solid #F0F0F0");
	$("#find_but").css("border-left", "1px solid #F0F0F0");
})

$("#find_but").hover(function() {
	$(this).css({
		"background": "#ff6700",
		color: "#fff"
	});
}, function() {
	$(this).css({
		"background": "#fff",
		color: "#424242"
	});
})

$("#banner_menu_wrap").children().hover(function() {
	$(this).css("background", "#ff6700");
	$(this).children(".banner_menu_content").css("border", "1px solid #F0F0F0").show();
}, function() {
	$(this).css("background", "none");
	$(this).children(".banner_menu_content").css("border", "0px solid #F0F0F0").hide();
})

$(function() {
	var i = 0;
	var big_banner_pic = $("#big_banner_pic");
	var allimg = $("#big_banner_pic li").length;

	function img_change() {
		var img_i = i * -1226 + "px";
		big_banner_pic.animate({
			opacity: ".2"
		}, 100, function() {
			big_banner_pic.css("left", img_i);
			big_banner_pic.animate({
				opacity: "1"
			}, 100);
		})
	}

	function automatic() {
		i += 1;
		if(i >= allimg) {
			i = 0;
		}
		img_change();
	}
	change_self_time = setInterval(automatic, 3000);

	$("#big_banner_change_wrap").hover(function() {
		clearInterval(change_self_time);
		$("#big_banner_change_wrap").children().show();
	}, function() {
		change_self_time = setInterval(automatic, 3000);
		$("#big_banner_change_wrap").children().hide();
	})
	$("#big_banner_change_prev").click(function() {
		i += 1;
		if(i >= allimg) {
			i = 0;
		}
		img_change();
	})
	$("#big_banner_change_next").click(function() {
		i -= 1;
		if(i <= 0) {
			i = allimg - 1;
		}
		img_change();
	})
})