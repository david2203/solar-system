let centerx = window.innerWidth / 2;
let centery = window.innerHeight / 2;
let speed = 1;
let intervalMultiplier = 0.01 * speed;





// earth - settings
const earthRadius = 93;
const earthWidth = 0.127;
const earthInterval = 360;


const marsInterval = 687;

const jupiterInterval = 4270;

const mercuryInterval = 87;
const marsSizeMultiplier = 2;
const earthSizeMultiplier = 2;
const mercurySizeMultiplier = 3;




    //earth-ellipse
const earthEllipse = document.querySelector(".earthEllipse");
earthEllipse.style.left = centerx - earthRadius * 2 + "px";
earthEllipse.style.top = centery + (earthSize * earthSizeMultiplier / 2 ) - earthRadius  + "px";
earthEllipse.style.width = earthRadius * 4 + "px";
earthEllipse.style.height = earthRadius * 2 + "px";

    //earth
const earth = document.querySelector(".earth");
earth.style.width = earthSize * earthSizeMultiplier + "px";


// mars - settings
const marsRadius = 141;
const marsSize = 6.7;


    //mars-ellipse
const marsEllipse = document.querySelector(".marsEllipse");
marsEllipse.style.left = centerx - marsRadius * 2 + "px";
marsEllipse.style.top = centery + (marsSize * marsSizeMultiplier / 2 ) - marsRadius  + "px";
marsEllipse.style.width = marsRadius * 4 + "px";
marsEllipse.style.height = marsRadius * 2 + "px";

    //mars 
const mars = document.querySelector(".mars");
mars.style.width = marsSize * marsSizeMultiplier + "px";


// mercury - settings
const mercuryRadius = 57;
const mercurySize = 4.8;


    //mercury-ellipse
const mercuryEllipse = document.querySelector(".mercuryEllipse");
mercuryEllipse.style.left = centerx - mercuryRadius * 2 + "px";
mercuryEllipse.style.top = centery + (mercurySize * mercurySizeMultiplier / 2 ) - mercuryRadius  + "px";
mercuryEllipse.style.width = mercuryRadius * 4 + "px";
mercuryEllipse.style.height = mercuryRadius * 2 + "px";

    //mercury 
const mercury = document.querySelector(".mercury");
mercury.style.width = mercurySize * mercurySizeMultiplier + "px";