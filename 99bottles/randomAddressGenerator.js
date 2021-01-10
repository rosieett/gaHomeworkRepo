// As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code.

const streetName = ['Bleeker Street', 'University Place', 'Houston Street', 'Broadway'];
const streetNumbers = [107, 224, 52, 72];
const cityName = ['New York', 'Washington', 'Baltimore', 'South Hadley'];
const stateName = ['New York', 'DC', 'Maryland', 'Massachusetts'];
const zipCode = [10003, 20009, 21201, 01075];

// Your script should randomly select one item from each of these arrays and then use them to construct a random address


let randomStreet = streetName[Math.floor(Math.random()*streetName.length)];
let randomNumber = streetNumbers[Math.floor(Math.random()*streetNumbers.length)];
let randomCity = cityName[Math.floor(Math.random()*cityName.length)];
let randomState = stateName[Math.floor(Math.random()*stateName.length)];
let randomZip = zipCode[Math.floor(Math.random()*zipCode.length)];



// Each time you run the script, it should print a new randomly-generated address to the terminal.
console.log(randomNumber + " " + randomStreet);
console.log(randomCity + ", " + randomState + " " + randomZip);

// For example: node random-address.js => 34578 Dolphin Street, Wonka NY, 44506
