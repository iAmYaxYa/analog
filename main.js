
// Variables
const hourElement = document.getElementById('hour'),
      minuteElement = document.getElementById('minute'),
      secondElement = document.getElementById('second');

// Function
function analog(){
    
    // curent date 
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
 
    // degree values
    let hourDeg = (h * 30) + (0.5 * m); // 30 = 360deg / 12hours; (0.5 = 30 / 60; * m);
    let minuteDeg = (m * 6) + (0.1 * s); // 6 = 360deg / 60minutes; (0.1 = 6deg / 60seconds * seconds);
    let secondDeg = s * 6; // 6 = 360deg / 60seconds;
    
   
    // rotation Elements 
    hourElement.style.transform = "rotate(" + hourDeg + "deg)";
    minuteElement.style.transform = "rotate(" + minuteDeg + "deg)";
    secondElement.style.transform = "rotate(" + secondDeg + "deg)";    
}
// every second call analog 
setInterval(() => {
    analog();
}, 1000);

