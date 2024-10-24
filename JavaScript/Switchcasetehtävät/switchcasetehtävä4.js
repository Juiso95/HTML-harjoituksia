function arvoKortit()
{
  // Korttipakan maat + Numerot
  let pakka = [''];
  let maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  let numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  // Numeroiden ja maiden laskukaava
  lasku= 0;
  for(m = 0; m < maat.length; m++)
  {
    for(n = 0; n < numerot.length; n++)
    {
      if(m == maat.lengt-1 && n == numerot.length-1)
      {
        pakka[lasku] = maat[m] + numerot[n];
      }
       else {
        pakka[lasku] = maat[m] + numerot[n];
        lasku++;
       }
     }
   }
  //  Korttien valinta Math.Randomilla
 let kortit = [];
 for(l = 0; l < 5; l++)
 {
   temp = pakka[Math.floor(Math.random()*52)];
   kortit[l] = temp;
  }
 document.getElementById("vastaus").innerHTML = kortit;
}