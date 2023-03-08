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

let guests = [bradPitt, johnnyDepp, ladyGaga, cristianoRonaldo, georginaRodriguez, chiaraFerragni, fedez, georgeClooney, amalClooney, maneskin];

console.log(guests)


guests.forEach((guest, index) => {
    if (index < guests.length - 1) {
        guest.table = "Vip",
        guest.seat = index + 1
        console.log(`${guest.name} is seated in the ${guest.table} table at ${guest.seat} position`);
    } else {
        guests[guests.length - 1].forEach((guest, index) => {
            guest.table = "Vip",
            guest.seat = guests.length + index
            console.log(`Maneskin - ${guest.name} is seated in the ${guest.table} table at ${guest.seat} position`);

        });
    }
});