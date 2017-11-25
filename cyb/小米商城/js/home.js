/*购物车效果*/
var shopCart = document.getElementById("shop-cart");
var shopMsg = document.getElementById("shop-msg");

shopCart.onmouseover = function () {
    shopMsg.style.display = 'block';
}
shopCart.onmouseout = function () {
    shopMsg.style.display = 'none';
}

/*信息框上移*/

