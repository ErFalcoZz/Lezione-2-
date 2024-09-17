/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = parseFloat(prompt("Inserisci un numero"))
let num2 = parseFloat(prompt("Inserisci un secondo numero"))

if(num1 > num2) {
  console.log(`${num1} è più grande di ${num2}`);
} else if (num2 > num1) {
  console.log(`${num2} è più grande di ${num1}`);
} else {
  console.log("I numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = parseInt(prompt("Vediamo se questo numero è diverso da 5"));

if(num3 !== 5) {
  console.log(`${num3} è diverso da 5`);
} else {
  console.log("5 è ovviamente uguale a 5")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/



/* SCRIVI QUI LA TUA RISPOSTA */

let num4 = parseInt(prompt("Verifichiamo se è divisibile per 5"))

if(num4 % 5 === 0) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso!");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = parseFloat(prompt("Inserisci il primo numero"))
let numero2 = parseFloat(prompt("Inserisci il secondo numero"))

if(numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8 || numero2 - numero1 === 8) {
  console.log("Hai vinto!")
} else {
  console.log("Hai perso stupido!")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = parseFloat(prompt("Dimmi quanto hai speso"))
// const Shipping = 10

// if(totalShoppingCart >= 50) {
//   console.log("Hai diritto alla spedizione gratuita");
// } else {
//   console.log(`La tua spesa totale è ${totalShoppingCart + Shipping}`);
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = parseFloat(prompt("Dimmi quanto hai speso"))
const Shipping = 10
const BlackDiscount = (totalShoppingCart * 20) / 100

if(totalShoppingCart >= 50) {
  console.log(totalShoppingCart - BlackDiscount);
  console.log("Hai diritto alla spedizione gratuita");
} else {
  console.log(totalShoppingCart - BlackDiscount);
  console.log(`La tua spesa totale è ${totalShoppingCart + Shipping}`);
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 4335
let b = 4523
let c = 34


if (a < b) {

  d = b;
  b = a;
  a = d;

} 
if (b < c) {

  d = c;
  c = b;
  b = d;

}

console.log(`l'ordine corretto dei numeri è ${a} ${b} ${c}`)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let variabile = "john"

if (typeof variabile == typeof 1) {
  console.log(`${variabile} è un  numero`)
} else {
  console.log(`${variabile} non è un numero`)
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 11
if(val < 5) {

  console.log("Meno di 5");

} else if (val < 10) {

  console.log("Meno di 10");

} else {

  console.log("Uguale a 10 o maggiore");

}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto"

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills[2]

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

numberList [numberList.length - 1] = 100

console.log(numberList)


