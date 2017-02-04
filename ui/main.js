var element = document.getElementById('bd');
var c =0;
element.onclick= function(){
    var count = document.getElementById('count');
    c=c +1;
    count.innerHTML=c.toString();
};