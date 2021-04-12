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
        
        document.getElementById("back4").onclick = back4;
        
        document.getElementById("libarts").onclick = showLA;
        document.getElementById("begin").onclick = startQuiz;


    }
    
//timer//
    function startQuiz(){
      let time0 = document.getElementById("time0");
        let i = 60; // sets i to 60 seconds
            let timerId = setInterval(function(){
                if(i === 0){
                  clearInterval(timerId);
                  alert("It has been 60 seconds, if you are still using this page, please click the start button.");
                  time0.innerHTML = i;
                }
                else{
                  time0.innerHTML = i + " seconds";
                  i--;
                }
            }, 1000);

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
    document.querySelector("#form4").classList.remove("hidden");
        document.querySelector("#form3").classList.add("hidden");
        
        //create element 1//
        var header = document.creatElement("h1");
        var t = document.createTextnode("Your Results: ");
        header.appendChild(t);
        document.getElementById("header").appendChild(header);
    
        //create element 2//  
      let results = document.createElement("p");
      results.title = "results go here";
      document.getElementByClassName("resultList").appendChild(results);
        
         //create element 3//  
      let helpnotice = document.createElement("p");
      helpnotice.title = "Need further help?";
      document.getElementById("help").appendChild(helpnotice);
    }
    
    function back4 (){
        document.querySelector("#form3").classList.remove("hidden");
        document.querySelector("#form4").classList.add("hidden");

    }
    
    function showLA(){
      var princetonLink = document.createElement("a");
      var princetonText = document.createTextNode("Princeton's Take on Liberal Arts");
      princetonLink.appendChild(princetonText);
      princetonLink.title = "Princeton's Take on Liberal Arts";
      princetonLink.href = "https://admission.princeton.edu/academics/what-does-liberal-arts-mean";
      document.getElementById("opinions").append(princetonLink);


    }

  //   function pricefx(){
  //     let priceOptions = document.getElementsByClassName("price");
  //     let above = document.getElementById("above");
  //     let below = document.getElementById("below");
  //
  //     if(priceOptions.selected = priceOptions[0]){
  //       if(below.selected == True){
  //         alert("You cannot chose the lowest price and consider price ranges below it. Please uncheck the first checkbox.");
  //       }
  //     }
  //     if(priceOptions.selected = priceOptions[10]){
  //       if(above.selected == True){
  //         alert("You cannot chose the highest price and consider price ranges above it. Please uncheck the second checkbox.");
  //       }
  //     }
  //     if(priceOptions.selected = priceOptions[11]){
  //         alert("You cannot chose an unlimited price and consider price ranges above/below it. Please uncheck both checkboes.");
  //   }
  // }

})();