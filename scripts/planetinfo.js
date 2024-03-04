import { exoPlanets } from "./data.js";

const ships = [
  {
    name: "Enterpise NCC-1701",
    topSpeed: 2600000000000,
    img: "./assets/images/enterprise.png",
    isReal: false,
    cost: "Money no longer is use.",
    desc: "United Federation of Planets Galaxy Class Destroyer, Flagship of Federation Fleet, commissioned 2363  ",
  },
  {
    name: "Atlas 5",
    topSpeed: 28000,
    img: "./assets/images/atlasV.jpg",
    isReal: true,
    cost: "USD $110M",
    desc: "58m, 590,000kg, launched 99 times (98 successful)",
  },

  {
    name: "TTC Bus",
    topSpeed: 75,
    img: "./assets/images/ttc.jpg",
    isReal: true,
    cost: "CAD $300,000",
    desc: "2137 busses serving 192 routes and 279,650,000 riders per year.",
  },

  {
    name: "1982 Kuwahara KZ-1 BMX",
    topSpeed: 28163,
    img: "./assets/images/ET.jpg",
    isReal: true,
    cost: "USD $450",
    desc: "First human-alien powered vehicle to achieve earth escape velocity, on June 11, 1982.",
  },

  {
    name: "T65B Space Superiority Fighter",
    topSpeed: 71400000000000,
    img: "./assets/images/xwing.png",
    isReal: false,
    cost: "150,000 Imperial Credits",
    desc: "Also known as the X-Wing, 13.4x11.76m, Koensary GBk-585 hyperdrive system.",
  },
];

function travelTime(ship, planet) {
  let speedYear = ships[ship].topSpeed * 8765.82;
  //   console.log("Speedyear is");
  //   console.log(speedYear);
  let travelYears = (exoPlanets[planet].sy_dist * 30860000000000) / speedYear;
  //   console.log("Travel distance is");
  //   console.log(exoPlanets[planet].sy_dist * 30860000000000);
  //   console.log("TravelYears is:");
  //   console.log(travelYears);
  const timeText = document.querySelector(".travel-time");
  timeText.innerText =
    ships[ship].name + " will complete the journey to " + exoPlanets[planet].pl_name + " in " + travelYears + " years.";
  return (
    ships[ship].name + " will complete the journey to " + exoPlanets[planet].pl_name + " in " + travelYears + " years."
  );
}

function getRandomItem(max) {
  return Math.floor(Math.random() * max);
}

let selectedShip = getRandomItem(5);
let selectedPlanet = getRandomItem(90);

function returnShip(i) {
  const shipImg = document.querySelector(".trip__img");
  //   console.log(ships[i].name);
  shipImg.alt = ships[i].name;
  shipImg.src = ships[i].img;

  const shipName = document.querySelector(".vehicle__name");
  shipName.innerText = ships[i].name;

  const shipSpeed = document.querySelector(".vehicle__speed");
  shipSpeed.innerText = ships[i].topSpeed + " km/hour";

  const shipCost = document.querySelector(".vehicle__cost");
  shipCost.innerText = ships[i].cost;

  const shipDesc = document.querySelector(".vehicle__desc");
  shipDesc.innerText = ships[i].desc;
}

function returnPlanet(i) {
  const planetImageFrame = document.querySelector(".planet__img__container");
  //example iframe <IFRAME SRC="http://server1.sky-map.org/skywindow?object=M100&zoom=8&img_source=SDSS" WIDTH=400 HEIGHT=320> </IFRAME>

  const planetFrame = document.createElement("iframe");
  planetFrame.src =
    "http://server1.sky-map.org/skywindow?object=" + exoPlanets[i].hostname + "&zoom=10&img_source=SDSS";
  planetImageFrame.append(planetFrame);

  const pName = document.querySelector(".dest__name");
  pName.innerText = exoPlanets[i].pl_name;

  const pDist = document.querySelector(".dest__parsecs");
  pDist.innerText = exoPlanets[i].sy_dist;

  const pMassE = document.querySelector(".dest__massE");
  pMassE.innerText = exoPlanets[i].pl_masse;

  const discovered = document.querySelector(".dest__discovered");
  discovered.innerText = exoPlanets[i].disc_year;

  const orbit = document.querySelector(".dest__orbit");
  orbit.innerText = exoPlanets[i].pl_orbper + " per earth year";

  const numPlanets = document.querySelector(".dest__numPlanets");
  numPlanets.innerText = exoPlanets[i].sy_pnum + " found so far";
  //   console.log(exoPlanets[i]);
}

// const button = document.querySelector(".blast-off__button");
// button.addEventListener("submit", handleButton);

// function handleButton() {
//   selectedShip = getRandomItem(5);
//   selectedPlanet = getRandomItem(90);
//   returnShip(selectedShip);
//   returnPlanet(selectedPlanet);
//   travelTime(selectedShip, selectedPlanet);
// }

returnShip(selectedShip);
returnPlanet(selectedPlanet);
travelTime(selectedShip, selectedPlanet);
console.log(travelTime(selectedShip, selectedPlanet));

// function updateDestination() {
//     const sliderValue = parseInt(document.getElementById('destSelector').value, 10);
//     // Find the destination object with the matching value
//     const selectedDestination = destinations.find(dest => dest.value === sliderValue);
//   // Add an event listener to the slider input event
//   document.getElementById('destSelector').addEventListener('input', updateDestination);
//   // Call the function initially to set the initial state
//   updateDestination();