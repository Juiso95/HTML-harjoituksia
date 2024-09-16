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