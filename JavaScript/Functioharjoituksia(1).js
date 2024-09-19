console.log("F1");
function laskeSumma(a,b) {
    return a + b;
}
console.log(laskeSumma (5,6));
console.log("..............................................................................................................................................");

console.log("F02")
function laskeNelionPintaAla(sivu) {
    return sivu * sivu;
}
console.log(laskeNelionPintaAla(4));
console.log("..............................................................................................................................................");

console.log("F03");
function laskeYmpyranPintaAla(sade) {
    return Math.PI * sade * sade;
}
console.log(laskeYmpyranPintaAla(6));
console.log("..............................................................................................................................................");

console.log("F04");
function laskeKeskiarvo(taulukko) {
    const summa = 0;
    for(var i = 0; i < taulukko.length-1; i++)
{
    summa += i;
}
    return summa / taulukko.length;
}
console.log(laskeKeskiarvo([1,2,3,4,5]));