function nextScreen(n){
document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
document.getElementById("screen"+n).classList.add("active");

if(n===4){
startSlideshow();

let song=document.getElementById("song");
song.volume=0;
song.play().catch(()=>{});

let fade=setInterval(()=>{
if(song.volume<1){
song.volume+=0.05;
}else clearInterval(fade);
},200);
}
}

function openEnvelope(){
document.querySelector(".envelope").classList.add("open");
document.querySelector(".tap-text").style.display="none";
}

/* HEARTS */
setInterval(()=>{
let h=document.createElement("div");
h.className="heart";
h.style.left=Math.random()*100+"vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),6000);
},400);

/* ✅ UPDATED IMAGE PATHS */
let imgs=[
"img1.jpg","img2.jpg","img3.jpg",
"img4.jpg","img5.jpg","img6.jpg",
"img7.jpg","img8.jpg","img9.jpg","img10.jpg"
];

let i=0;
function startSlideshow(){
let count=0;
let interval=setInterval(()=>{
i=(i+1)%imgs.length;
document.getElementById("slideshow").src=imgs[i];
count++;

if(count>imgs.length){
clearInterval(interval);
nextScreen(5);
startHeartRain();
}
},2500);
}

/* HEART RAIN */
function startHeartRain(){
setInterval(()=>{
let h=document.createElement("div");
h.className="rain-heart";
h.style.left=Math.random()*100+"vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),4000);
},200);
}