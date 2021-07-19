const addButton = document.getElementById("add-student");
const inputSection = document.getElementById("input-section");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const ageInput = document.getElementById("age");
const confirmButton = document.getElementById("confirm");
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
    inputSection.classList.remove("d-none");
    this.classList.add("d-none");
}
confirmButton.onclick = function () {
    const newStudentName = nameInput.value.trim();
    const newStudentSurname = surnameInput.value.trim();
    const newStudentAge = ageInput.value.trim();

    if (isValidName(newStudentName) && isValidSurname(newStudentSurname) && isValidAge(newStudentAge)) {
        const newStudent = {
            name: capitalize(newStudentName),
            surname: capitalize(newStudentSurname),
            age: newStudentAge,
        };
        students.push(newStudent);
        displayStudent("students", students)
        inputSection.classList.add("d-none");
        addButton.classList.remove("d-none");
        nameInput.value = "";
        surnameInput.value = "";
        ageInput.value = "";
    }
};
