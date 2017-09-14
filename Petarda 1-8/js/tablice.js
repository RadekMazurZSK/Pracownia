var kolory;
kolory = ['biały', 'zielony', 'czerwony', 'niebieski'];
var elkolor = document.getElementById('kolor');
//elkolor.textContent <- jest bardziej profesjonalny, używamy gdy chcemy wyciągnąć tekst z jakigoś diva
//elkolor.textContent = kolory[0];

//tworzenie tablicy za pomocą konstruktora tablicy Array
var samochody = new Array('BMW', 'Audi', 'Ferrari');
console.log(samochody[0]); //pierwszy element tablicy
console.log(samochody[samochody.length - 1]);
//document.write('Ilość elementów w tablicy samochody wynosi ' + samochody.length);

/*var zmiana = prompt('Podaj nazwę samochodu do tablicy');
samochody[0] = zmiana;
console.log(samochody);*/

//tablice wielowymiarowe
var tab = new Array(
    Array('Jan', 'Nowak', 'Poznań'),
    Array('Agata', 'Waligóra', 'Sosnowiec'),
    Array('Maciej', 'Trybuś', 'Słupsk'),
);
console.log(tab);
console.log(tab[1][1]); //Waligóra

var imiona = ['Janusz', 'Andrzej', 'Marta'];
console.log(imiona);
var posortowane = imiona.sort();
console.log(posortowane);
var odwrocone = posortowane.reverse();
//imiona.pop(); usuwa ostatni element
imiona.unshift('Tomasz'); //dodaje element na początku tablicy
imiona.push('Czarek'); //dodaje element na końcu tablicy
console.log(odwrocone);

//sprawdzenie czy element jest w tablicy
console.log(imiona.indexOf('Marta')); //jeśli element jest w tablicy to zwróci 1, jeśli nie to -1

var cyfry = [1,2,20,190,-1]; //tablica z liczbami
console.log(cyfry);
//var sortowanie = cyfry.sort();
//console.log(sortowanie);

//SORTOWANIE LICZB!
cyfry.sort(function(a,b){
    return(a-b);   
})
console.log(cyfry);

function wypisz(){
    var elpierwszy = document.getElementById('pierwszy').value;
    var eldrugi = document.getElementById('drugi').value;
    var eltrzeci = document.getElementById('trzeci').value;
    
    var kolor = [elpierwszy, eldrugi, eltrzeci];
    console.log(kolor);
}