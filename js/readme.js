const firstname = prompt("Inserisci il tuo nome");

const surname = prompt("Inserisci il tuo cognome");

const color = prompt("Inserisci il tuo colore preferito");

const generatedInfo = firstname + surname + color + "21";

const welcomeMessage = `<h1>Benvenuto ${generatedInfo}</h1>`;

document.getElementById("message").innerHTML = welcomeMessage;
