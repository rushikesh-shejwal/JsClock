let a , time;

setInterval(function(){
a = new Date();
time = a.getHours() + " : "  + a.getMinutes() + " : " + a.getSeconds();
document.getElementById('tm').innerHTML = time;
},1000);