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

// -------------------------------------------

// Creo le biciclette
const scottSpeedster = createBike("Scott Speedster", 9);
const canyonGrail = createBike("Canyon Grail", 8);
const giantAdvanced = createBike("Giant Defy Advanced 2", 7.5);
const bianchiSprint = createBike("Bianchi Sprint", 8.2);
const treckEmonda = createBike("Treck Emonda", 9.7);
const cannondale = createBike("Cannondale Carbon", 7.4);
const bmcRoad = createBike("BMC Roadmachine", 11);
