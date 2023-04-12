const names = [
    'GROUP 1',
    'GROUP 2',
    'GROUP 3',
    'GROUP 4',
    'GROUP 5',
    'GROUP 6',
    'GROUP 7',
    'GROUP 8',
    'GROUP 9',
    'GROUP 10',
]

// Buttons:
const randomBtn = document.querySelector('.randomBtn') 
const start = document.querySelector('.start') 
// Student Names/Groups
const student = document.querySelector('.student') 
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

start.addEventListener("click", ()=>{
    video.src = "groups.mp4";
    video.load();
    start.disabled = true;
    start.style.cursor = "none"
    start.style.width = "0px"
    start.style.height = "0px"
    


    // Random Button:
    randomBtn.disabled = false
    randomBtn.style.cursor = "pointer"
})


// video.muted = !video.muted; 
function getRandomName (){
    if(names.length !== 0){
        student.innerText = names.pop() 
        soundEffects.play()
        console.log(names)
    } else {
        student.innerText = ""
        video.src = "SEI3Graduation.mp4"; // Change the source of the video
        video.load(); // Load the new video
    }
}

randomBtn.addEventListener('click', getRandomName)