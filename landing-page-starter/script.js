let next = document.querySelector(".next")
let destination = document.querySelector(".destination")
let prev = document.querySelector(".prev")

let arr = [
    "./images/Destinations/azhimala.webp",
    "./images/Destinations/kedarnath-temple.webp",
    "./images/Destinations/marinaBeach.jpg",
    "./images/Destinations/meghalaya.jpg",
    "./images/Destinations/rameshwaram.jpeg"
]

let index = 0;

next.addEventListener("click" , ()=>{
    index++;
    if(index == arr.length){
        index = 0;
    }
    destination.style.backgroundImage = `url(${arr[index]})`
})

prev.addEventListener("click" , ()=>{
    if(index == 0){
        index = arr.length;
    }
    index--;
    destination.style.backgroundImage = `url(${arr[index]})`
})