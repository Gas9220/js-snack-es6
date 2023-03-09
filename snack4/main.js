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

// Funzione che genera un numero casuale (Thanks MDN)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione che aggiunge punti e falli casuali
function randomStats(teams) {
    const updatedTeams = structuredClone(teams)

    updatedTeams.forEach(team => {
        const randomScore = getRandomInt(1, 500);
        const randomFouls = getRandomInt(1, 100);

        team.points = randomScore;
        team.fouls = randomFouls;
    });

    return updatedTeams;
}

// -------------------------------------------

// Creo i team
const real = createTeam("Real Madrid");
const manchester = createTeam("Manchester United");
const paris = createTeam("Paris Saint German");
const rome = createTeam("Roma");
const ajax = createTeam("Ajax");
const celtic = createTeam("Celtic");

// Aggiungo i team all'array
const teams = [real, manchester, paris, rome, ajax, celtic];
console.log("Teams", teams)