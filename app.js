let centerx = window.innerWidth / 2;
let centery = window.innerHeight / 2;
let speed = 1;
let intervalMultiplier = 0.01 * speed;






const earthRadius = 93;
const earthWidth = 0.127;
const earthInterval = 360;


const marsInterval = 687;

const jupiterInterval = 4270;

const mercuryInterval = 87;

const earthEllipse = document.querySelector(".earthEllipse");
earthEllipse.style.left = centerx - earthRadius * 2 + "px";
earthEllipse.style.top = centery - earthRadius  + "px";




