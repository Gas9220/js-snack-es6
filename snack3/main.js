'use strict';

// Functions ---------------------------------

// Funzione che facilita la creazione di una bicicletta
function createBike(model, weight) {
    const bike = {
        model: model,
        weight: weight
    }

    return bike;
}

// Funzione che permette di trovare la bici con il peso minore
function searchLighterBike(bicycles) {
    const lighter = bicycles.reduce(function(prevBike, currentBike) {
        return (prevBike.weight < currentBike.weight) ? prevBike : currentBike;
     });
 
     return lighter;
 }

// -------------------------------------------

// Creo le biciclette
const scottSpeedster = createBike("Scott Speedster", 9);
const canyonGrail = createBike("Canyon Grail", 8);
const giantAdvanced = createBike("Giant Defy Advanced 2", 7.5);
const bianchiSprint = createBike("Bianchi Sprint", 8.2);
const treckEmonda = createBike("Treck Emonda", 9.7);
const cannondale = createBike("Cannondale Carbon", 7.4);
const bmcRoad = createBike("BMC Roadmachine", 11);

// Creo l'array che contiene le biciclette
const bicycles = [scottSpeedster, canyonGrail, giantAdvanced, bianchiSprint, treckEmonda, cannondale, bmcRoad];

// Trovo la bicicletta con il peso minore
const lighterBike = searchLighterBike(bicycles);
console.log(lighterBike);

// Destructuring 
const {model} = lighterBike;
const {weight} = lighterBike;

// stampo in console
console.log(`Our lighter bike is ${model} and it's weight is ${weight}kg`);