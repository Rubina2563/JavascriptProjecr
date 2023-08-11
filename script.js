//Initialising the variables


let audioElement=new Audio('./songs/afreen.mpeg');

let masterPlay=document.getElementById("masterPlay");

let progressBar=document.getElementById("myProgressBar");

let gif=document.getElementById("gif");

let songItem=Array.from(document.getElementsByClassName("soundItem"));
let songInfo=document.getElementsByClassName("songInfo");

let songs=[
    {songName:"Afreen", filePath:"./songs/afreen.mpeg" , coverPath:"images.jpg"},
    {songName:"Ishq Bulawa", filePath:"./songs/ishq_bulawa.mp3" , coverPath:"images.jpg"},
    {songName:"Manchala", filePath:"./songs/manchala.mp3" , coverPath:"images.jpg"},
    {songName:"Tum Se Hi", filePath:"./songs/Tum Se Hi_320(Ghantalele.com).mp3" , coverPath:"images.jpg"},
    {songName:"Aoge Jab Tum", filePath:"./songs/Aaoge Jab Tum_320(Ghantalele.com).mp3" , coverPath:"images.jpg"},
]

//adding songs details
songItem.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    console.log(element,i);
})

//handle click button
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        gif.style.opacity=0.4;
       
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play'); 
        
        makeAllPlay();
        //Array.from(document.getElementsByClassName("songItemPlay")).target.classList.remove("fa-circle-pause");
       // Array.from(document.getElementsByClassName("songItemPlay")).target.classList.add("fa-circle-play");

        gif.style.opacity=0;
    }
    
   
})

//updating progress bar with song
audioElement.addEventListener('timeupdate',()=>{
    let progess=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progess;
})

//handling the clicks on progress bar
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})

//making random songs to play

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element,i)=>{

element.addEventListener('click',(e)=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    makeAllPlay();
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src=songs[i].filePath;
    audioElement.currentTime=0;
    audioElement.play();
   masterPlay.classList.remove('fa-circle-play');
 masterPlay.classList.add('fa-circle-pause');

 let b=i;
 document.getElementById("next").addEventListener('click',()=>{
    
    if(b>=4){
        b=0
    }else(
        b+=1
    )
    audioElement.src=songs[b].filePath;
    audioElement.currentTime=0;
    audioElement.play();
   masterPlay.classList.remove('fa-circle-play');
 masterPlay.classList.add('fa-circle-pause');
 makeAllPlay();


})

document.getElementById("previous").addEventListener('click',()=>{
    
    if(b<=0){
        b=4
    }else(
        b-=1
    )
    audioElement.src=songs[b].filePath;
    audioElement.currentTime=0;
    audioElement.play();
   masterPlay.classList.remove('fa-circle-play');
 masterPlay.classList.add('fa-circle-pause');
 makeAllPlay();


})

}
 else{
    
    e.target.classList.remove("fa-circle-pause");
    e.target.classList.add("fa-circle-play");
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');  
    gif.style.opacity=0;
 }
 
})

}
)




