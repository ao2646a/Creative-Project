(function () {
    "use strict";
    window.onload = function () {
      document.getElementById("begin").onclick = startQuiz;

        document.getElementById("start").onclick = form1;

        document.getElementById("back1").onclick = back1;

        document.getElementById("next1").onclick = next1;

        document.getElementById("back2").onclick = back2;

         document.getElementById("next2").onclick = next2;

        document.getElementById("back3").onclick = back3;

        document.getElementById("next3").onclick = next3;

        document.getElementById("libarts").onclick = showLA;



    }

    function startQuiz(){

        let i = 60; // sets i to 60 seconds
            let timerId = setInterval(function(){
                if(i === 0){ // if i is 0, stop timer and time up prints in console if console.log()
                  clearInterval(timerId);
                  console.log("Time is up!");
                  time.innerHTML = i;
                }
                else{
                  // innerHTML = everything btwn open and close startGame
                  //
                  console.log(i + "...");
                  time.innerHTML = i + " seconds";
                  i--;
                }
            }, 1000); // runs function every 1000 milliseconds (1 second)

  }

    function form1 (){
        document.querySelector("#main-view").classList.add("hidden");
        document.querySelector("#form1").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
        let time = document.getElementById("time");
        let i = 0;
          let timerId = setInterval(function(){
            if(i == 300){
              clearInterval(timerId);
              next1();
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
        let time2 = document.getElementById("time2");
        let i = 0;
          let timerId = setInterval(function(){
            if(i == 300){
              clearInterval(timerId);
              time2.innerHTML = i + "seconds";
              next2();
            }
            else{

              console.log(i + "...");
              time2.innerHTML = i + " seconds";
              i++;
            }
          }, 1000);
    }

    function back2 (){
         document.querySelector("#form1").classList.remove("hidden");
        document.querySelector("#form2").classList.add("hidden");

    }

       function next2 (){
        document.querySelector("#form2").classList.add("hidden");
        document.querySelector("#form3").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
        let time3 = document.getElementById("time3");
        let i = 0;
          let timerId = setInterval(function(){
            if(i == 300){
              clearInterval(timerId);
              time3.innerHTML = i + "seconds";
              next3();
            }
            else{
              console.log(i + "...");
              time3.innerHTML = i + " seconds";
              i++;
            }
          }, 1000);
    }

    function back3 (){
        document.querySelector("#form2").classList.remove("hidden");
        document.querySelector("#form3").classList.add("hidden");

    }

    function next3 (){
      document.querySelector("#form3").classList.add("hidden");
      document.querySelector("#form4").classList.remove("hidden");
      let results = document.createElement("p");
      results.title = "results go here";
      document.getElementById("resultList").appendChild(results);


    }

    function showLA(){
      var princetonLink = document.createElement("a");
      var princetonText = document.createTextNode("Princeton's Take on Liberal Arts");
      princetonLink.appendChild(princetonText);
      princetonLink.title = "Princeton's Take on Liberal Arts";
      princetonLink.href = "https://admission.princeton.edu/academics/what-does-liberal-arts-mean";
      document.body.appendChild(princetonLink);


    }

})();
