'use strict';

// Functions ---------------------------------

// Funzione che facilita la creazione di una squadra
function createTeam(teamName) {
    const team = {
        teamName: teamName,
        points: 0,
        fouls: 0
    }

    return team;
}

// -------------------------------------------


// Creo i team
const real = createTeam("Real Madrid");
const manchester = createTeam("Manchester United");
const paris = createTeam("Paris Saint German");
const rome = createTeam("Roma");
const ajax = createTeam("Ajax");
const celtic = createTeam("Celtic");