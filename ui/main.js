//console.log('Loaded!');
var button=document.getElementById("counter");
var counter=0;
button.onclick = function () {
 counter=counter + 1;
 var sp=document.getElementById("count");
 console.log(sp);
 sp.innerHTML=counter.toString();
};