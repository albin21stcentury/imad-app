//console.log('Loaded!');
var button=document.getElementById("counter");

button.onclick = function () {
    var request= new XMLHttpRequest();
    request.onreadystatechange = function () {
        
        if (request.readyState === XMLHttpRequest.DONE) {
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
var nameinp=document.getElementById("name");
var submit=document.getElementById("submit");
submit.onclick=function() {
    var names={'name1','name2'};
    var list='';
    for(var i=0;i<names.length;i++) {
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};
