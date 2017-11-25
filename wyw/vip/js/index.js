$(function () {
    $('#myPopover').popover({
        // trigger:'hover',
        html: true,
        content: "<img src='img/login1.png'>" +
        "<a href='#' class='signevery'>每天签到送惊喜，连续签到更享心动好礼</a>" +
        "<button class='sign'>签到</button>",
        // content: "<a href='#'>每天签到送惊喜，连续签到更享心动好礼</a>",
        placement: "bottom"
    });
});
