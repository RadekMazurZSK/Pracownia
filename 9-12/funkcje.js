/*function witaj() {
    document.write('Witaj ' + name);
}
var name = 'Maciej';
witaj(name);*/

/*function poleProstokata(a, b) {
    var pole = a * b;
    return pole;

}
var a = prompt('Podaj a')
var b = prompt('Podaj b')
var pole = poleProstokata(a, b);
console.log(pole);*/

/*function poleOrazObjetosc(szerokosc, dlugosc, wysokosc) {
    var pole = szerokosc * dlugosc;
    var objetosc = pole * wysokosc;
    var wynik = [pole, objetosc];
    return wynik;
}*/
// console.log(poleOrazObjetosc(2, 3, 4));

/*var x = prompt('Podaj wartość', '0 - pole', '1 - objętość');
var wynik = poleOrazObjetosc(2, 3, 4)[x];
document.write(wynik);
var pole = poleOrazObjetosc(2, 3, 4)[0];
var objetosc = poleOrazObjetosc(2, 3, 4)[1];
console.log('Pole: ' + pole);
console.log('Objętość: ' + objetosc);*/

    // Zadanie
    // Napisać skrypt, który oblicza obwód, pole koła oraz objętość stożka. Dane użytkownik podaje z klawiatury. Wykorzystaj obiekt Math.      // Użytkownik wybiera za pomocą pola radio co chce obliczyć. Dane wprowadza w formularzu. Dane wyświetl w bloku strony.

// console.log(Math.PI);

function stozek() {
    var r = document.getElementById('r').value;
    console.log(r);
    var h = document.getElementById('h').value;
    var l = document.getElementById('l').value;
    var pi = Math.PI;
    var pow = Math.pow;
    var polePodstawy = pi * pow(r, 2);
    var pole = pi * r * (r + l)
    var objetosc = ((Math.PI * pow(r, 2)) * h)/3;
    var obwod = 2 * pi * r;
    var wynik;
    var wybor;

    switch(wybor) {
        case 1:
            wynik = pole;
            break;
        case 2:
            wynik = objetosc;
            break;
        case 3:
            wynik = obwod;
            break;
        default:
            wynik = "Nic nie wybrano";
            break;
                }

    document.getElementById("Wynik").innerHTML = wynik;
    /*document.write('Pole: ' + pole + '<br>');
    document.write('Objętość: ' + objetosc + '<br>');
    document.write('Pole podstawy: ' + polePodstawy + '<br>');
    document.write('Obwód podstawy: ' + obwod + '<br');*/
}


