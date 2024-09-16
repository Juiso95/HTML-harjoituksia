console.log("P01");
console.log("Hei Maailma");

console.log("P02");
var luku1, luku2, summa;
luku1 = 10;
luku2 = 3;
summa = luku1 + luku2;
console.log("Lukujen " + luku1 + " ja " + luku2 + " summa = " + summa);
console.log("..........................................................................");

console.log("P03");
var luku1, luku2, summa;
luku1 = 24;
luku2 = 13;
erotus = luku1 - luku2;
console.log("Lukujen " + luku1 + " ja " + luku2 + " erotus =" + erotus);
console.log("..........................................................................");

console.log("P04");
var luku1, luku2, luku3, tulo;
luku1 = 2;
luku2 = 3;
luku3 = 8;
tulo = luku1 * luku2 * luku3;
console.log("Lukujen " +luku1+ " , " +luku2+ " ja " +luku3+ " tulo = " +tulo);
console.log("..........................................................................");

console.log("P05");
var luku1, luku2, osamäärä;
luku1 = 34;
luku2 = 9;
osamäärä = luku1 / luku2;
console.log("Lukujen " +luku1+ " ja " +luku2+ " osamäärä = " +osamäärä);
console.log("..........................................................................");

console.log("P06");
var celsius, fahrenheit;
celsius = 30;
fahrenheit = celsius * 1.8 + 32;
console.log(celsius + " astetta Celsiusta on " +fahrenheit+ " astetta Fahrenheitia");
console.log("..........................................................................");

console.log("P07");
var fahrenheit, celsius;
fahrenheit = 123;
celsius = (fahrenheit - 32) / 1.8;
console.log(fahrenheit + " astetta Fahrenheitia on " +celsius+ " astetta Celsiusta");
console.log("..........................................................................");

console.log("P08");
var kilometri, maili, muunnos = 1.609;
maili = 100;
kilometri = muunnos * maili;
console.log(maili + " Mailia on " + kilometri +" kilometriä");
console.log("..........................................................................");

console.log("P09");
var kilometri, maili, muunnos = 1.609;
kilometri = 129;
maili = kilometri / muunnos;
console.log(kilometri + " Kilometriä on " + maili +" mailia");
console.log("..........................................................................");

console.log("P10");
var sentti, tuuma, muunnos = 2.54;
tuuma = 63;
sentti = tuuma * muunnos;
console.log(tuuma + " Tuumaa on " +sentti+ " senttimetriä");
console.log("..........................................................................");

console.log("P11");
var tuuma, sentti, muunnos = 2.54;
sentti = 120;
tuuma = sentti / muunnos;
console.log(sentti+ " Senttiä on " +tuuma+ " tuumina");
console.log("..........................................................................");

console.log("P12");
var metri, yardi, muunnos = 0.9144;
yardi = 100;
metri = yardi * muunnos;
console.log(yardi+ " Yardia on " +metri+ " metriä");
console.log("..........................................................................");

console.log("P13")
var yardi, metri, muunnos= 0.9144;
metri = 234;
yardi = metri / muunnos;
console.log(metri+ " Metriä on " +yardi+ " yardia");
console.log("..........................................................................");

console.log("P14")
function summafunctio(a,b) {
    console.log("Lukujen " + a + " ja " + b + " summa = " + (a+b));
}

function erotusfunctio(a,b){
    console.log("Lukujen " + a + " ja " + b + " erotus = " + (a-b));
}

function tulofunctio(a,b){
    console.log("Lukujen " + a + " ja " + b + " tulo = " + (a*b));
}

function osamääräfunctio(a,b){
    console.log("Lukujen " + a + " ja " + b + " osamäärä = " + (a/b));
}

summafunctio(3,19);
erotusfunctio(75,21);
tulofunctio(4,7);
osamääräfunctio(87,5);
console.log("..........................................................................");

console.log("P15")
var pii = 3.1415;
function ympyränAla(säde){
    console.log("Ympyrän pinta-ala on " + (säde * säde * pii) + " kun säde on: " +säde);
}
ympyränAla(3);
console.log("..........................................................................");

console.log("P16");
function nelionAla(sivu){
    console.log(sivu * sivu);
}
nelionAla(3);
console.log("..........................................................................");

console.log("P17");
function suorakulmaAla(sivu1, sivu2) {
    console.log(sivu1*sivu2);
}
suorakulmaAla(3, 4);
console.log("..........................................................................");

console.log("P18");
function muunnaVuosiksi(päivät) {
    let vuodet = parseInt(päivät / 365);
    let kuukaudet = parseInt((päivät % 365) / (365 / 12));
    let paivaa = parseInt((päivät % 365) - kuukaudet * (365 / 12));
    console.log(päivät+ " Päivää on " + vuodet + " vuotta, " + kuukaudet + " kuukautta " + paivaa + " päivää")
}
muunnaVuosiksi(33562);