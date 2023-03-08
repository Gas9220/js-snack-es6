'use strict';

console.log("Snack 2 ---------------------------------------------");

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

// Li Appendo ad un array
const students = [marco, paola, andrea, gaia, luigi, piero,francesca];
console.log("Students", students);

// Studenti in maiuscolo
const uppercaseStudents = students.map((student) => student.name.toUpperCase());
console.log("Uppercase Students", uppercaseStudents);

// Studenti con grade > 70
const upper70Students = students.filter((student) => student.grade > 70);
console.log("Grade+70 Students", upper70Students);

// Studenti con grado > 70 e id > 120
// Verifico la condizione richiesta
function filterByGradeAndId(student) {
    if (student.grade > 70 && student.id > 120) {
        return true;
    }

    return false;
}

const gradeAndIdStudents = students.filter(filterByGradeAndId);
console.log("Grade and id Students", gradeAndIdStudents);