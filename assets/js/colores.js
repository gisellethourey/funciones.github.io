//Ejercicio 3.2
const colors = document.querySelectorAll(".div1")

colors.forEach((div1) => {
    div1.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "black"
    })
})

//Ejercicio 3.3 y 3.4
let a = 'pink';
let s ='orange';
let d ='skyblue';

const createNewDiv = (color) => {
    const newDiv = document.createElement("div")
    newDiv.style.height = "200px";
    newDiv.style.width = "200px";
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}

document.addEventListener ('keydown', function (event) {
    if (event.key === 'a') {
        key.style.backgroundColor = "pink";
    } else if (event.key === 's') {
        key.style.backgroundColor = "orange";
    } else if (event.key === 'd') {
        key.style.backgroundColor = "skyblue";
    } else if (event.key === 'q') {
        createNewDiv ("purple")
    } else if (event.key === 'w') {
        createNewDiv ("grey")
    } else if (event.key === 'e')
    createNewDiv ("brown")
})



