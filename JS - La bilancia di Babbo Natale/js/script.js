console.log("%c🎄 Let it Bool, let it Bool, let it Bool 🎅", "background: green; color: white; font-size: 25px");


// Dato un array contenente il peso degli ultimi giocattoli prodotti (fornito da noi - vedete sotto), 
let pesiBase = [2, 5, 1, 1, 7, 3, 12, 6, 9, 3];
let pesiBonus = [2, "5", 1, 1, "7", null, 12, 6, 9, 3];

// il programma chiede all'utente l'operazione da svolgere, con una scelta tra:
const bagChoice = prompt (`👉 Seleziona il sacco da visionare. Digita "Sacco 1" o "Sacco 2"`)
const userChoice = prompt(`⚖️ Seleziona un'operazione tra "Peso medio", "Peso massimo", "Peso minimo" o "Numero giocattoli".`)

if (bagChoice.toUpperCase() == "SACCO 1") {
  console.log("🔍 Controlliamo i pacchi del Sacco 1");
  console.log("📋 Sacco Numero 1");
  console.table(pesiBase);
  
// PESI BASE 
// peso medio: per calcolare il peso medio di tutti i giocattoli
if (userChoice.toUpperCase() == "PESO MEDIO") {
    let somma = 0;
    let mediaPesi = 0; 
    for (let i = 0; i < pesiBase.length; i++)
    somma += pesiBase[i];
    mediaPesi = somma / pesiBase.length; 
    console.log("⚖️ Tutti i pacchi insieme pesano:", somma, "Kg");   
    console.log("📦 Il peso medio è di:", Number(mediaPesi.toFixed(2)), "Kg");
} // peso massimo: per restituire il peso del giocattolo piu' pesante
else if (userChoice.toUpperCase() == "PESO MASSIMO") {
    const maxWeight = Math.max(...pesiBase); 
    console.log("📦 Il pacco più pesante pesa:", maxWeight, "Kg");
} 
// peso minimo: per restituire il peso del giocattolo piu' leggero
  else if (userChoice.toUpperCase() == "PESO MINIMO") {
    const minWeight = Math.min(...pesiBase)
    console.log("📦 Il pacco più leggero pesa:", minWeight, "Kg");
} 
// numero di giocattoli: per restituire quanti giocattoli abbiamo pesato
  else if (userChoice.toUpperCase() == "NUMERO GIOCATTOLI") {
    console.log("🎁 Abbiamo verificato:", pesiBase.length, "pacchi!");
}
}

else if (bagChoice.toUpperCase() == "SACCO 2") {
  console.log("🔍 Controlliamo i pacchi del Sacco 2");
  console.log("📋 Sacco Numero 2");
  console.table(pesiBonus);
  console.log("😟 Qui gli elfi stagisti hanno fatto un casino... proviamo a sistemare il sacco!");
  let pesiBonusFiltrati = [];

for (i = 0; i < pesiBonus.length; i++) {
  if (typeof pesiBonus[i] == "number" || typeof pesiBonus[i] == "string") {
    pesiBonusFiltrati.push(parseInt(pesiBonus[i]));
}
}

pesiBonus = pesiBonusFiltrati;
console.table(pesiBonus);
console.log("😃 Et voilà! Molto meglio");
// PESI BONUS
// peso medio: per calcolare il peso medio di tutti i giocattoli
if (userChoice.toUpperCase() == "PESO MEDIO") {
    let somma = 0;
    let mediaPesi = 0; 
    for (let i = 0; i < pesiBonus.length; i++)
    somma += pesiBonus[i];
    mediaPesi = somma / pesiBonus.length; 
    console.log("⚖️ Tutti i pacchi insieme pesano:", somma, "Kg");   
    console.log("🎁 Il peso medio è di:", Number(mediaPesi.toFixed(2)), "Kg");


} // peso massimo: per restituire il peso del giocattolo piu' pesante
else if (userChoice.toUpperCase() == "PESO MASSIMO") {
    const maxWeight = Math.max(...pesiBonus); 
    console.log("📦 Il pacco più pesante pesa:", maxWeight, "Kg");
} 
// peso minimo: per restituire il peso del giocattolo piu' leggero
  else if (userChoice.toUpperCase() == "PESO MINIMO") {
    const minWeight = Math.min(...pesiBonus)
    console.log("📦 Il pacco più leggero pesa:", minWeight, "Kg");
} 
// numero di giocattoli: per restituire quanti giocattoli abbiamo pesato
  else if (userChoice.toUpperCase() == "NUMERO GIOCATTOLI") {
    console.log("🎁 Abbiamo verificato:", pesiBonus.length, "pacchi!");
}
} 
