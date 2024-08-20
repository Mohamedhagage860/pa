//for audio
document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");

    playPauseBtn.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.classList.remove("play");
            playPauseBtn.classList.add("pause");
        } else {
            audioPlayer.pause();
            playPauseBtn.classList.remove("pause");
            playPauseBtn.classList.add("play");
        }
    });
});


// local storage 
let maincolors = localStorage.getItem("color_option");

if(maincolors !== null){
    document.documentElement.style.setProperty("--color-green" , maincolors);
    document.documentElement.style.setProperty("--color" , maincolors);
    document.documentElement.style.setProperty("--color-white" , maincolors);
    //remove all colors from list items
    document.querySelectorAll(".colors-list li").forEach(element => {

       
       
    });
       
  
}
//switch colors
const colorsli =document.querySelectorAll(".colors-list li");

// for switch colors
colorsli.forEach(li => {
li.addEventListener("click" ,(e) =>{
   
    document.documentElement.style.setProperty("--color-green" ,  e.target.dataset.color);
    document.documentElement.style.setProperty("--color" ,  e.target.dataset.color);
    document.documentElement.style.setProperty("--color-white" ,  e.target.dataset.color);
    // local storage
    localStorage.setItem("color_option" ,  e.target.dataset.color)
    
    // remeov class active
  
    

    

});

});

//select element
let landingarea = document.querySelector(".landing-area");
//creat array of imgs
let imgsarray = ["1.jpg","2.jpg","3.jpg","4.jpg"];
setInterval(() => {
    //get random number
        let randomnum = Math.floor(Math.random() * imgsarray.length );
        // change backgruond img url
        landingarea.style.backgroundImage = 'url("imgs/' + imgsarray[randomnum] + '")';
      
    } , 3000 );




//settings element icon
document.querySelector(".settings-box .icon i").onclick = function (){

    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open");
}
//menu
document.querySelector(".boot i").onclick = function (){


    document.querySelector(".main-link").classList.toggle("tow");
   
    
}
document.querySelector(".heading .links li a").onclick = function (){

    document.querySelector(".heading .links li a").classList.toggle("zoom");
}






