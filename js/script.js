// ES 1

// Creare un oggetto che descriva uno studente,
// con le seguenti proprietà: nome, cognome e età.

// Stampare a schermo (in pagina) attraverso un
// ciclofor-in tutte le proprietà dell'oggetto.

const student = {
    name: "Davide",
    surname: "Bortoloni",
    age: 22,
};
let result = "";
for (let key in student) {
    result += key + ": " + student[key] + "<br>";
}
print("result", result);