let btn = document.querySelector(".btn");
let main = document.querySelector(".main");
let ul = document.querySelector("ul");
let audio = document.getElementById("audio");
let audio2 = document.getElementById("audio2")
 btn.addEventListener("click",function(){
     let ele = document.createElement("p")
     ele.innerHTML = main.value;
     ul.append(ele);
     ele.addEventListener("click",function(){
         ele.style.textDecoration = 'line-through';
         audio2.play();
     })
     ele.addEventListener("dblclick",function(){
         ele.innerHTML = " "; 
         audio2.play();

     })
     audio.play();

 })
 $( function() {
    $( document ).tooltip();
  } );