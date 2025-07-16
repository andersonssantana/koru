function welcomeMessage() {
  console.log("Bem-vindo ao curso");
};
welcomeMessage();

// Expression function
function calculateArea(width, height) {
  return width * height;
};

// Arrow function
const calculateAreaArrow = (width, height) => width * height;

let area = calculateArea(5, 10);
console.log(area);

function convertToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
};
let grausCelsius = convertToCelsius(125);
console.log(grausCelsius);

const convertToCelsiusArrow = (fahrenheit) => {
  let celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
};

calculateAreaArrow(15, 30);
convertToCelsiusArrow(70);
