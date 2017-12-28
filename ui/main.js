//console.log('Loaded!');
var button=document.getElementById("counter");

button.onclick = function () {
    var request= new XMLHttpRequest();
    request.onreadystatechange = function () {
        
        if (request.readystate === XMLHttpRequest.DONE) {
            if (request.status === 200) {
            var counter = request.responseText;
             var sp = document.getElementById("count");
// console.log(sp);
 sp.innerHTML=counter.toString();
        }
        }
    };

request.open('GET','http://albinpius12.imad.hasura-app.io/counter',true);
request.send(null);
};