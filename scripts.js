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