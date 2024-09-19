// Summa
console.log("F1");
function laskeSumma(a,b) {
    return a + b;
}
console.log(laskeSumma (5,6));
console.log("..............................................................................................................................................");

// Neliön Pinta-ala
console.log("F02")
function laskeNelionPintaAla(sivu) {
    return sivu * sivu;
}
console.log(laskeNelionPintaAla(4));
console.log("..............................................................................................................................................");

// Ympyrän Pinta-ala
console.log("F03");
function laskeYmpyranPintaAla(sade) {
    return Math.PI * sade * sade;
}
console.log(laskeYmpyranPintaAla(6));
console.log("..............................................................................................................................................");

// Keskiarvo
console.log("F04");
function laskeKeskiarvo(taulukko){
    let summa = 0;
    for(var i = 0; i < taulukko.length; i++)
{
    summa += taulukko[i];
}
    return summa / taulukko.length;
}
console.log(laskeKeskiarvo([1,2,3,4,5]));
console.log("..............................................................................................................................................");

// Onko parillinen
console.log("F05");
function onkoParillinen(luku) {
    luku = Number(luku);
    return luku === 0 || !!(luku && ! (luku%2));
}
console.log(onkoParillinen(2));
console.log(onkoParillinen(3));
console.log(onkoParillinen(7));
console.log(onkoParillinen(8));

// Onko parillinen Vaihtoehto 2
console.log("F05.1");
function onkoparillinen(luku1) {
    return luku1 % 2 === 0;
}
console.log(onkoparillinen(2));
console.log(onkoparillinen(3));
console.log(onkoparillinen(7));
console.log(onkoparillinen(8));
console.log("..............................................................................................................................................");

// Laske Merkkijonon Pituus
console.log("F06");
function laskeMerkkijononPituus(merkkijono) {
    return merkkijono.length
}
console.log(laskeMerkkijononPituus("Tervehdys"));
console.log("..............................................................................................................................................");

// Onko Merkkijono Tyhjä
console.log("F07");
function onkoMerkkijonoTyhjä(tyhja) {
    return tyhja.length === 0;
}
console.log(onkoMerkkijonoTyhjä(""))
console.log(onkoMerkkijonoTyhjä("Hei"))
console.log(onkoMerkkijonoTyhjä(""))
console.log("..............................................................................................................................................");

// Laske Suurin
console.log("F08");
function laskeSuurin(taulukkoSuurin) {
    return Math.max(...taulukkoSuurin);
}
console.log(laskeSuurin([2,7,1,9,3]));
console.log("..............................................................................................................................................");

// Laske Pienin
console.log("F09");
function laskePienin(taulukkoPienin) {
    return Math.min(...taulukkoPienin);
}
console.log(laskePienin(([2,7,1,9,3])));

// Laske Taulukon Summa
console.log("F10");
function laskeTaulukonSumma(taulukkoSumma) {
    
}