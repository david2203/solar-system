function changeSpeed() { 
    speed = document.querySelector(".planetSpeed").value;
    intervalMultiplier = 0.01 * speed;
    startPlanetMovement();
}