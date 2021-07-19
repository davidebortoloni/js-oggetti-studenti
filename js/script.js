// Targettizzazione elementi
const addButton = document.getElementById("add-student");
const inputSection = document.getElementById("input-section");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const ageInput = document.getElementById("age");
const confirmButton = document.getElementById("confirm");

// Inizializzazione oggetto miglior studente
const bestStudent = {
    name: "Davide",
    surname: "Bortoloni",
    age: 22,
};
// Inizializzazione di array con gli studenti (oggetti)
const students = [
    {
        name: "Marilena",
        surname: "Cantisani",
        age: 24,
    },
    {
        name: "Giorgio",
        surname: "Andrei",
        age: 21,
    },
    {
        name: "Giuseppe",
        surname: "Pisani",
        age: 28,
    },
    {
        name: "Pasquale",
        surname: "Raso",
        age: 48,
    },
    {
        name: "Elena",
        surname: "Durante",
        age: 25,
    },
];

// Stampa delle informazioni del miglior studente
let bestStudentInfo = "";
for (let key in bestStudent) {
    bestStudentInfo += capitalize(key) + ": " + bestStudent[key] + "<br>";
}
print("best-student", bestStudentInfo);

// Stampa dell'elenco degli studenti
displayStudent("students", students)

// Evento al click del bottone per aggiungere uno studente
addButton.onclick = function () {
    // Facciamo scomparire il bottone per aggiungere un nuovo studente
    this.classList.add("d-none");
    // Facciamo apparire la sezione per inserire i dati
    inputSection.classList.remove("d-none");
}
// Evento al click del bottone per confermare i dati inseriti
confirmButton.onclick = function () {
    // Raccolta dei dati inseriti negli input
    const newStudentName = nameInput.value.trim();
    const newStudentSurname = surnameInput.value.trim();
    const newStudentAge = ageInput.value.trim();

    // Verifica validità dei dati
    if (isValidName(newStudentName) && isValidSurname(newStudentSurname) && isValidAge(newStudentAge)) {
        // Creazione di un oggetto con il nuovo studente
        const newStudent = {
            name: capitalize(newStudentName),
            surname: capitalize(newStudentSurname),
            age: newStudentAge,
        };
        // Inserimento del nuovo studente
        students.push(newStudent);

        // Stampa dell'elenco degli studenti
        displayStudent("students", students)

        // Facciamo scomparire la sezione per inserire i dati
        inputSection.classList.add("d-none");
        // Facciamo riapparire il bottone per aggiungere un nuovo studente
        addButton.classList.remove("d-none");

        // Formattazione di tutti gli input
        nameInput.value = "";
        surnameInput.value = "";
        ageInput.value = "";
    }
};
