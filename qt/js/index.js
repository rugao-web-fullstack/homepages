window.onload=function(){
    var xx=document.getElementById('xx');
    var banner=document.getElementById('top-banner');
    var text=document.getElementById('textt');
    xx.onmousedown=function(){
        banner.style.display='none';
    };
    text.onmousedown=function(){
        text.value='';
        text.style.color='rgb(51, 51, 51)';
    };
}