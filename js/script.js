// ES 2

// Dare la possibilità all’utente, attraverso
// 3 prompt(), di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.

const addButton = document.getElementById("add-student");
const bestStudent = {
    name: "Davide",
    surname: "Bortoloni",
    age: 22,
};
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

let bestStudentInfo = "";
for (let key in bestStudent) {
    bestStudentInfo += key + ": " + bestStudent[key] + "<br>";
}
print("best-student", bestStudentInfo);

displayStudent("students", students)

addButton.onclick = function () {
    let newStudentAge;
    let newStudentName;
    let newStudentSurname;

    do {
        newStudentName = prompt("Enter the name").trim();
    } while (!isValidName(newStudentName));
    do {
        newStudentSurname = prompt("Enter the surname").trim();
    } while (!isValidSurname(newStudentSurname));
    do {
        newStudentAge = prompt("Enter the age").trim();
    } while (!isValidAge(newStudentAge));

    const newStudent = {
        name: capitalize(newStudentName),
        surname: capitalize(newStudentSurname),
        age: newStudentAge,
    };

    students.push(newStudent);

    displayStudent("students", students)
};
