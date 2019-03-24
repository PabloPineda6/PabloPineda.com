// WEB API

// document.querySelector
const ToDo = document.querySelector("#thingsToDo")

const item1 = document.createElement('li') // crea un <li></li>
item1.textContent = "In six years or less I'll be creating 3D models for videos and/or video games"
const item2 = document.createElement('li') // crea un <li></li>
item2.textContent = "In ten years or less I won't work for a need of money but for the pleasure of it"
const item3 = document.createElement('li') // crea un <li></li>
item3.textContent = "In two years or less I will invest in small businesses to start filling my monetary needs in case my dream job doesn't pay off."

// DESTINO.appendchild(NODO_A_AGREGAR)
ToDo.appendChild(item1)
ToDo.appendChild(item2)
ToDo.appendChild(item3)

// MUSIC

// document.querySelector
const Music = document.querySelector("#Music")

var links = ["https://www.youtube.com/embed/Fq-KORMeNBE", "https://www.youtube.com/embed/Yi8UJQtO_AM", "https://www.youtube.com/embed/VEkpuOB92jc",
            "https://www.youtube.com/embed/TlUOJ_NbrhU", "https://www.youtube.com/embed/uIu-rMBwKas", "https://www.youtube.com/embed/PI1oVXHTPUI",
            "https://www.youtube.com/embed/htCcgpisgtk"]

const prev = document.getElementById("prev")
const info = document.getElementById("info")
const next = document.getElementById("next")
var playlist = 1;
var video = document.getElementById("Music")
prev.onclick = function(){
    if (playlist >1) playlist = playlist -1;
    else playlist = 7;
    info.textContent = "List " + String(playlist) + " of 7";
    video.src = links[playlist -1];
}
next.onclick = function(){
    if (playlist <7) playlist = playlist +1;
    else playlist = 1;
    info.textContent = "List " + String(playlist) + " of 7";
    video.src = links[playlist -1];
}