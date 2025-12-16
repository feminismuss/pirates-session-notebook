/*
====================================
FUNCTION DECLARATION
====================================
*/

// printPersonalData("Max", 45);
// printPersonalData("Jordan", 43);

// Eine klassische Funktionsdeklaration
// name und age sind PARAMETER (Platzhalter für Werte)
function printPersonalData(name, age) {
    // Falls kein Name übergeben wurde,
    // ist "name" automatisch undefined
    if (name === undefined) {
        console.log("hello stranger");
    } else {
        // String-Verkettung mit +
        console.log(name + " ist " + age + " Jahre alt");
    }
}

// Hier wird die Funktion OHNE Argumente aufgerufen
printPersonalData();

/*
====================================
ARROW FUNCTION
====================================
*/

// Arrow Functions sind eine modernere Schreibweise
// Funktioniert fast gleich wie oben, nur kürzer
const printPersonalInfo = (name, age) => {
    console.log(name + " ist " + age + " Jahre alt");
};
// printPersonalInfo("Alex", 65);

/*
====================================
EVENT LISTENER MIT FUNCTION
====================================
*/

// Variante 1: anonyme Arrow Function direkt übergeben
document.body.addEventListener("click", () => {
    console.log("Variante 1: Arrow Function läuft bei Klick");
});

// Variante 2: benannte Funktion vorher definieren und referenzieren
function bodyClick() {
    console.log("Variante 2: benannte Funktion läuft bei Klick");
}
document.body.addEventListener("click", bodyClick);

// Variante 3: benannte Funktion direkt beim Listener definieren
document.body.addEventListener("click", function bodyClickInline() {
    console.log(
        "Variante 3: benannte Funktion inline beim Listener läuft bei Klick"
    );
});

/*
====================================
FUNKTION MIT RETURN
====================================
*/

// Diese Funktion berechnet eine Summe
const calculateSum = (a, b) => {
    console.log("HELLO WORLD"); // läuft jedes Mal
    return a + b; // gibt ein Ergebnis zurück
};

// Hier rufen wir die Funktion auf und speichern das Ergebnis in einer Variable
const result = calculateSum(1, 2);
// Jetzt können wir das Ergebnis benutzen oder ausgeben
console.log("Ergebnis:", result); // Ausgabe: Ergebnis: 3
/*
====================================
FUNKTION MIT BOOLEAN RETURN
====================================
*/

// Prüft, ob ein String länger als 8 Zeichen ist
const checkInputLength = (inputString) => {
    // .length zählt die Zeichen im String
    if (inputString.length > 8) {
        return false; // zu lang ❌
    } else {
        return true; // passt ✅
    }
};

// Rückgabewert wird in einer Variable gespeichert
const isValid = checkInputLength("Hey!");

// console.log("isValid", isValid);


/*
====================================
CODE VOM RECAP
====================================
*/

// Arrow Function mit **implicit return** (eine Zeile reicht)
const calculateSumImplicitReturn = (a, b) => a + b;
// Hinweis: hier wird das Ergebnis automatisch zurückgegeben, kein "return" nötig

// Klassische Version mit if/else 
// const checkInputLength = (inputString) => {
//     if (inputString.length > 8) {
//         return false; 
//     } else {
//         return true; 
//     }
// };

// Gleiche Funktion mit ternary operator (kurzer Schreibstil)
const checkInputShort = (inputString) => {
    // "?" = dann, ":" = sonst
    // Wenn inputString länger als 8, return false, sonst true
    return inputString.length > 8 ? false : true;
};

// Noch kürzere Version: implicit return + ternary operator
const checkInputImplicit = (inputString) =>
    inputString.length > 8 ? false : true;
// Funktioniert genau wie oben, nur kompakter
// Hinweis: hier wird das Ergebnis automatisch zurückgegeben, kein "return" nötig
