console.log("F01");
function laskeSumma(a,b) {
return a + b;
}

console.log(laskeSumma(3,5));
console.log("................................................................................");

console.log("F02");
function laskeNeliönPintaAla(sivunpituus) {
return sivunpituus * sivunpituus;
}
console.log(laskeNeliönPintaAla(6));
console.log("................................................................................");

console.log("F03");
function laskeYmpyränPintaAla(sade) {
    return Math.PI * sade * sade;
}

console.log(laskeYmpyränPintaAla(5));
console.log("................................................................................");

console.log("F04");
function laskeKeskiarvo(taulukko) {
    const summa = 0;
    for (var i = 0; i < taulukko.length-1; i++)
    {
        summa += i;
    }
    return summa / taulukko.length;
}

console.log(laskeKeskiarvo([1,2,3,4,5]));
console.log("................................................................................");

console.log("F05");
function onkoParillinen(luku) {
    return luku % 2 === 0;
}
console.log(onkoParillinen(4));
console.log(onkoParillinen(3));
console.log(onkoParillinen(6));
console.log("................................................................................");


console.log("F06");
function laskeMerkkijononPituus(merkkijono) {
    return merkkijono.length;
}

console.log(laskeMerkkijononPituus("Tervetuloa"));
console.log("................................................................................");

console.log("F07");
function onkoMerkkijonoTyhja(tyhjajono) {
    return tyhjajono === "";
}

console.log(onkoMerkkijonoTyhja("Heippa"));
console.log(onkoMerkkijonoTyhja(""));
console.log("................................................................................");
