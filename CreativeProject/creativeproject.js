(function () {
    "use strict";
    window.onload = function () {
        document.getElementById("start").onclick = form1;
        document.getElementById("back1").onclick = back1;
        
        document.getElementById("next1").onclick = next1;
        
        document.getElementById("back2").onclick = back2;
    }
    
    
    function form1 (){
        document.querySelector("#main-view").classList.add("hidden");
        document.querySelector("#form1").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
    }
    
    function back1 (){
         document.querySelector("#main-view").classList.remove("hidden");
        document.querySelector("#form1").classList.add("hidden");
         document.querySelector("body").style.backgroundImage = "url(college-students.jpeg)";
    }
    
    function next1 (){
        document.querySelector("#form1").classList.add("hidden");
        document.querySelector("#form2").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
    }
    
    function back2 (){
         document.querySelector("#form1").classList.remove("hidden");
        document.querySelector("#form2").classList.add("hidden");
         
    }
    
})();