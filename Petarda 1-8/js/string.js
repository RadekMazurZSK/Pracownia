var text = 'ZSK - Zespół Szkół Komunikacji'; //długość 30
console.log(text.length);

var pierwszy = text.charAt(0);
console.log(pierwszy);

var ostatni = text.charAt(text.length - 1);
console.log(ostatni);

console.log(text.charAt(11)); //ł

//document.write(text.charCodeAt(0)); //wyświetla kod ASCI Z
console.log(text.charCodeAt(0) + 32); //wyświetla kod ASCI z

//Zamiana na duże litery 
var duze = text.toUpperCase();
//document.write("<br>" + duze);

var male = text.toLowerCase();
//document.write("<br>" + male);

var duzaMale = text.charAt(0).toUpperCase() + 
    text.slice(1).toLowerCase();
console.log(duzaMale);


//Użytkownik wprowadza z klawiatury swoje imię. Zamień pierwszy znak na dużą literę, a pozostałe mają być małe. Wyświetl wszystko w nagłówku drugiego stopia, w kolorze niebieskim.

var imie = prompt('Podaj swoje imię');
var naglowek = document.getElementById('naglowek');
var duza = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
naglowek.innerHTML = duza;
naglowek.style.color = 'blue';
console.log(duza.substr(1, duza.length - 2)); //ucina pierwszą i ostatnią literę np Janusz -> anus