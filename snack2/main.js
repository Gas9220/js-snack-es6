'use strict';

//------------- Funtions -------------------

// Funzione che facilita la creazione di un singolo studente
function createStudent(id, name, grade) {
    let student = {
        id: id,
        name: name,
        grade: grade
    }

    return student;
}

//-----------------------------------------

// Creo gli studenti
const marco = createStudent(213, 'Marco della Rovere', 78);
const paola = createStudent(110, 'Paola Cortellessa', 96);
const andrea = createStudent(250, 'Andrea Mantegna', 48);
const gaia = createStudent(145, 'Gaia Borromini', 74);
const luigi = createStudent(196, 'Luigi Grimaldello', 68);
const piero = createStudent(102, 'Piero Della Francesca', 50);
const francesca = createStudent(120, 'Francesca Da Polenta', 84);
