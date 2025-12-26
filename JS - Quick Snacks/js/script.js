console.log("Js - Quick Snakcs");

// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
console.log(`Quanti cubi vuoi? - O "Come ti calcolo la potenza di 3 tutte le volte che vuoi"`);
userNumber = prompt("Dimmi fin a quale numero vuoi che calcoli il cubo", "2")
for (let i = 0; i <= userNumber.length; i++) {
  console.log("Perfetto! Calcolo i cubi fino a", parseInt(userNumber));
  console.log("Il cubo di", [i], "è uguale a = ", [i] ** 3);
} 

// Stampa le potenze di 2 fino a 1000.
console.log("Ci sto prendendo gusto, lascia che ti mostri le potenze di 2 fino al numero 1000");
for (let i = 1; i <= 1000; i++) {
  console.log("La potenza di 2 di", [i], "è uguale a", 2 ** [i]);
}

// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
console.log("Bene, ora passiamo a qualcosa di più interessante...");

let somma4 = 0;

for (let i = 0; i < 1; i++) {
const user4DigitNumber = prompt("Digita un numero a 4 cifre", "2099"); 
if (user4DigitNumber.length == 4) {
  somma4 += parseInt(user4DigitNumber[0])
  somma4 += parseInt(user4DigitNumber[1])
  somma4 += parseInt(user4DigitNumber[2])
  somma4 += parseInt(user4DigitNumber[3])
  console.log("Le 4 cifre che hai digitato, sommate insieme, equivalgono a =", somma4);
}

else {
  console.log("Attenzione, devi inserire un numero a 4 cifre, non una in più o in meno!");
  i--;
}
}

// Calcola la somma e la media dei primi 10 numeri.
console.log("Adesso mettiamo sommiamo insieme i primi 10 numeri");

let first10Numbers = 0; 
let counter = 0;
for (let i = 1; i <= 10; i++) {
  first10Numbers += i;
  counter += 1;
}
  console.log("Il risultato è=", first10Numbers);
  console.log("La media invece è", first10Numbers / counter);
  
