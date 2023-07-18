const firstname = prompt("Inserisci il tuo nome");

const surname = prompt("Inserisci il tuo cognome");

let color = prompt("Inserisci il tuo colore preferito");

color = color + "21";

const generatedInfo = firstname + surname + color;

const welcomeMessage = "<h1>Benvenuto ${generatedInfo}</h1>";

document.getElementById("message").innerHTML = welcomeMessage;
