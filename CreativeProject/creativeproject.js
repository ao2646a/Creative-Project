(function () {
    "use strict";
    window.onload = function () {
        document.getElementById("start").onclick = form1;
        document.getElementById("back1").onclick = back1;

        document.getElementById("next1").onclick = next1;

        document.getElementById("back2").onclick = back2;

         document.getElementById("next2").onclick = next2;

        document.getElementById("back3").onclick = back3;

        document.getElementById("next3").onclick = next3;

        document.getElementById("LAButton").onclick = showLA;

    }

    function showLA(){
      let libOptions = document.createElement("div");



    }


    function form1 (){
        document.querySelector("#main-view").classList.add("hidden");
        document.querySelector("#form1").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
        let i = 0;
          let timerId = setInterval(function(){
            if(i == Infinity){
              clearInterval(timerId);
              console.log("Time is up!");
              time.innerHTML = i + "seconds";
            }
            else{

              console.log(i + "...");
              time.innerHTML = i + " seconds";

              i++;
            }
          }, 1000);
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

       function next2 (){
        document.querySelector("#form2").classList.add("hidden");
        document.querySelector("#form3").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
    }

    function back3 (){
        document.querySelector("#form2").classList.remove("hidden");
        document.querySelector("#form3").classList.add("hidden");

    }

    function next3 (){
      document.querySelector("#form3").classList.add("hidden");
      document.querySelector("#form4").classList.remove("hidden");
      let results = document.createElement("p");
      results = "*** results will go here***";
      document.getElementById("resultList").appendChild(results);

    }





})();
