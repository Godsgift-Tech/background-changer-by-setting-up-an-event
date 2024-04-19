function SetUpEvent() {
var bgd = document.getElementById("build");
var bTn = document.getElementById("bTn");
var colors = ['blue', 'green', 'orange', 'purple'];
  var counter = 0;
 
 bTn.onclick = function() {
    if (counter >= colors.length){
        counter = 0;
       }
bgd.style.background =colors[counter];
counter++;
}
}
window.onload = function() {
    SetUpEvent();
}