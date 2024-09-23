console.log("T01");
var Kauppalista = [];
Kauppalista.push('maitoa');
Kauppalista.push('juustoa');
Kauppalista.push('leipää');
Kauppalista.push('margariinia');
Kauppalista.push('leikkelettä');
Kauppalista.push('jogurttia');

console.log('Kauppalista');
for (var i = 0; i <Kauppalista.length; i++) {
    console.log(Kauppalista[i]);
}

console.log("................................................................................");

console.log("T02");
const nimet = ["Pekka", "Milla", "Kalle", "Laura", "Suvi"];
console.log(nimet);
console.log("................................................................................");

console.log("T03");
const taulukko =[1,2,3,4,5];
const pituus = taulukko.length;
console.log(pituus);
console.log("................................................................................");

console.log("T04");
const nimet2 =["Matti", "Samuli", "Julia"];
nimet2.push("Reeta");
console.log(nimet2);
console.log("................................................................................");

console.log("T05");
const taulu1 =[1,2,3];
const taulu2 =[4,5,6];
const yhdystaulu = taulu1.concat(taulu2);
console.log(yhdystaulu);
console.log("................................................................................");

console.log("T06");
const numerot = [1,2,3,4,5,6,7,8,9,10];
const parillisetNumerot = numerot.filter(numero => numero % 2 === 0);
console.log(parillisetNumerot)
console.log("................................................................................");

console.log("T07");
const numerot1 = [5,2,9,1,5,8,3];
numerot1.sort((a, b) => a- b);
console.log(numerot1)
console.log("................................................................................");

console.log("T08");
const numerot2 = [1,2,3,4,5];
numerot2.sort((a,b) => b - a);
console.log(numerot2)
console.log("................................................................................");

/*console.log("T08 esimerkki");
const numerot22 = [1,2,3,4,5];
const kaannettyTaulukko = numerot22.reverse();
console.log(kaannettyTaulukko);*/
console.log("................................................................................");

console.log("T09");
const nimet3 = ["Matti", "Anna", "Eeva"];
const pilkullaErotettu = nimet3.join(", ");
console.log(pilkullaErotettu);
console.log("................................................................................");

console.log("T10");
const numerot3 = [1,2,3,4,5];
const poistettava = 3;
const indeksi = numerot3.indexOf(poistettava);
if (indeksi !== -1) {
    numerot3.splice(indeksi, 1);
}
console.log(numerot3);
console.log("................................................................................");

console.log("T11");
const nimet4 = ["Matti", "Anna", "Eeva"];
const etsittävä = "Eeva";
const indeksi1 = nimet4.indexOf(etsittävä);
if (indeksi1 !== -1) {
console.log(`Nimi "${etsittävä}" löytyy indeksistä ${indeksi1}.`);
} else {
console.log(`Nimeä "${etsittävä}" ei löytynyt.`);
}
console.log("................................................................................");

console.log("T12");
const alkuTaulukko = [1,2,3,4,5];
const kopio = alkuTaulukko.slice(3);
console.log(kopio);
console.log("................................................................................");

console.log("T13");
const numerot4 = [1,2,3,4,5];
numerot4[2] = 6;
console.log(numerot4);
console.log("................................................................................");

console.log("T14");
const numerot5 = [1,2,3,4,5];
var summa = 0;
for(var i = 0; i < numerot5.length; i++)
{
    summa += numerot5[i];
}
console.log(summa);
console.log("................................................................................");

console.log("15");
const numerot15 = [1,2,3,4,5];
var summa = 0;
for (var i=0; i < numerot15.length; i++) {
    summa += numerot15[i];
}
var keskiarvo = summa / numerot15.length;
console.log(keskiarvo);
console.log("................................................................................");

console.log("T16");
const aTaulukko = [1,2,3];
const   monistettuTaulukko = [...aTaulukko, ...aTaulukko, ...aTaulukko]
console.log(monistettuTaulukko);
console.log("................................................................................");

console.log("17");
const uTaulukko = [1,2,2,3,4,4,5];
const uniikitArvot = [...new Set(uTaulukko)];
console.log(uniikitArvot);
console.log("................................................................................");

console.log("T18");
const numerot18 = [1,2,3,4,5];
[numerot18[0], numerot18[numerot18.length -1]] = [numerot18[numerot18.length -1], numerot18[0]];
console.log(numerot18);
console.log("................................................................................");

console.log("T19");
const nimet19 = ["Matti", "Anna", "Eeva"];
const isotKirjaimet = nimet19.map(nimi => nimi.toUpperCase());
console.log(isotKirjaimet);
console.log("................................................................................");

console.log("T20");
const numerot20 = [1,2,3,4,5];
const isotNumerot = numerot20.filter(numero => numero > 3);
console.log(isotNumerot);