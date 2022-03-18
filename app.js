let centerx = window.innerWidth / 2;
let centery = window.innerHeight / 2;
const earthRadius = 93;

const earthEllipse = document.querySelector(".earthEllipse");
earthEllipse.style.left = centerx - earthRadius * 2 + "px";
earthEllipse.style.top = centery - earthRadius  + "px";

console.log(earthEllipse)

