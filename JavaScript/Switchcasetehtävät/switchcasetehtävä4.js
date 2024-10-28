let maat = ["Ruutu", "Pata", "Hertta", "Risti"];
let numerot = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

// 52 kortin määrittely

function arvo()
{
  let pakka = new Array();

  for (let i = 0; i < maat.length; i++)
  {
    for (let x = 0; x < numerot.length; x++)
    {
      let kortit = {Numero: numerot[x], maa: maat[i]};
      pakka.push(kortti);
    }
  }
  return deck;
}

// Pakan sekoitus

function sekoita(pakka)
{
  for (let i = 0; i < 1000; i++)
  {
    let paikka1 = Math.floor((Math.random() * pakka.length));
    let paikka2 = Math.floor((Math.random() * pakka.length));
    let tmp = pakka[paikka1];

    pakka[paikka1] = pakka[paikka2];
    pakka[paikka2] = tmp;
  }
}