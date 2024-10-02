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
console.log("..............................................................................................................................................");

// Laske Taulukon Summa
console.log("F10");
function laskeTaulukonSumma(taulukkoSumma) {
    var summa = 0;
    for (var i = 0; i < taulukkoSumma.length; i++)
{
    summa += taulukkoSumma[i];
}
return summa;
}
console.log(laskeTaulukonSumma([1,2,3,4,5]))
console.log("..............................................................................................................................................");

// Laske Potenssi
console.log("F11");
function laskePotenssi(kantaluku,eksponentti) {
    return Math.pow(kantaluku,eksponentti);
}
console.log(laskePotenssi(4,2));
console.log("..............................................................................................................................................");

// Onko alkuluku?
console.log("F12");
function onkoAlkuluku(alkuluku) {
    if (alkuluku < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(alkuluku); i++) {
        if (alkuluku % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(onkoAlkuluku(13));
console.log(onkoAlkuluku(15));
console.log(onkoAlkuluku(19));

// Esimerkki vaihtoehto
console.log("F12.1");
function onkoAlkuluku(alkuluku) {
    if (alkuluku <= 1) return false;
    if (alkuluku <= 3) return true;
    if (alkuluku % 2 === 0 || alkuluku % 3 === 0) return false;
    let i = 5;
    while ( i * i <= alkuluku) {
        if (alkuluku % i === 0 || alkuluku % (i+2) === 0) return false;
    }
    return true;
}
console.log(onkoAlkuluku(13));
console.log(onkoAlkuluku(15));
console.log(onkoAlkuluku(19));
console.log("..............................................................................................................................................");

// Käänteinen parametri
console.log("F13");
function kaannaMerkkijono(kaanna) {
    return kaanna.split('').reverse().join('');
}
console.log(kaannaMerkkijono("Morjensta"));
console.log("..............................................................................................................................................");

// Onko Palindromi
console.log("F14");
function onkoPalindromi(sana) {
const kaannettySana = sana.split('').reverse().join('');
    return sana === kaannettySana;
}
console.log(onkoPalindromi("anna"));
console.log(onkoPalindromi("sanna"));
console.log(onkoPalindromi("matti"));
console.log(onkoPalindromi("eve"));
console.log("..............................................................................................................................................");

// Onko Anagrammi
console.log("F15");
function onkoAnagrammi(sana11,sana22) {
    const sana1Jarjestetty = sana11.split('').sort().join('');
    const sana2Jarjestetty = sana22.split('').sort().join('');
    return sana1Jarjestetty === sana2Jarjestetty;
}
console.log(onkoAnagrammi("kissa", "kassi"));
console.log(onkoAnagrammi("kairo", "koira"));
console.log(onkoAnagrammi("hevonen", "hamsteri"));
console.log("..............................................................................................................................................");

// Taulukon keskiarvo
console.log("F16");
function laskeTaulukonKeskiarvo(keskiarvotaulukko) {
    const summa = keskiarvotaulukko.reduce((arvo, numero) => arvo + numero, 0);
    return summa / keskiarvotaulukko.length;
}
console.log(laskeTaulukonKeskiarvo([1,2,3,4,5]));
console.log("..............................................................................................................................................");

// Onko Karkausvuosi
console.log("F17");
function onkoKarkausvuosi(vuosi) {
    return (vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0);
}
console.log(onkoKarkausvuosi(2016));
console.log(onkoKarkausvuosi(2017));
console.log(onkoKarkausvuosi(2018));
console.log(onkoKarkausvuosi(2019));
console.log(onkoKarkausvuosi(2020));
console.log("..............................................................................................................................................");

// Onko taulukko järjestetty
console.log("F18");
function onkoTaulukkoJärjestetty(jarjestettytaulukko) {
for (let i = 0; i < jarjestettytaulukko.length - 1; i++) {
    if (jarjestettytaulukko[i] > jarjestettytaulukko[i + 1]) {
        return false;
    }
}
return true;
}
console.log(onkoTaulukkoJärjestetty([1,2,3,4,5]));
console.log(onkoTaulukkoJärjestetty([5,4,3,2,1]));

// Muuta eka kirjain isoksi
console.log("F19");
function muutaEkaKirjainIsoksi(merkkijono1) {
    return merkkijono1.charAt(0).toUpperCase() + merkkijono1.slice(1);
}
console.log(muutaEkaKirjainIsoksi("heippa!"));
console.log("..............................................................................................................................................");

// Laske Fibonacci
console.log("F20");
function laskeFibonacci(f) {
    if (f <= 0) return 0;
    if (f === 1) return 1;
    let a = 0, b = 1;
    for (let i =2; i <= f; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
console.log(laskeFibonacci(8));
console.log("..............................................................................................................................................");
