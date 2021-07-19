// Funzione per stampare stringhe o array in un determinato id
function print(id, result) {
    const element = document.getElementById(id);
    if (Array.isArray(result)) {
        element.innerHTML = "<ul><li>" + result.join("</li><li>") + "</li></ul>";
    } else {
        element.innerHTML = result;
    }
}
// Funzione per stampare tutti gli studenti in un array inserito come parametro
function displayStudent(id, students) {
    let studentsInfo = "";
    for (let i = 0; i < students.length; i++) {
        studentsInfo += "<li>Name: " + students[i].name + "</li>";
        studentsInfo += "<li>Surname: " + students[i].surname + "</li><br>";
    }
    print(id, studentsInfo);
}
// Funzione per verificare validità del nome inserito
function isValidName(inputTxt) {
    var letters = /^[a-zA-Z\s]+$/;
    if (inputTxt.match(letters)) {
        return true;
    }
    else {
        alert("Please enter a valid name (without numbers and special characters)");
        return false;
    }
}
// Funzione per verificare validità del cognome inserito
function isValidSurname(inputTxt) {
    var letters = /^[a-zA-Z\s]+$/;
    if (inputTxt.match(letters)) {
        return true;
    }
    else {
        alert("Please enter a valid surname (without numbers and special characters)");
        return false;
    }
}
// Funzione per verificare validità dell'età inserito
function isValidAge(age) {
    if (!age || age < 18 || age == "" || isNaN(age)) {
        alert("Please enter a valid age");
        return false;
    }
    return true;
}
// Funzione per rendere le iniziali maiuscole
function capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}