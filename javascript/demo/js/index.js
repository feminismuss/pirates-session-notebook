// Buttons im DOM auswählen, die über data-js Attribute referenziert werden
const addButton = document.querySelector('[data-js="add-button"]');
const removeButton = document.querySelector('[data-js="remove-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');
// console.log("addButton", addButton); // zum Debuggen: prüft, ob der Button gefunden wurde

// Das übergeordnete Element auswählen, das wir stylen wollen
const bodyElement = document.querySelector('[data-js="root"]');
// console.log("bodyElement: ", bodyElement); 
// bodyElement.className = "dark"; // setzt den gesamten class-String direkt auf "dark", überschreibt also eventuell vorhandene Klassen
// bodyElement.classList.add("dark"); 
// classList erlaubt gezieltes Hinzufügen, Entfernen oder Umschalten einzelner Klassen, ohne andere Klassen zu löschen

// Event-Listener für den Add-Button hinzufügen
addButton.addEventListener("click", () => {
    // Wenn geklickt, wird dem <body> die Klasse "dark" hinzugefügt
    // console.log("user clicked the add button");
    bodyElement.classList.add("dark");
});

// Event-Listener für den Remove-Button hinzufügen
removeButton.addEventListener("click", () => {
    // Entfernt die Klasse "dark" vom <body> 
    bodyElement.classList.remove("dark");
});

// Event-Listener für den Toggle-Button hinzufügen
toggleButton.addEventListener("click", () => {
    // Schaltet die Klasse "dark" ein oder aus
    // Wenn sie vorhanden ist → entfernt, wenn nicht → hinzugefügt
    bodyElement.classList.toggle("dark");
});
