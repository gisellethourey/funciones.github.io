
function pintar (e, color) {
    e.style.backgroundColor= color;
}
 const ele = document.getElementById("ele1");
 ele.addEventListener("click", (e) => {
    pintar(ele,'yellow')
 })



