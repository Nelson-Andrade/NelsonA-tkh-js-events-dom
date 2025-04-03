//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function() {
    //Get the element with an id of onload
    let onLoad = document.getElementById("onload");
    //Add some HTML within the element we grabbed
    onLoad.innerHTML = "<h1>I loaded cause the DOM was fully loaded</h1>";
});

//Get the element that will show our key code
let direction = document.getElementById("direction");
//It Can be changed with Key press or key up depending on what you might need 
document.addEventListener("keydown", function(e) {
    // When a key is pressed, the element with the id of direction will show the message
    direction.innerText = `The Key you pressed is ${e.code}`;
});

let button = document.getElementById("clickMe");
document.addEventListener("click", function() {
    button.innerHTML = "You clicked me!";
}); 

let colorButton = document.getElementById("randomColorBtn");
console.log(colorButton);

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    randomColor = `rgb(${r}, ${g}, ${b})`;    
    console.log(randomColor);
    return randomColor;
}

colorButton.addEventListener("click", function() {
    colorButton.style.backgroundColor = getRandomColor();
});