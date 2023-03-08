'use strict';

//------------- Funtions -------------------

// Funzione che facilita la creazione di un singolo invitato
function createGuest(name) {
    let guest = {
        name: name,
    }

    return guest;
}

//-----------------------------------------

// Creo gli oggetti vip con i soli nomi
let bradPitt = createGuest("Brad Pitt");
let johnnyDepp = createGuest("Johnny Depp");
let ladyGaga = createGuest("Lady Gaga");
let cristianoRonaldo = createGuest("Cristiano Ronaldo");
let georginaRodriguez = createGuest("Georgina Rodriguez");
let chiaraFerragni = createGuest("Chiara Ferragni");
let fedez = createGuest("Fedez");
let georgeClooney = createGuest("George Clooney");
let amalClooney = createGuest("Amal Clooney");
let maneskin = [createGuest("Damiano David"), createGuest("Victoria De Angelis"), createGuest("Thomas Raggi"), createGuest("Ethan Torchio")];

// Aggiungo i vip all'array
let guests = [bradPitt, johnnyDepp, ladyGaga, cristianoRonaldo, georginaRodriguez, chiaraFerragni, fedez, georgeClooney, amalClooney, maneskin];
// Stampo in console l'array
console.log(guests)

// Eseguo un forEach sull'array
guests.forEach((guest, index) => {
    // Eseguo questo if perché l'ultimo elemento dell'array e a sua volta un array e al momento non voglio modificarlo
    if (index < guests.length - 1) {
        // aggiungo le nuove chiavi con i valori
        guest.table = "Vip",
        guest.seat = index + 1
        // Stampo in console
        console.log(`${guest.name} is seated in the ${guest.table} table at ${guest.seat} position`);
    } else {
        // Appena raggiungo l'ultimo elemento (array) dell'array, uso un forEach per aggiungere le nuove chiavi
        guests[guests.length - 1].forEach((guest, index) => {
            guest.table = "Vip",
            guest.seat = guests.length + index
            console.log(`Maneskin - ${guest.name} is seated in the ${guest.table} table at ${guest.seat} position`);
        });
    }
});