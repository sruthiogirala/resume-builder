
function newpage(){

function loadJSON(file,callback){
    var rawFile= new XMLHttpRequest();
    rawFile.overrideMineType("application/json");
    rawFile.open("GET",file,true);
    rawFile.onreadystatechange=function () {
      if (readyState===4 && rawFile.status=="200"){
        callback(rawFile.responseText);
      }
    }
  rawFile.send();
}

loadJSON("resourses/resume.json",function (text){
  var data=JSON.parse(text)
  //console.log(data);

});
var main=document.getElementById('mainDiv');
var left=document.getElementById('leftDiv');
var right=document.getElementById('rightDiv');
function basic(basics) {
  var lcl=document.createElement("div");
  lcl.classList.add("child1");
  var image=document.createElement("img");
  image.src=basics.picture;
  var head1=document.createElement("h1");
  head1.textContent=basics.name;
  var head3=document.createElement("h3");
  head3.textContent=basics.label;
  lc1.appendChild(image);
  lc1.appendChild(head1);
  lc1.appendChild(head3);
}
left.appendChild(lc1);
main.appendChild(left);
