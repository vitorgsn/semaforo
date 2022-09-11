const img = document.getElementById('img');
const buttons = document.getElementById("buttons");
let colorIndex = 0
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['green', 'yellow', 'red'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'green': () => img.src = './img/verde.png',
    'yellow': () => img.src = './img/amarelo.png',
    'red': () => img.src = './img/vermelho.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);