function suurin() 
{
    let taulukko = [];
    taulukko[0] = document.getElementById("eka").value;
    taulukko[1] = document.getElementById("toka").value;
    taulukko[2] = document.getElementById("kolmas").value;
    taulukko[3] = document.getElementById("neljas").value;
    taulukko[4] = document.getElementById("viides").value;
    document.getElementById("vastaus").innerHTML = "Annoit luvut " + taulukko[0] + " " + taulukko[1] + " " + taulukko[2] + " " + taulukko[3] + " " + taulukko[4];
    document.getElementById("vastaus2").innerHTML = "Antamistasi luvuista " + Math.max(...taulukko) + " on suurin.";
    event.preventDefault;
}