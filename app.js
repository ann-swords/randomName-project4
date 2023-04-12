const names = [
    'contentHive.png',
    'houseScout.png',
    'mula.png',
    'researchLibrary.png',
    'weddingPlaning.png',
    'planMyPlate.png',
    'travelBuddy.png',
    'stockMarket.png',
    'tawze3at.png',
    'passpal.png',
]

// Buttons:
const randomBtn = document.querySelector('.randomBtn') 
const start = document.querySelector('.start')
const broSound = document.querySelector('#broSound')
// Student Names/Groups
const student = document.querySelector('.student') 
const bro = document.querySelector('.bro') 
const bro2 = document.querySelector('.bro2') 
// Sound effects
let soundEffects = new Audio('vs.m4a')

// Videos
const video = document.getElementById('shuffel');

//Randomizing the names
for (let i = 0; i < names.length; i++) {
    const randomPosition = Math.floor((names.length - i) * Math.random())
    const randomItem = names.splice(randomPosition, 1)
    
    names.push(...randomItem)
}

// Befoer loading the groups vidoe
randomBtn.disabled = true
randomBtn.style.cursor = "none"
bro.src = ""

broSound.addEventListener("click", ()=>{
    video.muted = !video.muted;
})

start.addEventListener("click", ()=>{
    video.src = "groups.mp4";
    video.load();
    start.disabled = true;
    start.style.cursor = "none"
    start.style.width = "0px"
    start.style.height = "0px"

    bro2.src = ""
    bro.src = "bro.png"
    
    


    // Random Button:
    randomBtn.disabled = false
    randomBtn.style.cursor = "pointer"
})


 
function getRandomName (){
    if(names.length !== 0){
        student.src = names.pop() 
        soundEffects.play()
        console.log(names)
    } else {
        student.src = ""
        video.src = "SEI3Graduation.mp4"; // Change the source of the video
        video.load(); // Load the new video
        randomBtn.disabled = true
        randomBtn.style.cursor = "none"
        bro.src = ""
        bro2.src = "bro2.png"
    }
}

randomBtn.addEventListener('click', getRandomName)