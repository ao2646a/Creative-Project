(function () {
    "use strict";
    window.onload = function () {
        document.getElementById("start").onclick = form1;
    }
    
    
    function form1 (){
        document.querySelector("#main-view").classList.add("hidden");
        document.querySelector("#form1").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
    }
    
})();